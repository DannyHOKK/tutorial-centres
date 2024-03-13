import React, { useEffect } from "react";
import StudentMatchingTable from "../components/studentMatching/StudentMatchingTable";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelMatchingTutor,
  getStudentCaseById,
  getStudentMatching,
} from "../redux/student/studentAction";
import StudentCaseRecordTable from "../components/studentMatching/StudentCaseRecordTable";

const StudentMatching = () => {
  const dispatch = useDispatch();
  const { loading, error, sucess, studentMatching, studentCaseMatching } =
    useSelector((state) => state.student);

  useEffect(() => {
    dispatch(getStudentMatching());
    dispatch(getStudentCaseById());
  }, []);
  return (
    <div className="page-xm page-container">
      <div className="page-header-title">你配對的導師</div>
      <StudentMatchingTable studentMatching={studentMatching} />
      <div className="page-header-title">你的補習個案</div>
      <StudentCaseRecordTable studentCaseMatching={studentCaseMatching} />
    </div>
  );
};

export default StudentMatching;
