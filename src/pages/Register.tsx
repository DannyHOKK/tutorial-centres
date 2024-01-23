import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import "./pages.css";
import RegisterProgressBar from "../components/RegisterProgressBar";

const Register = () => {
  const [current, setCurrent] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    // address: "",
    // chineseName: "",
    // confirm: "",
    // email: "",
    // engName: "",
    // gender: "",
    // hkid: "",
    // password: "",
    // phone: "",
    // secondarySchool: "",
  });

  const next = () => {
    setPreviousStep(current);
    setCurrent(current + 1);
    console.log(userInfo);
  };

  const prev = () => {
    if (current > 0) {
      setPreviousStep(current);
      setCurrent(current - 1);
      console.log(userInfo);
    }
  };

  return (
    <div className="login-container page-container">
      <div className="page-container-content">
        <div className="header-background">
          <span>導 師 註 冊</span>
        </div>
        <div className="">
          <RegisterProgressBar
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            current={current}
            previousStep={previousStep}
            next={next}
            prev={prev}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
