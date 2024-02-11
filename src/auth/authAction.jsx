import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = import.meta.env.VITE_APP_API_URL;

export const registerTutorUser = createAsyncThunk(
  "api/tutor/signup",
  async (tutorRegisterDetails, { rejectWithValue }) => {
    console.log(tutorRegisterDetails);
    try {
      await axios
        .post(`${backendURL}/api/tutor/signup`, tutorRegisterDetails, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("okok");
          console.log(res.data.code);
          if (res.data.code === -1) {
            console.log("in error");
            return rejectWithValue("error");
          }
        })
        .catch((err) => {
          console.log("error" + err);
        });
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

export const registerStduentUser = createAsyncThunk(
  "api/student/signup",
  async (studentRegisterDetails, { rejectWithValue }) => {
    try {
      await axios
        .post(`${backendURL}/api/student/signup`, studentRegisterDetails, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      // return custom error message from backend if present
      console.log("error");
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "api/user/login",
  async (credential, { rejectWithValue }) => {
    try {
      await axios
        .post(`${backendURL}/api/user/login`, credential, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
        });
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
