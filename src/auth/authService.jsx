// React-specific entry point to allow generating React hooks
// Not using this Service
// just testing
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_APP_API_URL;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    // base url of backend API
    baseUrl: baseUrl,

    // prepareHeaders is used to configure the header of every request and gives access to getState which we use to include the token from the store
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken;
      if (token) {
        // include token in req header
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),

  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({
        url: "/api/student/testing",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetUserDetailsQuery } = authApi;
