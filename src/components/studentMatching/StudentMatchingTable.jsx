import { Table } from "antd";
import React from "react";
import StudentMatchTutorTable from "../tutorMatching/StudentMatchTutorTable";

const StudentMatchingTable = ({
  studentMatching,
  studentCancelMatchingHandler,
}) => {
  return (
    <div>
      <StudentMatchTutorTable
        studentMatching={studentMatching}
        identity="student"
      />
    </div>
  );
};

export default StudentMatchingTable;
