import React from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

const registerTutor = (tutor: any) => {
  return axios
    .post(API_URL + "/api/tutor/signup", tutor, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

const loginTutor = (credential: any) => {
  return axios
    .post(API_URL + "/api/tutor/login", credential, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

const AuthService = {
  registerTutor,
  loginTutor,
};

export default AuthService;
