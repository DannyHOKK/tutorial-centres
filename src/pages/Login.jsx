import React from "react";
import LoginForm from "../components/LoginForm";
import "./pages.css";
const Login = () => {
  return (
    <div className="login-container page-container">
      <h2>導師登入或登記</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
