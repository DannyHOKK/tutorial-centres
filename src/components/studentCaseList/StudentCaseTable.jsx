import React from "react";
import StudentCaseCard from "./StudentCaseCard";

const StudentCaseTable = ({ studentCaseList }) => {
  return (
    <div className="student-case-table-list">
      {studentCaseList.map((studentCase) => (
        <StudentCaseCard studentCase={studentCase} />
      ))}
    </div>
  );
};

export default StudentCaseTable;
