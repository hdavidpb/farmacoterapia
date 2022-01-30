import { configureStore } from "@reduxjs/toolkit";
import alertsSlice from "./features/alerts/alertsSlice";

export const store = configureStore({
  reducer: {
    alerts: alertsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
