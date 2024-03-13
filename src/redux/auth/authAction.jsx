import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = import.meta.env.VITE_APP_API_URL;

export const registerTutorUser = createAsyncThunk(
  "api/tutor/signup",
  async (tutorRegisterDetails, { rejectWithValue }) => {
    console.log(tutorRegisterDetails);
    try {
      const response = await axios.post(
        `${backendURL}/api/tutor/signup`,
        tutorRegisterDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.code === -1) {
        return rejectWithValue(response.data.msg);
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

export const registerStduentUser = createAsyncThunk(
  "api/student/signup",
  async (studentRegisterDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendURL}/api/student/signup`,
        studentRegisterDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.code === -1) {
        return rejectWithValue(response.data.msg);
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

export const loginUser = createAsyncThunk(
  "api/user/login",
  async (credential, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendURL}/api/user/login`,
        credential,
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
        localStorage.setItem("userToken", "Bearer " + response.data.data.token);
        const userDetails = {
          id: response.data.data.id,
          email: response.data.data.email,
          authorities: response.data.data.authorities.map(
            (authority) => authority.authority
          ),
        };
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
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
