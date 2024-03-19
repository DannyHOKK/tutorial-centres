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

export const matchingStudentCase = createAsyncThunk(
  "tutor/matchingStudentCase",
  async (caseId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendURL}/tutor/matchingStudentCase?caseId=${caseId}`,
        "",
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

export const getMatchingCase = createAsyncThunk(
  "tutor/getMatchingCase",
  async (tutorId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendURL}/tutor/getMatchingCase?tutorId=${tutorId}`,
        "",
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

export const getStudentMatching = createAsyncThunk(
  "tutor/getStudentMatching",
  async (empty, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${backendURL}/tutor/getStudentMatching`,
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

export const cancelMatchingCase = createAsyncThunk(
  "tutor/cancelMatchingCase",
  async (caseId, { rejectWithValue }) => {
    try {
      console.log(caseId);
      const response = await axios.post(
        `${backendURL}/tutor/cancelMatchingCase?caseId=` + caseId,
        "",
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

export const rejectStudentMatching = createAsyncThunk(
  "tutor/rejectStudentMatching",
  async (studentMatchId, { rejectWithValue }) => {
    try {
      console.log(studentMatchId);
      const response = await axios.post(
        `${backendURL}/tutor/rejectStudentMatching?studentMatchId=` +
          studentMatchId,
        "",
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

export const acceptStudentMatching = createAsyncThunk(
  "tutor/acceptStudentMatching",
  async (studentMatchId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendURL}/tutor/acceptStudentMatching?studentMatchId=` +
          studentMatchId,
        "",
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

export const sendOtp = createAsyncThunk(
  "twilio/auth/sendOtp",
  async (phone, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendURL}/twilio/auth/sendOtp?phone=` + phone,
        "",
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

export const verifyOtpPhone = createAsyncThunk(
  "twilio/auth/verifyPhone",
  async (twilioOtpDTO, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendURL}/twilio/auth/verifyPhone`,
        twilioOtpDTO,
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
