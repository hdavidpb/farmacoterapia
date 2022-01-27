import { configureStore } from "@reduxjs/toolkit";
import nutritionSlice from "./features/nutritionSlice";

export const store = configureStore({
  reducer: {
    nutrition: nutritionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
