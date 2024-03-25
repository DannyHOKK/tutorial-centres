import React, { useState } from "react";
import LoginForm from "../components/tutorLogin/LoginForm";
import AuthService from "../components/api/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/auth/authAction";
import { useNavigate } from "react-router-dom";

const TutorLogin = () => {
  const { loading, userDetails, loginError, loginSuccess } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = (studentInfo) => {
    dispatch(loginUser(studentInfo));
    if (loginSuccess) navigate("/");
  };

  return (
    <div className="page-container page-xs">
      <div className="page-header-title">導師/學生登入</div>
      <LoginForm loginHandler={loginHandler} />
    </div>
  );
};

export default TutorLogin;
