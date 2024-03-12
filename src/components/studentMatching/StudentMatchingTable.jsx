import { Table } from "antd";
import React from "react";
import StudentMatchTutorTable from "../tutorMatching/StudentMatchTutorTable";

const StudentMatchingTable = ({
  studentMatching,
  studentCancelMatchingHandler,
}) => {
  return (
    <div>
      {/* <Table
        columns={columns}
        dataSource={data}
        className="tutor-map-student-table"
      /> */}
      <StudentMatchTutorTable
        studentMatching={studentMatching}
        identity="student"
        studentCancelMatchingHandler={studentCancelMatchingHandler}
      />
    </div>
  );
};

export default StudentMatchingTable;
