import { createSlice } from "@reduxjs/toolkit";
import {
  cancelMatchingTutor,
  createStudentCase,
  getStudentCaseById,
  getStudentCaseList,
  getStudentMatching,
  matchingTutor,
} from "./studentAction";

const initialState = {
  loading: false,
  error: null,
  success: false, // for monitoring the registration process.
  studentSuccessMsg: null,
  studentCaseList: [],
  studentMatching: [],
  studentCaseMatching: [],
};

const tutorSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createStudentCase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createStudentCase.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createStudentCase.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getStudentCaseList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStudentCaseList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.studentCaseList = payload.data;
      })
      .addCase(getStudentCaseList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(matchingTutor.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(matchingTutor.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.studentSuccessMsg = payload.msg;
      })
      .addCase(matchingTutor.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getStudentMatching.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStudentMatching.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.studentMatching = payload.data;
      })
      .addCase(getStudentMatching.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(cancelMatchingTutor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(cancelMatchingTutor.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(cancelMatchingTutor.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getStudentCaseById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStudentCaseById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.studentCaseMatching = payload.data;
      })
      .addCase(getStudentCaseById.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default tutorSlice.reducer;
