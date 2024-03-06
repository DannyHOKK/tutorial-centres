import React, { useEffect, useState } from "react";
import StudentCaseFilter from "../components/studentCaseList/StudentCaseFilter";
import StudentCaseTable from "../components/studentCaseList/StudentCaseTable";
import { useDispatch, useSelector } from "react-redux";
import { getStudentCaseList } from "../redux/student/studentAction";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import StudentCaseSideFilter from "../components/studentCaseList/StudentCaseSideFilter";

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
