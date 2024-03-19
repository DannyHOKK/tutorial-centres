import { createSlice } from "@reduxjs/toolkit";
import {
  acceptStudentMatching,
  matchingStudentCase,
  rejectStudentMatching,
} from "./tutorAction";

const initialState = {
  tutorListLoading: false,
  tutorListError: null,
  tutorListSuccess: false, // for monitoring the registration process.
  tutorSuccessMsg: null,
};

const tutorSlice = createSlice({
  name: "tutorList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(matchingStudentCase.pending, (state) => {
        state.tutorListLoading = true;
        state.tutorListError = null;
        state.tutorListSuccess = false;
      })
      .addCase(matchingStudentCase.fulfilled, (state, { payload }) => {
        state.tutorListLoading = false;
        state.tutorListSuccess = true;
        state.tutorSuccessMsg = payload.msg;
        console.log(payload.msg);
      })
      .addCase(matchingStudentCase.rejected, (state, { payload }) => {
        state.tutorListLoading = false;
        state.tutorListError = payload;
        state.tutorListSuccess = false;
        console.log(payload);
      })
      .addCase(rejectStudentMatching.pending, (state) => {
        state.tutorListLoading = true;
        state.tutorListError = null;
        state.tutorListSuccess = false;
      })
      .addCase(rejectStudentMatching.fulfilled, (state, { payload }) => {
        state.tutorListLoading = false;
        state.tutorListSuccess = true;
        state.tutorSuccessMsg = payload.msg;
        console.log(payload.msg);
      })
      .addCase(rejectStudentMatching.rejected, (state, { payload }) => {
        state.tutorListLoading = false;
        state.tutorListError = payload;
        state.tutorListSuccess = false;
        console.log(payload);
      })
      .addCase(acceptStudentMatching.pending, (state) => {
        state.tutorListLoading = true;
        state.tutorListError = null;
        state.tutorListSuccess = false;
      })
      .addCase(acceptStudentMatching.fulfilled, (state, { payload }) => {
        state.tutorListLoading = false;
        state.tutorListSuccess = true;
        state.tutorSuccessMsg = payload.msg;
        console.log(payload.msg);
      })
      .addCase(acceptStudentMatching.rejected, (state, { payload }) => {
        state.tutorListLoading = false;
        state.tutorListError = payload;
        state.tutorListSuccess = false;
        console.log(payload);
      });
  },
});

export default tutorSlice.reducer;
