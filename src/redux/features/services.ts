import { createAsyncThunk } from "@reduxjs/toolkit";
import { rest } from "../../../services/index";
import { IPatient } from "./interface";

export const getPatient = createAsyncThunk(
  "nutrition/get-patient",
  async (document: string) => {
    const query = `filter?${document ? `document=${document}` : ""}`;

    try {
      const res = await rest.get<IPatient[]>(
        `${process.env.REACT_APP_API_NUTRITION}/patient/${query}`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
