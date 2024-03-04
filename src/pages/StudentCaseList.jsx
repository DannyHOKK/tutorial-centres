import React, { useEffect, useState } from "react";
import StudentCaseFilter from "../components/studentCaseList/StudentCaseFilter";
import StudentCaseTable from "../components/studentCaseList/StudentCaseTable";
import { useDispatch, useSelector } from "react-redux";
import { getStudentCaseList } from "../redux/student/studentAction";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

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
  const { success, error, loading, studentCaseList } = useSelector(
    (state) => state.student
  );

  useEffect(() => {
    dispatch(getStudentCaseList(queryData));
  }, []);

  return (
    <div className="page-xm page-container">
      <div className="student-case-header">補習個案</div>
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
      <StudentCaseFilter />
      <div>
        <StudentCaseTable studentCaseList={studentCaseList} />
      </div>
    </div>
  );
};

export default StudentCaseList;
