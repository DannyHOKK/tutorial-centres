import React from "react";
import TutorListFilter from "../components/tutorList/TutorListFilter";
import TutorListTable from "../components/tutorList/TutorListTable";

const TutorList = () => {
  return (
    <div className="page-container tutor-list-container">
      <div>導師搜尋器</div>
      <br />
      <TutorListFilter />
      <TutorListTable />
    </div>
  );
};

export default TutorList;
