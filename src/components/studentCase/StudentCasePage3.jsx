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
      tutorGender: studentCase.tutorGender,
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
      <div className="student-case-form-header">確認補習個案資料</div>
      <div className="student-case-confrim">
        <div>學生就讀的類別</div>
        <div> {studentCase.studentLevelType}</div>
        <div>{studentCase.studentLevelType}</div>
        <div> {studentCase.studentLevel}</div>
        <div>學生就讀的類別</div>
        <div> {studentCase.tutorCategory}</div>
        <div>{studentCase.tutorCategory}</div>
        <div> {studentCase.tutorContent}</div>
        <div> 性別</div>
        <div> {studentCase.gender}</div>
        <div> 上課方式</div>
        <div> {studentCase.tutorMethod}</div>
        {studentCase.tutorMethod !== "視像補習" && (
          <>
            <div>地區</div>
            <div>{studentCase.address}</div>
            <div>詳細地址</div>
            <div>{studentCase.detailsAddress}</div>
          </>
        )}
        {studentCase.tutorRemark && (
          <>
            <div> 其他要求</div>
            <div> {studentCase.tutorRemark}</div>
          </>
        )}

        <div> 導師要求</div>
        <div> {studentCase.tutorRequest}</div>
        <div> 每星期堂數</div>
        <div> {studentCase.lessonPerWeek}</div>
        <div> 每堂時間</div>
        <div> {studentCase.lessonDuration}</div>
        {studentCase.timeslot && (
          <>
            <div>時間表</div>
            <div>
              {studentCase.timeslot.map((slot) => (
                <>
                  {console.log(slot.week + ": " + slot.time)}
                  {slot.week}: {slot.time}
                  <br />
                </>
              ))}
            </div>
          </>
        )}
      </div>
      <div style={{ textAlign: "center" }}>
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
