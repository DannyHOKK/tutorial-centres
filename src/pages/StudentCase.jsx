import React, { useState } from "react";
import StudentCaseForm from "../components/studentCase/StudentCaseForm";

const StudentCase = () => {
  const [current, setCurrent] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  const [studentCase, setStudentCase] = useState([]);

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

  return (
    <div className="page-container page-xs">
      <StudentCaseForm
        studentCase={studentCase}
        setStudentCase={setStudentCase}
        next={next}
        prev={prev}
        current={current}
        previousStep={previousStep}
      />
    </div>
  );
};

export default StudentCase;
