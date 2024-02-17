import React from "react";
import TutorCard from "./TutorCard";

const TutorListTable = ({ loading, tutorList }) => {
  return (
    <div>
      <div>導師表格</div>
      <br />
      <div className="tutor-list">
        {tutorList.map((tutor) => (
          <div key={tutor.id}>
            <TutorCard tutor={tutor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorListTable;
