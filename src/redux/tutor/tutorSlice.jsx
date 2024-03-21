import { createSlice } from "@reduxjs/toolkit";
import {
  cancelMatchingCase,
  getMatchingCase,
  getStudentMatching,
  getTutor,
  getTutorList,
  matchingStudentCase,
} from "./tutorAction";

const initialState = {
  tutorList: [],
  tutorDetails: [],
  matchingStudentCaseDetails: [],
  studentMatching: [],
  loading: false,
  error: null,
  success: false, // for monitoring the registration process.
  getTutorSuccess: false,
  getTutorError: null,
  getTutorLoading: false,
};

const tutorSlice = createSlice({
  name: "tutor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTutorList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTutorList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.tutorList = payload.data;
      })
      .addCase(getTutorList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getTutor.pending, (state) => {
        state.getTutorLoading = true;
        state.getTutorError = null;
      })
      .addCase(getTutor.fulfilled, (state, { payload }) => {
        state.getTutorLoading = false;
        state.getTutorSuccess = true;
        state.tutorDetails = payload.data;
        console.log(payload.data);
      })
      .addCase(getTutor.rejected, (state, { payload }) => {
        state.getTutorLoading = false;
        state.getTutorError = payload;
        state.getTutorSuccess = false;
      })
      .addCase(getMatchingCase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMatchingCase.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.matchingStudentCaseDetails = payload.data;
        console.log(payload.data);
      })
      .addCase(getMatchingCase.rejected, (state, { payload }) => {
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
        console.log(payload.data);
      })
      .addCase(getStudentMatching.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(cancelMatchingCase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(cancelMatchingCase.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(cancelMatchingCase.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default tutorSlice.reducer;
