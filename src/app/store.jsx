import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlice";
import tutorReducer from "../redux/tutor/tutorSlice";
import tutorOtpReducer from "../redux/tutor/tutorOtpSlice";
import tutorListReducer from "../redux/tutor/tutorListSlice";
import studentReducer from "../redux/student/studentSlice";
import studentCaseReducer from "../redux/student/studentCaseSlice";
import { authApi } from "../redux/auth/authService";

const store = configureStore({
  reducer: {
    auth: authReducer,
    tutor: tutorReducer,
    student: studentReducer,
    studentCase: studentCaseReducer,
    tutorList: tutorListReducer,
    tutorOtp: tutorOtpReducer,
    // [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
export default store;
