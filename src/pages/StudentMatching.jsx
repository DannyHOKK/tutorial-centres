import React, { useEffect } from "react";
import StudentMatchingTable from "../components/studentMatching/StudentMatchingTable";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelMatchingTutor,
  getStudentById,
  getStudentCaseById,
  getStudentMatching,
} from "../redux/student/studentAction";
import StudentCaseRecordTable from "../components/studentMatching/StudentCaseRecordTable";
import { notification } from "antd";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import StudentInfo from "../components/studentMatching/StudentInfo";

const StudentMatching = () => {
  const dispatch = useDispatch();
  const {
    getStudentMatchingLoading,
    studentMatching,
    loading,
    studentCaseMatching,
  } = useSelector((state) => state.student);
  const { getStudentLoading, studentDetails } = useSelector(
    (state) => state.studentInfo
  );

  const { studentCaseSuccess, studentCaseError, studentSuccessMsg } =
    useSelector((state) => state.studentCase);

  useEffect(() => {
    dispatch(getStudentById());
    dispatch(getStudentMatching());
    dispatch(getStudentCaseById());
  }, []);

  useEffect(() => {
    console.log(studentCaseSuccess);
    if (studentCaseSuccess) {
      openNotification("success", studentSuccessMsg);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      // navigate("/tutorList");
    }
    if (studentCaseError) {
      openNotification("error", studentCaseError);
    }
  }, [studentCaseSuccess, studentCaseError]);

  const openNotification = (status, msg) => {
    if (status === "success") {
      notification.open({
        message: (
          <>
            <TaskAltIcon style={{ color: "green" }} />
            {msg}
          </>
        ),
        top,
      });
    }
    if (status === "error") {
      notification.open({
        message: msg,
        description: "如有需要請聯絡我們",
        top,
      });
    }
  };

  return (
    <div className="page-xm page-container">
      <div className="page-header-title">個人資料</div>
      <StudentInfo
        getStudentLoading={getStudentLoading}
        studentDetails={studentDetails}
      />
      <div className="page-header-title">你配對的導師</div>
      <StudentMatchingTable
        getStudentMatchingLoading={getStudentMatchingLoading}
        studentMatching={studentMatching}
      />
      <div className="page-header-title">你的補習個案</div>
      <StudentCaseRecordTable
        loading={loading}
        studentCaseMatching={studentCaseMatching}
      />
    </div>
  );
};

export default StudentMatching;
