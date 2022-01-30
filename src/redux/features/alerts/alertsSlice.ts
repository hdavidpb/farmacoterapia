import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "./interface";

const initialState: IInitialState = {
  showAlerts: false,
};

export const alertsSlice = createSlice({
  name: "alertsSlice",
  initialState,
  reducers: {
    setShowAlerts: (state) => {
      state.showAlerts = !state.showAlerts;
    },
  },
});

export const { setShowAlerts } = alertsSlice.actions;
export default alertsSlice.reducer;
