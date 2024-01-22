import { Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import type { SelectProps } from "antd";
import tutorLevelList from "../staticData/subjectList.json";
import "./registerForm.css";

const TutorLevel = ({}) => {
  const options: SelectProps["options"] = [];
  const options2: SelectProps["options"] = [];
  const options3: SelectProps["options"] = [];
  const options4: SelectProps["options"] = [];
  const tutorLevel = tutorLevelList.tutorContent;
  for (let i = 0; tutorLevel[0].level.length > i; i++) {
    options.push({
      label: tutorLevel[0].level[i],
      value: tutorLevel[0].level[i],
    });
  }
  for (let i = 0; tutorLevel[1].level.length > i; i++) {
    options2.push({
      label: tutorLevel[1].level[i],
      value: tutorLevel[1].level[i],
    });
  }
  for (let i = 0; tutorLevel[2].level.length > i; i++) {
    options3.push({
      label: tutorLevel[2].level[i],
      value: tutorLevel[2].level[i],
    });
  }
  for (let i = 0; tutorLevel[3].level.length > i; i++) {
    options4.push({
      label: tutorLevel[3].level[i],
      value: tutorLevel[3].level[i],
    });
  }

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "86",
      }}
      style={{
        maxWidth: 800,
        margin: "auto",
      }}
      scrollToFirstError
    >
      <Form.Item name="tutor" label="可教授程度(補習)">
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="請選擇可教授程度(補習)"
          options={options}
        />
      </Form.Item>

      <Form.Item name="speaking" label="可教授程度(會話)">
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="請選擇可教授程度(會話)"
          options={options2}
        />
      </Form.Item>

      <Form.Item name="music" label="可教授程度(音樂)">
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="請選擇可教授程度(音樂)"
          options={options3}
        />
      </Form.Item>

      <Form.Item name="tutorLevel" label="可教授程度(其他)">
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
    </Form>
  );
};

export default TutorLevel;