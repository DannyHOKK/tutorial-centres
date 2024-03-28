import React, { useEffect, useState } from "react";
import StudentCaseForm from "../components/studentCase/StudentCaseForm";
import { useDispatch, useSelector } from "react-redux";
import { createStudentCase } from "../redux/student/studentAction";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const StudentCase = () => {
  const [current, setCurrent] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  const [studentCase, setStudentCase] = useState({});
  const { error, createStudentCaseSuccess, loading } = useSelector(
    (state) => state.student
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

  const submitCaseHandler = (caseData) => {
    dispatch(createStudentCase(caseData));
    console.log(caseData);
    navigate("/");
  };

  // useEffect(() => {
  //   if (createStudentCaseSuccess) navigate("/");
  // }, [createStudentCaseSuccess]);

  return (
    <div className="page-container page-xs">
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
      <StudentCaseForm
        studentCase={studentCase}
        setStudentCase={setStudentCase}
        next={next}
        prev={prev}
        current={current}
        previousStep={previousStep}
        submitCaseHandler={submitCaseHandler}
      />
    </div>
  );
};

export default StudentCase;
