import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  registerStduentUser,
  registerTutorUser,
} from "./authAction";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const userDetails = localStorage.getItem("userDetails")
  ? JSON.parse(localStorage.getItem("userDetails"))
  : null;

const userIdentity = localStorage.getItem("userDetails")
  ? JSON.parse(localStorage.getItem("userDetails")).authorities
  : null;

const initialState = {
  loading: false,
  userDetails, // for user object
  userToken, // for storing the JWT
  userIdentity,
  error: null,
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      // ...logout reducer
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
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
        state.success = true;
        state.userDetails = {
          id: payload.data.id,
          email: payload.data.email,
          authories: payload.data.authorities.map(
            (authority) => authority.authority
          ),
        };
        state.userToken = payload.data.token;
        console.log("logined");
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        console.log("rejected");
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
