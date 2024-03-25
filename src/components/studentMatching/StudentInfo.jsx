import React from "react";

const StudentInfo = ({ studentDetails }) => {
  console.log(studentDetails);
  return (
    <div>
      <div>學生編號：{studentDetails.id}</div>
      <div>創建日期：{studentDetails?.createDate.split("T")[0]}</div>

      <div className="student-info-list">
        <div>中文姓名：{studentDetails.chineseName}</div>
        <div>英文姓名：{studentDetails.engName}</div>
        <div>學生編號：{studentDetails.id}</div>
      </div>
    </div>
  );
};

export default StudentInfo;
