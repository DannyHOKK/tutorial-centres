import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getMatchingCase,
  getStudentMatching,
} from "../redux/tutor/tutorAction";
import TutorMatchingTable from "../components/tutorMatching/TutorMatchingTable";
import StudentMatchTutorTable from "../components/tutorMatching/StudentMatchTutorTable";

const TutorMatching = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    success,
    matchingStudentCaseDetails,
    studentMatching,
    tutorDetails,
  } = useSelector((state) => state.tutor);
  const { userDetails } = useSelector((state) => state.auth);

  useEffect(() => {
    userDetails && dispatch(getMatchingCase(userDetails.id));
    userDetails && dispatch(getStudentMatching());
  }, []);

  return (
    <div className="page-xm page-container">
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
