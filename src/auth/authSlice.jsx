import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  registerStduentUser,
  registerTutorUser,
} from "./authAction";

const initialState = {
  loading: false,
  userDetails: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerTutorUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerTutorUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true; // registration successful
      })
      .addCase(registerTutorUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(registerStduentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerStduentUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true; // registration successful
      })
      .addCase(registerStduentUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true; // registration successful
        // console.log(payload);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
