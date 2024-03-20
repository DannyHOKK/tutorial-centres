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
    filteredData.address = filteredData.address.join(",");

    const emptyArray = [];
    let finalResult;

    const convertdData = [];
    if (filteredData.hkOpenExam === "HKDSE") {
      Object.keys(filteredData?.dseCompulsory).forEach((dse) => {
        console.log(dse);
        convertdData.push(`${dse}:${filteredData.dseCompulsory[dse]}`);
      });
      filteredData?.dseElective.map((elective) => {
        convertdData.push(`${elective.subject}:${elective.grade}`);
      });

      const { dseCompulsory, dseElective, ...info } = filteredData;
      const examResult = convertdData.join(",");
      if (examResult !== "") {
        finalResult = { ...info, examResult };
      } else {
        finalResult = { ...info };
      }
    } else if (filteredData.hkOpenExam === "HKAL") {
      const alResult = emptyArray.concat(
        userInfo.alLang,
        userInfo.allist,
        userInfo.allist2,
        userInfo.allist3
      );
      alResult?.map((al) => {
        convertdData.push(`${al.subject}:${al.grade}`);
      });
      const { alLang, allist, allist2, allist3, ...info } = filteredData;
      const examResult = convertdData.join(",");
      if (examResult !== "") {
        finalResult = { ...info, examResult };
      } else {
        finalResult = { ...info };
      }
    } else if (filteredData.hkOpenExam === "IB") {
      const ibResult = emptyArray.concat(
        userInfo.languages,
        userInfo.ctv,
        userInfo.hss,
        userInfo.science,
        userInfo.mathematics
      );
      ibResult?.map((ib) => {
        convertdData.push(`${ib.subject}:${ib.grade}`);
      });

      const { languages, ctv, hss, science, mathematics, ...info } =
        filteredData;
      const examResult = convertdData.join(",");
      if (examResult !== "") {
        finalResult = { ...info, examResult };
      } else {
        finalResult = { ...info };
      }
    }
    console.log(finalResult);
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
