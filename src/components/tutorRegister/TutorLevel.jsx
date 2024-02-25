import { Button, Form, Input, Select } from "antd";
import React, { useEffect } from "react";
// import type { SelectProps } from "antd";
import tutorLevelList from "../../staticData/subjectList.json";
import "./registerForm.css";

const TutorLevel = ({ next, prev }) => {
  const tutorLevel = tutorLevelList.tutorContent;
  const options = tutorLevel[0].level.map((level) => ({
    label: level,
    value: level,
  }));
  const options2 = tutorLevel[1].level.map((level) => ({
    label: level,
    value: level,
  }));
  const options3 = tutorLevel[2].level.map((level) => ({
    label: level,
    value: level,
  }));
  const options4 = tutorLevel[3].level.map((level) => ({
    label: level,
    value: level,
  }));
  return (
    <>
      <Form.Item name="tutorLevel" label="可教授程度(補習)">
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="請選擇可教授程度(補習)"
          options={options}
        />
      </Form.Item>

      <Form.Item name="tutorSpeaking" label="可教授程度(會話)">
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="請選擇可教授程度(會話)"
          options={options2}
        />
      </Form.Item>

      <Form.Item name="tutorMusic" label="可教授程度(音樂)">
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="請選擇可教授程度(音樂)"
          options={options3}
        />
      </Form.Item>

      <Form.Item name="tutorOtherLevel" label="可教授程度(其他)">
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="請選擇可教授程度(其他)"
          options={options4}
        />
      </Form.Item>

      <div className="register-subheader">授課時薪</div>

      <Form.Item
        name="lowestSalary"
        label="最低補習時薪"
        rules={[
          {
            required: true,
            message: "請輸入最低補習時薪",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="idealSalary"
        label="理想補習時薪"
        rules={[
          {
            required: true,
            message: "請輸入理想補習時薪",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default TutorLevel;
