import { Button, Form, Input, Radio, Select } from "antd";
import React, { useState } from "react";
import inputData from "../../staticData/inputData.json";
import subjectList from "../../staticData/subjectList.json";

const other = subjectList.tutorContent[3].type.map((type) => ({
  value: type,
  label: type,
}));
const music = subjectList.tutorContent[2].type.map((type) => ({
  value: type,
  label: type,
}));
const speaking = subjectList.tutorContent[1].type.map((type) => ({
  value: type,
  label: type,
}));
const tutorCategory = subjectList.tutorContent.map((content) => ({
  value: content.category,
  label: content.category,
}));
const tutorial = subjectList.tutorContent[0].type.map((type) => ({
  value: type,
  label: type,
}));
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
  const [form] = Form.useForm();
  const [levelType, setLevelType] = useState("");

  return (
    <div className="student-case-side">
      <div className="student-case-side-filter">
        <Form form={form} name="studentCaseSideFilter" autoComplete="off">
          <div>學生背景： </div>
          <br />
          <Form.Item name="studentLevelType">
            <Select
              allowClear
              placeholder="學生就讀的類別"
              options={studentLevel}
              onChange={(value) => {
                setLevelType(value);
                setQueryData((prev) => ({
                  ...prev,
                  studentLevelType: value,
                }));
                form.setFieldValue("studentLevel");
              }}
            />
          </Form.Item>

          {levelType === "幼稚園" && (
            <Form.Item name="studentLevel">
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
              />
            </Form.Item>
          )}
          {levelType === "小學" && (
            <Form.Item name="studentLevel">
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
              />
            </Form.Item>
          )}
          {levelType === "中學" && (
            <Form.Item name="studentLevel">
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
              />
            </Form.Item>
          )}
          {levelType === "大專或以上" && (
            <Form.Item name="studentLevel">
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
              />
            </Form.Item>
          )}
          {levelType === "成年人" && (
            <Form.Item name="studentLevel">
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
              />
            </Form.Item>
          )}

          <Form.Item name="gender" label="要求導師性別">
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
            />
          </Form.Item>
          <Form.Item label="預期時薪">
            <div style={{ display: "flex" }}>
              <Form.Item name="lowestSalary" style={{ width: "100px" }}>
                <Input
                  placeholder="最低"
                  onChange={(value) => {
                    setQueryData((prev) => ({
                      ...prev,
                      lowestSalary: value,
                    }));
                  }}
                />
              </Form.Item>
              ～
              <Form.Item name="maxSalary" style={{ width: "100px" }}>
                <Input
                  placeholder="最高"
                  onChange={(value) => {
                    setQueryData((prev) => ({
                      ...prev,
                      maxSalary: value,
                    }));
                  }}
                />
              </Form.Item>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default StudentCaseSideFilter;
