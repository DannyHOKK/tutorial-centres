import { Button, Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import "../global.css";

const Introduction = ({ userInfo, setUserInfo, current, prev, submitForm }) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      await onFinish();
    } catch (error) {
      console.log("Form validation failed:", error);
    }
  };

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      await setUserInfo((prevInfo: any) => ({
        ...prevInfo,
        introTitle: values.introTitle,
        intro: values.intro,
      }));
    } catch (error) {
      console.log("Form validation failed:", error);
    }
  };

  useEffect(() => {
    if (userInfo.introTitle && userInfo.intro) {
      console.log(userInfo);
      console.log("hi");
      submitForm(); // Call submitForm() after userInfo is updated
    }
  }, [userInfo]);

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
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 24,
        offset: 0,
      },
    },
  };
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      className="page-xs"
      scrollToFirstError
      initialValues={userInfo}
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
        name="intro"
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

      <Form.Item {...tailFormItemLayout} className="form-button">
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
      </Form.Item>
    </Form>
  );
};

export default Introduction;
