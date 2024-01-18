import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
        margin: "auto",
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="用戶名稱"
        name="username"
        rules={[
          {
            required: true,
            message: "請輸入你的用戶名稱",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="登入密碼"
        name="password"
        rules={[
          {
            required: true,
            message: "請輸入你的密碼",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button
          style={{
            backgroundColor: "orange",
            color: "white",
            margin: "0 10px",
          }}
        >
          立即登入
        </Button>
        <Button style={{ backgroundColor: "grey", color: "white" }}>
          註冊帳戶
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
