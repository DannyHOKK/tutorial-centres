import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import "./pages.css";
import RegisterProgressBar from "../components/RegisterProgressBar";

const Register = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="login-container page-container">
      <h2>導師註冊</h2>
      <RegisterProgressBar current={current} next={next} prev={prev} />
    </div>
  );
};

export default Register;
