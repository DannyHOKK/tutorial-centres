import React, { useEffect, useState } from "react";
import RegionSelect from "./RegionSelect";
import TutorContent from "./TutorContent";
import TutorLevel from "./TutorLevel";
import "./registerForm.css";
import { Form } from "antd";

const TeachingContent = () => {
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
      <div className="register-subheader">授課區域</div>
      <RegionSelect />
      <div className="register-subheader">授課內容</div>
      <TutorContent />
      <div className="register-subheader">授課程度</div>
      <TutorLevel />
    </Form>
  );
};

export default TeachingContent;
