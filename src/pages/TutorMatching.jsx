import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getMatchingCase,
  getStudentMatching,
  getTutor,
} from "../redux/tutor/tutorAction";
import TutorMatchingTable from "../components/tutorMatching/TutorMatchingTable";
import StudentMatchTutorTable from "../components/tutorMatching/StudentMatchTutorTable";
import TutorInfo from "../components/tutorMatching/TutorInfo";

const TutorMatching = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    success,
    matchingStudentCaseDetails,
    studentMatching,
    tutorDetails,
    getTutorLoading,
  } = useSelector((state) => state.tutor);
  const { userDetails } = useSelector((state) => state.auth);

  useEffect(() => {
    userDetails && dispatch(getMatchingCase(userDetails.id));
    userDetails && dispatch(getStudentMatching());
    userDetails && dispatch(getTutor(userDetails.id));
  }, []);

  return (
    <div className="page-xm page-container">
      <div className="page-header-title">個人資料</div>
      <TutorInfo
        tutorDetails={tutorDetails}
        getTutorLoading={getTutorLoading}
      />
      <br />
      <div className="page-header-title">學生個案配對記錄</div>
      <div>
        <TutorMatchingTable
          loading={loading}
          matchingStudentCaseDetails={matchingStudentCaseDetails}
        />
      </div>
      <br />
      <div className="page-header-title">學生搵你</div>
      <div>
        <StudentMatchTutorTable
          loading={loading}
          studentMatching={studentMatching}
        />
      </div>
    </div>
  );
};

export default TutorMatching;
