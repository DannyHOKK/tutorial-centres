import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlice";
import tutorReducer from "../redux/tutor/tutorSlice";
import { authApi } from "../redux/auth/authService";

const store = configureStore({
  reducer: {
    auth: authReducer,
    tutor: tutorReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
export default store;
