import React from "react";

const StudentInfo = ({ studentDetails }) => {
  console.log(studentDetails);
  return (
    <div>
      <div>學生編號：{studentDetails.id}</div>
    </div>
  );
};

export default StudentInfo;
