import axios from "axios";
import LocalStorageService from "./localstorage";
// import { urls } from "./urls";

const urls = {
  auth: process.env.AUTH_SERVICES,
};

let isRefreshing = false;
let failedQueue: { reject: any; resolve: any }[] = [];

const processQueue = (error: Error | null, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// LocalstorageService
const { getAccessToken, getRefreshToken, setToken, clearToken } =
  LocalStorageService;
const rest = axios.create();
// Add a request interceptor
rest.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//Add a response interceptor
rest.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      (error.response.status === 403 &&
        originalRequest.url === urls.auth + "/auth/refresh") ||
      error.response.status === 401
    ) {
      clearToken();
      location.reload();
      return Promise.reject(error);
    }

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getRefreshToken();

      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return rest(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      return new Promise(async (resolve, reject) => {
        try {
          isRefreshing = true;
          const res = await axios.patch(
            urls.auth + "/auth/refresh",
            {},
            {
              headers: { Authorization: "Bearer " + refreshToken },
              timeout: 15000,
            }
          );
          if (res.status === 200) {
            setToken({
              access_token: res.data.access,
              refresh_token: res.data.refresh,
            });
            originalRequest.headers.Authorization = "Bearer " + res.data.access;
            processQueue(null, res.data.refresh);
            return resolve(rest(originalRequest));
          }
        } catch (e) {
          processQueue(e, null);
          clearToken();
          location.reload();
          // logOut()
          return reject(axios(originalRequest));
        } finally {
          isRefreshing = false;
        }
      });
    }
    return Promise.reject(error);
  }
);

export { rest };
