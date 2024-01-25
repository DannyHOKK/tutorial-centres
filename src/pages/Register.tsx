import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import "./pages.css";
import RegisterProgressBar from "../components/RegisterProgressBar";

const Register: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  const [userInfo, setUserInfo] = useState({});

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

  const submitForm = () => {
    console.log(userInfo);

    const filteredData = Object.fromEntries(
      Object.entries(userInfo).filter(([_, value]) => {
        return !Array.isArray(value) || value.length > 0;
      })
    );
    console.log("after filtering");
    console.log(filteredData);

    const emptyArray: { subject?: string; grade?: string }[] = [];

    if (filteredData.hkOpenExam === "HKDSE") {
      const convertedDataFormat = Object.entries(
        (userInfo as any).dseCompulsory
      ).map(([subject, grade]) => ({
        subject,
        grade,
      }));

      const hkdseResult = emptyArray.concat(
        convertedDataFormat as any,
        (userInfo as any).dseElective
      );
      const { dseCompulsory, dseElective, ...info } = filteredData;
      const finalData = { ...info, hkdseResult };
      console.log(finalData);
    } else if (filteredData.hkOpenExam === "HKAL") {
      const hkalResult = emptyArray.concat(
        (userInfo as any).alLang,
        (userInfo as any).allist,
        (userInfo as any).allist2,
        (userInfo as any).allist3
      );
      const { alLang, allist, allist2, allist3, ...info } = filteredData;
      const finalData = { ...info, hkalResult };
      console.log(finalData);
    } else if (filteredData.hkOpenExam === "IB") {
      const ibResult = emptyArray.concat(
        (userInfo as any).languages,
        (userInfo as any).ctv,
        (userInfo as any).hss,
        (userInfo as any).science,
        (userInfo as any).mathematics
      );
      const { languages, ctv, hss, science, mathematics, ...info } =
        filteredData;
      const finalData = { ...info, ibResult };
      console.log(finalData);
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
            submitForm={submitForm}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
