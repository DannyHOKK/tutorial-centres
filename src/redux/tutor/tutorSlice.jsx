import { createSlice } from "@reduxjs/toolkit";
import { getTutor, getTutorList } from "./tutorAction";

const initialState = {
  tutorList: [],
  tutor: [],
  loading: false,
  error: null,
  success: false, // for monitoring the registration process.
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
        state.loading = true;
        state.error = null;
      })
      .addCase(getTutor.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.tutor = payload.data;
        console.log(payload.data);
      })
      .addCase(getTutor.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default tutorSlice.reducer;
