import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginForm = ({ loginHandler }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { loginError } = useSelector((state) => state.auth);

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

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form
        form={form}
        name="credential"
        labelCol={{
          span: 4,
        }}
        layout="vertical"
        style={{
          textAlign: "center",
          width: "100%",
          maxWidth: "500px",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
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
        <div style={{ textAlign: "right" }}>
          <a>忘記密碼？</a> <a>忘記登入名稱？</a>
        </div>
        {loginError && (
          <div
            style={{ color: "red", fontWeight: "700", marginBottom: "10px" }}
          >
            {loginError}
          </div>
        )}

        <Form.Item>
          <Button
            type="button"
            htmlType="submit"
            style={{
              backgroundColor: "orange",
              color: "white",
              margin: "15px 0",
              width: "100%",
              height: "40px",
            }}
            onClick={onFinish}
          >
            立即登入
          </Button>
          {/* <Button
            style={{ backgroundColor: "grey", color: "white" }}
            onClick={() => {
              navigate("/register");
            }}
          >
            註冊帳戶
          </Button> */}
        </Form.Item>
        <div style={{ textAlign: "left", lineHeight: "2", color: "grey" }}>
          <div>
            想成為導師？ <a href="/tutorRegister">註冊導師帳號</a>
          </div>
          <div>
            想成為學生？ <a href="/studentRegister">註冊學生帳號</a>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default LoginForm;
