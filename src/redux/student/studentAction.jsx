import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const backendURL = import.meta.env.VITE_APP_API_URL;

export const createStudentCase = createAsyncThunk(
  "api/case/createCase",
  async (caseData, { rejectWithValue }) => {
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

export const getStudentCaseList = createAsyncThunk(
  "api/case/getStudentCaseList",
  async (queryData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendURL}/api/case/getStudentCaseList`,
        queryData,
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

export const matchingTutor = createAsyncThunk(
  "api/student/matchingTutor",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendURL}/api/student/matchingTutor`,
        formData,
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
  "api/student/getStudentMatching",
  async (empty, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${backendURL}/api/student/getStudentMatching`,
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

export const cancelMatchingTutor = createAsyncThunk(
  "api/student/cancelMatchingTutor",
  async (caseId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendURL}/api/student/cancelMatchingTutor?caseId=` + caseId,
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

export const getStudentCaseById = createAsyncThunk(
  "api/case/getStudentCaseById",
  async (empty, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${backendURL}/api/case/getStudentCaseById`,
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

export const rejectStudentCase = createAsyncThunk(
  "api/case/rejectStudentCase",
  async (tutorMatchCaseId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendURL}/api/case/rejectStudentCase?tutorMatchCaseId=` +
          tutorMatchCaseId,
        "",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("userToken"),
          },
        }
      );

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

export const acceptStudentCase = createAsyncThunk(
  "api/case/acceptStudentCase",
  async (tutorMatchCaseId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendURL}/api/case/acceptStudentCase?tutorMatchCaseId=` +
          tutorMatchCaseId,
        "",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("userToken"),
          },
        }
      );

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

export const getStudentById = createAsyncThunk(
  "api/student/getStudentById",
  async (tutorMatchCaseId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${backendURL}/api/student/getStudentById`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("userToken"),
          },
        }
      );

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
