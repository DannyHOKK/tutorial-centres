import { Button, Form, Input, Radio, Select } from "antd";
import React, { useState } from "react";
import inputData from "../../staticData/inputData.json";

const studentLevel = inputData.studentLevel.map((level) => ({
  label: level.type,
  value: level.type,
}));
const kindergartenLevel = inputData.studentLevel[0].level.map((level) => ({
  label: level,
  value: level,
}));
const primaryLevel = inputData.studentLevel[1].level.map((level) => ({
  label: level,
  value: level,
}));
const secondaryLevel = inputData.studentLevel[2].level.map((level) => ({
  label: level,
  value: level,
}));
const collegeLevel = inputData.studentLevel[3].level.map((level) => ({
  label: level,
  value: level,
}));
const adultLevel = inputData.studentLevel[4].level.map((level) => ({
  label: level,
  value: level,
}));
const tutorGender = inputData.tutorGender.map((gender) => ({
  label: gender,
  value: gender,
}));

const StudentCaseSideFilter = ({ setQueryData }) => {
  const [levelType, setLevelType] = useState("");

  return (
    <div className="student-case-side">
      <div className="student-case-side-filter">
        <div>學生背景： </div>

        <Select
          allowClear
          placeholder="學生就讀的類別"
          options={studentLevel}
          onChange={(value) => {
            setLevelType(value);
            setQueryData((prev) => ({
              ...prev,
              studentLevelType: value,
              studentLevel: [],
            }));
          }}
          style={{ margin: "15px 0", width: "100%" }}
        />

        {levelType === "幼稚園" && (
          <Select
            mode="multiple"
            allowClear
            placeholder="幼稚園年級"
            options={kindergartenLevel}
            onChange={(value) => {
              setQueryData((prev) => ({
                ...prev,
                studentLevel: value,
              }));
            }}
            style={{ width: "100%" }}
          />
        )}
        {levelType === "小學" && (
          <Select
            mode="multiple"
            allowClear
            placeholder="小學年級"
            options={primaryLevel}
            onChange={(value) => {
              setQueryData((prev) => ({
                ...prev,
                studentLevel: value,
              }));
            }}
            style={{ width: "100%" }}
          />
        )}
        {levelType === "中學" && (
          <Select
            mode="multiple"
            allowClear
            placeholder="中學年級"
            options={secondaryLevel}
            onChange={(value) => {
              setQueryData((prev) => ({
                ...prev,
                studentLevel: value,
              }));
            }}
            style={{ width: "100%" }}
          />
        )}
        {levelType === "大專或以上" && (
          <Select
            mode="multiple"
            allowClear
            placeholder="大專類別"
            options={collegeLevel}
            onChange={(value) => {
              setQueryData((prev) => ({
                ...prev,
                studentLevel: value,
              }));
            }}
            style={{ width: "100%" }}
          />
        )}
        {levelType === "成年人" && (
          <Select
            mode="multiple"
            allowClear
            placeholder="你的歲數"
            options={adultLevel}
            onChange={(value) => {
              setQueryData((prev) => ({
                ...prev,
                studentLevel: value,
              }));
            }}
            style={{ width: "100%" }}
          />
        )}

        <div style={{ marginTop: "30px" }}>導師性別： </div>
        <Select
          options={tutorGender}
          allowClear
          placeholder="導師性別"
          onChange={(value) => {
            setQueryData((prev) => ({
              ...prev,
              tutorGender: value,
            }));
          }}
          style={{ width: "100%", marginTop: "15px" }}
        />
        <div style={{ marginTop: "30px" }}>預期時薪 </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <Input
            pattern="[0-9]*"
            defaultValue={100}
            placeholder="最低"
            onChange={(value) => {
              setQueryData((prev) => ({
                ...prev,
                lowestSalary: parseInt(value.target.value),
              }));
            }}
          />
          ～
          <Input
            pattern="[0-9]*"
            defaultValue={1000}
            placeholder="最高"
            onChange={(value) => {
              setQueryData((prev) => ({
                ...prev,
                maxSalary: parseInt(value.target.value),
              }));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentCaseSideFilter;
