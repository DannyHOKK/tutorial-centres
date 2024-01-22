import { Form, Input, Select } from "antd";
import React from "react";

const Introduction = () => {
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
      <Form.Item
        name="introTitle"
        label="自我簡介標題"
        rules={[
          {
            required: true,
            message: "請輸入你的自我簡介標題",
          },
        ]}
      >
        <Input showCount />
      </Form.Item>

      <Form.Item
        name="Intro"
        label="介紹自己"
        tooltip="請輸入30字以上"
        rules={[
          {
            required: true,
            message: "請輸入你的自我介紹",
          },
        ]}
      >
        <Input.TextArea rows={6} showCount minLength={30} />
      </Form.Item>
    </Form>
  );
};

export default Introduction;
