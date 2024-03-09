import { createSlice } from "@reduxjs/toolkit";
import {
  createStudentCase,
  getStudentCaseList,
  matchingTutor,
} from "./studentAction";

const initialState = {
  loading: false,
  error: null,
  success: false, // for monitoring the registration process.
  studentCaseList: [],
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
      })
      .addCase(matchingTutor.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(matchingTutor.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default tutorSlice.reducer;
