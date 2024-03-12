import React, { useEffect } from "react";
import StudentMatchingTable from "../components/studentMatching/StudentMatchingTable";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelMatchingTutor,
  getStudentMatching,
} from "../redux/student/studentAction";
import StudentCaseRecordTable from "../components/studentMatching/StudentCaseRecordTable";

const StudentMatching = () => {
  const dispatch = useDispatch();
  const { loading, error, sucess, studentMatching } = useSelector(
    (state) => state.student
  );

  const studentCancelMatchingHandler = (caseId) => {
    dispatch(cancelMatchingTutor(caseId));
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getStudentMatching());
  }, []);
  return (
    <div className="page-xm page-container">
      <div className="page-header-title">你配對的導師</div>
      <StudentMatchingTable
        studentMatching={studentMatching}
        studentCancelMatchingHandler={studentCancelMatchingHandler}
      />
      <div className="page-header-title">你的補習個案</div>
      <StudentCaseRecordTable />
    </div>
  );
};

export default StudentMatching;
