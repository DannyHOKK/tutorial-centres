import React from "react";

const StudentCaseCard = ({ studentCase }) => {
  return (
    <a href="#" style={{ textDecoration: "none", color: "black" }}>
      <div className="student-case-card">
        <div className="student-case-card-header">
          <div>
            <span>
              <strong>{studentCase.studentLevel}</strong>
            </span>
            <span className="student-level-type">
              {studentCase.studentLevelType}
            </span>
            <span style={{ color: "blue" }}>
              {studentCase.tutorContent.replaceAll(",", " ")}
            </span>
          </div>
          <div className="student-case-method">{studentCase.tutorMethod}</div>
        </div>
        {studentCase.address && (
          <div className="student-case-address">
            {studentCase.address} : {studentCase.detailsAddress}
          </div>
        )}
        <div>
          HKD ${studentCase.minSalary + "~ $" + studentCase.maxSalary}/每小時
        </div>
        <div className="lesson-time">
          每週{studentCase.lessonPerWeek} ｜ {studentCase.lessonDuration}/每堂
        </div>
        {/* {studentCase.timeslot && (
          <div> 可補習時間表： {studentCase.timeslot}</div>
        )} */}
        <div className="tutor-request">
          {studentCase.tutorGender}
          {studentCase.tutorRequest.replaceAll(",", "  ")}
        </div>
      </div>
    </a>
  );
};

export default StudentCaseCard;
