import { createSlice } from "@reduxjs/toolkit";
import {
  acceptStudentCase,
  matchingTutor,
  rejectStudentCase,
} from "./studentAction";

const initialState = {
  studentCaseLoading: false,
  studentCaseError: null,
  studentCaseSuccess: false, // for monitoring the registration process.
  studentSuccessMsg: null,
  rejectLoading: false,
  rejectError: null,
  rejectSuccess: false, // for monitoring the registration process.
  acceptLoading: false,
  acceptError: null,
  acceptSuccess: false, // for monitoring the registration process.
};

const tutorSlice = createSlice({
  name: "studentCase",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(matchingTutor.pending, (state) => {
        state.studentCaseLoading = true;
        state.studentCaseError = null;
        state.studentCaseSuccess = false;
      })
      .addCase(matchingTutor.fulfilled, (state, { payload }) => {
        state.studentCaseLoading = false;
        state.studentCaseSuccess = true;
        state.studentSuccessMsg = payload.msg;
      })
      .addCase(matchingTutor.rejected, (state, { payload }) => {
        state.studentCaseLoading = false;
        state.studentCaseError = payload;
      })
      .addCase(rejectStudentCase.pending, (state) => {
        state.rejectLoading = true;
        state.rejectError = null;
        state.rejectSuccess = false;
      })
      .addCase(rejectStudentCase.fulfilled, (state, { payload }) => {
        state.rejectLoading = false;
        state.rejectSuccess = true;
        state.studentSuccessMsg = payload.msg;
      })
      .addCase(rejectStudentCase.rejected, (state, { payload }) => {
        state.rejectLoading = false;
        state.rejectSuccess = false;
        state.rejectError = payload;
      })
      .addCase(acceptStudentCase.pending, (state) => {
        state.acceptLoading = true;
        state.acceptError = null;
        state.acceptSuccess = false;
      })
      .addCase(acceptStudentCase.fulfilled, (state, { payload }) => {
        state.acceptLoading = false;
        state.acceptSuccess = true;
        state.studentSuccessMsg = payload.msg;
      })
      .addCase(acceptStudentCase.rejected, (state, { payload }) => {
        state.acceptLoading = false;
        state.acceptSuccess = false;
        state.acceptError = payload;
      });
  },
});

export default tutorSlice.reducer;
