import React, { useEffect, useMemo, useState } from "react";
import TutorListFilter from "../components/tutorList/TutorListFilter";
import TutorListTable from "../components/tutorList/TutorListTable";
import { useDispatch, useSelector } from "react-redux";
import { getTutorList } from "../redux/tutor/tutorAction";

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
  }, []);

  const queryTutorList = (filteData) => {
    dispatch(getTutorList(filteData));
    console.log(tutorList);
  };
  return (
    <div className="page-container tutor-list-container">
      <div>導師搜尋器</div>
      <br />
      <TutorListFilter
        queryTutorList={queryTutorList}
        setFilteData={setFilteData}
      />
      <br />
      <TutorListTable loading={loading} tutorList={tutorList} />
    </div>
  );
};

export default TutorList;
