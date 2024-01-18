import React from "react";
import RegisterForm from "../components/RegisterForm";
import "./pages.css";

const Register = () => {
  return (
    <div className="login-container page-container">
      <h2>Register</h2>

      <RegisterForm />
    </div>
  );
};

export default Register;
