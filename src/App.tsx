import { Provider } from "react-redux";
import Sidebar from "@components/sidebarMenu/Sidebar";

import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  useRoutes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContainer } from "./styles";
import { store } from "./redux/store";
import { routes } from "@routes/routes";
const App = () => {
  let element = useRoutes(routes);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <Sidebar />
          {element}
        </AppContainer>
        <ToastContainer theme="colored" />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
