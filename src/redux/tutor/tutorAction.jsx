import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = import.meta.env.VITE_APP_API_URL;

export const getTutorList = createAsyncThunk(
  "tutor/getTutorList",
  async (filteData, { rejectWithValue }) => {
    console.log(filteData);
    try {
      const response = await axios.post(
        `${backendURL}/tutor/getTutorList`,
        filteData,
        {
          headers: {
            "Content-Type": "application/json",
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

export const getTutor = createAsyncThunk(
  "tutor/getTutor",
  async (tutorId, { rejectWithValue }) => {
    console.log(tutorId);
    try {
      const response = await axios.get(
        `${backendURL}/tutor/getTutor?tutorId=${tutorId}`,
        {
          headers: {
            "Content-Type": "application/json",
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
