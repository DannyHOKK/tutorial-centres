import React, { useState } from "react";
import StudentCaseForm from "../components/studentCase/StudentCaseForm";

const StudentCase = () => {
  const [current, setCurrent] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);

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
        current={current}
        previousStep={previousStep}
        next={next}
        prev={prev}
      />
    </div>
  );
};

export default StudentCase;
