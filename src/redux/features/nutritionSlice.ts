import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "./interface";
import { getPatient } from "./services";

const initialState: IInitialState = {
  patient: [],
  loading: false,
};

export const nutritionSlice = createSlice({
  name: "nutritionSlice",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getPatient.pending, (state) => {
      state.loading = true;
    });
    addCase(getPatient.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.patient = payload!;
    });
  },
});

export default nutritionSlice.reducer;
