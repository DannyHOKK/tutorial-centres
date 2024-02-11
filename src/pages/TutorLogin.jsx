import React, { useState } from "react";
import LoginForm from "../components/tutorLogin/LoginForm";
import "./pages.css";
import AuthService from "../components/api/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../auth/authAction";
const TutorLogin = () => {
  const { loading, userDetails, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const loginHandler = (studentInfo) => {
    // AuthService.loginTutor(credential).then((res) => {
    //   console.log(res);
    // });
    dispatch(loginUser(studentInfo));
  };

  return (
    <div className="login-container page-container">
      <h2>導師登入或登記</h2>
      <LoginForm loginHandler={loginHandler} />
    </div>
  );
};

export default TutorLogin;
