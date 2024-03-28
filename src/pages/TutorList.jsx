import React, { useEffect, useMemo, useState } from "react";
import TutorListFilter from "../components/tutorList/TutorListFilter";
import TutorListTable from "../components/tutorList/TutorListTable";
import { useDispatch, useSelector } from "react-redux";
import { getTutorList } from "../redux/tutor/tutorAction";
import { matchingTutor } from "../redux/student/studentAction";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const TutorList = () => {
  const dispatch = useDispatch();
  const [filteData, setFilteData] = useState({
    lowestSalary: 100,
    maxSalary: 1000,
    tutorAreas: [],
    tutorContent: [],
    tutorLevel: [],
    pageSize: 10,
    currentPage: 1,
  });

  const { loading, tutorList } = useSelector((state) => state.tutor);

  const { studentCaseSuccess, studentCaseError, studentSuccessMsg } =
    useSelector((state) => state.studentCase);

  useEffect(() => {
    console.log(studentCaseSuccess);
    if (studentCaseSuccess) {
      openNotification("success", studentSuccessMsg);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
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
  useEffect(() => {
    dispatch(getTutorList(filteData));
  }, [filteData]);

  return (
    <div className="page-container page-xll">
      <div className="page-header-title">星級導師</div>
      <div className="tutor-separate">
        <div className="tutor-separate-left">
          <TutorListFilter setFilteData={setFilteData} />
        </div>
        <div className="tutor-separate-right">
          <TutorListTable
            loading={loading}
            tutorList={tutorList}
            setFilteData={setFilteData}
          />
        </div>
      </div>
    </div>
  );
};

export default TutorList;
