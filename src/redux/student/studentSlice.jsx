import { createSlice } from "@reduxjs/toolkit";
import { createStudentCase } from "./studentAction";

const initialState = {
  loading: false,
  error: null,
  success: false, // for monitoring the registration process.
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
        state.tutorList = payload.data;
      })
      .addCase(createStudentCase.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default tutorSlice.reducer;
