import { createSlice } from "@reduxjs/toolkit";
import { getStudentById } from "./studentAction";

const initialState = {
  getStudentLoading: false,
  getStudentError: null,
  getStudentSuccess: false, // for monitoring the registration process.
  studentDetails: null,
};

const studentInfoSlice = createSlice({
  name: "studentInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudentById.pending, (state) => {
        state.getStudentLoading = true;
        state.getStudentError = null;
      })
      .addCase(getStudentById.fulfilled, (state, { payload }) => {
        state.getStudentLoading = false;
        state.getStudentSuccess = true;
        state.studentDetails = payload.data;
      })
      .addCase(getStudentById.rejected, (state, { payload }) => {
        state.getStudentLoading = false;
        state.getStudentError = payload;
      });
  },
});

export default studentInfoSlice.reducer;
