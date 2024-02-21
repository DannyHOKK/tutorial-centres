import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ loginHandler }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async () => {
    try {
      await form.validateFields();
      submitForm();
    } catch (error) {
      console.log("Form validation failed:", error);
    }
  };

  const submitForm = () => {
    const values = form.getFieldsValue();

    loginHandler(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 6,
      },
    },
  };

  return (
    <Form
      form={form}
      name="credential"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 800,
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
        label="登入電郵"
        name="email"
        rules={[
          {
            required: true,
            message: "請輸入你的登入電郵",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密碼"
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

      <Form.Item {...tailFormItemLayout}>
        <Button
          type="button"
          style={{
            backgroundColor: "orange",
            color: "white",
            margin: "0 10px",
          }}
          onClick={onFinish}
        >
          立即登入
        </Button>
        <Button
          style={{ backgroundColor: "grey", color: "white" }}
          onClick={() => {
            navigate("/register");
          }}
        >
          註冊帳戶
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
