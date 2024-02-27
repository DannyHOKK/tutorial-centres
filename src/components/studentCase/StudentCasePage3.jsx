import { Button } from "antd";
import React from "react";

const StudentCasePage3 = ({
  studentCase,
  setStudentCase,
  prev,
  submitCaseHandler,
}) => {
  const handleSubmit = () => {
    const transformedData = {
      ...studentCase,
      timeslot:
        studentCase.timeslot !== undefined
          ? studentCase.timeslot
              .map(({ week, time }) => `${week}:${time}`)
              .join(",")
          : "",
      address:
        studentCase.address !== undefined && studentCase.address !== ""
          ? studentCase.address.join("/")
          : "",
      tutorContent: studentCase.tutorContent.join(","),
      detailsAddress:
        studentCase.detailsAddress !== undefined &&
        studentCase.detailsAddress !== ""
          ? studentCase.detailsAddress
          : "",
      tutorRequest: studentCase.tutorRequest.join(","),
      minSalary: studentCase.lowestSalary[0],
      maxSalary: studentCase.lowestSalary[1],
    };

    const filteredData = Object.entries(transformedData)
      .filter(([key, value]) => value !== "")
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
    submitCaseHandler(filteredData);
  };

  return (
    <div className="student-case-form">
      <div className="student-case-confrim">
        <div>確認補習個案資料</div>
        <div>學生就讀的類別: {studentCase.studentLevelType}</div>
        <div>
          {studentCase.studentLevelType}: {studentCase.studentLevel}
        </div>
        <div>學生就讀的類別: {studentCase.tutorCategory}</div>
        <div>
          {studentCase.tutorCategory}: {studentCase.tutorContent}
        </div>
        <div> 性別: {studentCase.gender}</div>
        <div> 上課方式: {studentCase.tutorMethod}</div>
        {studentCase.tutorMethod === "視像補習" ? <></> : <></>}
        <div> 導師要求: {studentCase.tutorRequest}</div>
        <div> 每星期堂數: {studentCase.lessonPerWeek}</div>
        <div> 每堂時間（小時）: {studentCase.lessonDuration}</div>

        <Button
          style={{
            margin: "0 8px",
          }}
          onClick={() => prev()}
        >
          上一頁
        </Button>
        <Button
          type="primary"
          htmlType="button" // Change the type to "button"
          onClick={handleSubmit} // Call the handleSubmit function
        >
          提交
        </Button>
      </div>
    </div>
  );
};

export default StudentCasePage3;
