import React, { useEffect, useState } from "react";
import RegisterForm from "../components/tutorRegister/RegisterForm";
import "./pages.css";
import RegisterProgressBar from "../components/tutorRegister/RegisterProgressBar";
import AuthService from "../components/api/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { registerTutorUser } from "../redux/auth/authAction";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const TutorRegister = () => {
  const [current, setCurrent] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const { loading, userDetails, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const next = () => {
    setPreviousStep(current);
    setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) {
      setPreviousStep(current);
      setCurrent(current - 1);
    }
  };

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate("/login");
    // redirect authenticated user to profile screen
    // if (userInfo) navigate('/user-profile')
  }, [navigate, userInfo, success]);

  const submitForm = () => {
    const filteredData = Object.fromEntries(
      Object.entries(userInfo).filter(([_, value]) => {
        return !Array.isArray(value) || value.length > 0;
      })
    );

    const emptyArray = [];
    let finalResult = { ...filteredData };

    if (filteredData.hkOpenExam === "HKDSE") {
      const convertedDataFormat = Object.entries(userInfo.dseCompulsory).map(
        ([subject, grade]) => ({
          subject,
          grade,
        })
      );

      const examResult = emptyArray.concat(
        convertedDataFormat,
        userInfo.dseElective
      );

      const { dseCompulsory, dseElective, agreement, confirm, ...info } =
        filteredData;
      finalResult = { ...info, examResult };
    } else if (filteredData.hkOpenExam === "HKAL") {
      const examResult = emptyArray.concat(
        userInfo.alLang,
        userInfo.allist,
        userInfo.allist2,
        userInfo.allist3
      );
      const { alLang, allist, allist2, allist3, agreement, confirm, ...info } =
        filteredData;
      finalResult = { ...info, examResult };
    } else if (filteredData.hkOpenExam === "IB") {
      const examResult = emptyArray.concat(
        userInfo.languages,
        userInfo.ctv,
        userInfo.hss,
        userInfo.science,
        userInfo.mathematics
      );
      const {
        languages,
        ctv,
        hss,
        science,
        mathematics,
        agreement,
        confirm,
        ...info
      } = filteredData;
      finalResult = { ...info, examResult };
    }
    console.log(finalResult);
    // AuthService.registerTutor(finalResult);
    dispatch(registerTutorUser(finalResult));
  };

  return (
    <div className="login-container page-container page-xll">
      <Spin
        spinning={loading}
        fullscreen
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 24,
            }}
            spin
          />
        }
      />
      <div className="page-container-content">
        <div className="header-background">
          <span>導 師 註 冊</span>
        </div>
        <div>
          <RegisterProgressBar
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            current={current}
            previousStep={previousStep}
            next={next}
            prev={prev}
            submitForm={submitForm}
          />
        </div>
      </div>
    </div>
  );
};

export default TutorRegister;
