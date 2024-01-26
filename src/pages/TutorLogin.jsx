import React from "react";
import LoginForm from "../components/tutorLogin/LoginForm";
import "./pages.css";
const TutorLogin = () => {
  return (
    <div className="login-container page-container">
      <h2>導師登入或登記</h2>
      <LoginForm />
    </div>
  );
};

export default TutorLogin;
