import React, { useEffect, useState } from "react";
import StudentCaseFilter from "../components/studentCaseList/StudentCaseFilter";
import StudentCaseTable from "../components/studentCaseList/StudentCaseTable";
import { useDispatch, useSelector } from "react-redux";
import { getStudentCaseList } from "../redux/student/studentAction";
import { Spin, notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
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
  });
  const dispatch = useDispatch();
  const { loading, studentCaseList } = useSelector((state) => state.student);
  const { success, error, tutorSuccessMsg } = useSelector(
    (state) => state.tutor
  );

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
    if (success) {
      openNotification("success", tutorSuccessMsg);
    }
    if (error) {
      openNotification("error", error);
    }
  }, [success, error]);

  useEffect(() => {
    dispatch(getStudentCaseList(queryData));
  }, [queryData]);

  return (
    <div className="page-xll page-container">
      <div className="page-header-title">補習個案</div>
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
      <div className="student-case-separate">
        <div className="student-case-left">
          <StudentCaseSideFilter setQueryData={setQueryData} />
        </div>
        <div className="student-case-right">
          <StudentCaseFilter setQueryData={setQueryData} />
          <StudentCaseTable studentCaseList={studentCaseList} />
        </div>
      </div>
    </div>
  );
};

export default StudentCaseList;
