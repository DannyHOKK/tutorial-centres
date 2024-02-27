import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const backendURL = import.meta.env.VITE_APP_API_URL;

export const createStudentCase = createAsyncThunk(
  "api/case/createCase",
  async (caseData, { rejectWithValue }) => {
    console.log(localStorage.getItem("userToken"));
    try {
      const response = await axios.post(
        `${backendURL}/api/case/createCase`,
        caseData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("userToken"),
          },
        }
      );

      console.log(response);

      if (response.data.code === -1) {
        return rejectWithValue(response.data.msg);
      } else {
        return response.data;
      }
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
