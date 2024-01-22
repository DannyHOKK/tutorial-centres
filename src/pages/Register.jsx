import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import "./pages.css";
import RegisterProgressBar from "../components/RegisterProgressBar";

const Register = () => {
  const [current, setCurrent] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);

  const next = () => {
    setPreviousStep(current);
    setCurrent(current + 1);
    console.log(current + "   " + previousStep);
  };

  const prev = () => {
    if (current > 0) {
      setPreviousStep(current);
      setCurrent(current - 1);
    }
    console.log(current + "   " + previousStep);
  };

  return (
    <div className="login-container page-container">
      <div className="page-container-content">
        <div className="header-background">
          <span>導師註冊</span>
        </div>
        <RegisterProgressBar
          current={current}
          previousStep={previousStep}
          next={next}
          prev={prev}
        />
      </div>
    </div>
  );
};

export default Register;
