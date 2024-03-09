import React, { useEffect, useMemo, useState } from "react";
import TutorListFilter from "../components/tutorList/TutorListFilter";
import TutorListTable from "../components/tutorList/TutorListTable";
import { useDispatch, useSelector } from "react-redux";
import { getTutorList } from "../redux/tutor/tutorAction";
import { matchingTutor } from "../redux/student/studentAction";

const TutorList = () => {
  const dispatch = useDispatch();
  const [filteData, setFilteData] = useState({
    lowestSalary: 100,
    maxSalary: 1000,
    tutorAreas: [],
    tutorContent: [],
    tutorLevel: [],
  });

  const { loading, error, success, tutorList } = useSelector(
    (state) => state.tutor
  );

  useEffect(() => {
    dispatch(getTutorList(filteData));
    console.log(filteData);
  }, [filteData]);
  return (
    <div className="page-container page-xll">
      <div className="page-header-title">星級導師</div>
      <div className="tutor-separate">
        <div className="tutor-separate-left">
          <TutorListFilter setFilteData={setFilteData} />
        </div>
        <div className="tutor-separate-right">
          <TutorListTable loading={loading} tutorList={tutorList} />
        </div>
      </div>
    </div>
  );
};

export default TutorList;
