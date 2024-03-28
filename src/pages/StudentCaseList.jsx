import React, { useEffect, useState } from "react";
import StudentCaseFilter from "../components/studentCaseList/StudentCaseFilter";
import StudentCaseTable from "../components/studentCaseList/StudentCaseTable";
import { useDispatch, useSelector } from "react-redux";
import { getStudentCaseList } from "../redux/student/studentAction";
import { Spin, notification } from "antd";
import StudentCaseSideFilter from "../components/studentCaseList/StudentCaseSideFilter";
import { TaskAltOutlined } from "@mui/icons-material";

const StudentCaseList = () => {
  const [queryData, setQueryData] = useState({
    lowestSalary: 0,
    maxSalary: 0,
    studentLevel: [],
    studentLevelType: "",
    tutorCategory: "",
    tutorContent: [],
    tutorGender: "",
    currentPage: 1,
    pageSize: 10,
  });
  const dispatch = useDispatch();
  const { loading, studentCaseList } = useSelector((state) => state.student);
  const {
    tutorListSuccess,
    tutorListError,
    tutorListLoading,
    tutorSuccessMsg,
  } = useSelector((state) => state.tutorList);

  const openNotification = (status, msg) => {
    if (status === "success") {
      notification.open({
        message: (
          <>
            <TaskAltOutlined style={{ color: "green" }} />
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

  useEffect(() => {
    if (tutorListSuccess) {
      openNotification("success", tutorSuccessMsg);
      setTimeout(() => {
        window.location.reload();
      }, 800);
    }
    if (tutorListError) {
      openNotification("error", tutorListError);
    }
    console.log("testing");
  }, [tutorListSuccess, tutorListError]);

  useEffect(() => {
    dispatch(getStudentCaseList(queryData));
  }, [queryData]);

  return (
    <div className="page-xll page-container">
      <div className="page-header-title">補習個案</div>

      <div className="student-case-separate">
        <div className="student-case-left">
          <StudentCaseSideFilter setQueryData={setQueryData} />
        </div>
        <div className="student-case-right">
          <StudentCaseFilter setQueryData={setQueryData} />
          <StudentCaseTable
            studentCaseList={studentCaseList}
            loading={loading}
            setQueryData={setQueryData}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentCaseList;
