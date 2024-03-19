import { createSlice } from "@reduxjs/toolkit";
import {
  acceptStudentMatching,
  matchingStudentCase,
  rejectStudentMatching,
  sendOtp,
  verifyOtpPhone,
} from "./tutorAction";

const initialState = {
  otpLoading: false,
  otpError: null,
  otpSuccess: false, // for monitoring the registration process.
  verifySuccess: false,
  verifyError: null,
  verifyLoading: false,
};

const tutorSlice = createSlice({
  name: "tutorOtp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.otpLoading = true;
        state.otpError = null;
        state.otpSuccess = false;
      })
      .addCase(sendOtp.fulfilled, (state, { payload }) => {
        state.otpLoading = false;
        state.otpSuccess = true;
      })
      .addCase(sendOtp.rejected, (state, { payload }) => {
        state.otpLoading = false;
        state.otpError = payload;
        state.otpSuccess = false;
      })
      .addCase(verifyOtpPhone.pending, (state) => {
        state.verifyLoading = true;
        state.verifyError = null;
        state.verifySuccess = false;
      })
      .addCase(verifyOtpPhone.fulfilled, (state, { payload }) => {
        state.verifyLoading = false;
        state.verifySuccess = true;
      })
      .addCase(verifyOtpPhone.rejected, (state, { payload }) => {
        state.verifyLoading = false;
        state.verifyError = payload;
        state.verifySuccess = false;
      });
  },
});

export default tutorSlice.reducer;
