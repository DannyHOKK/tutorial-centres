import React, { useState } from "react";
import LoginForm from "../components/tutorLogin/LoginForm";
import AuthService from "../components/api/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/auth/authAction";
import { useNavigate } from "react-router-dom";

const TutorLogin = () => {
  const { loading, userDetails, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = (studentInfo) => {
    // AuthService.loginTutor(credential).then((res) => {
    //   console.log(res);
    // });
    dispatch(loginUser(studentInfo));
    if (success) navigate("/");
  };

  return (
    <div className="login-container page-container">
      <h2>導師登入或登記</h2>
      <LoginForm loginHandler={loginHandler} />
    </div>
  );
};

export default TutorLogin;
