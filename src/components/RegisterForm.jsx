import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
} from "antd";

const RegisterForm = ({ current, next }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const { Option } = Select;
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
        span: 16,
        offset: 4,
      },
    },
  };

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      next();
    } catch (error) {
      console.log("Form validation failed:", error);
    }
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
        maxWidth: 600,
        margin: "auto",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="登入電郵"
        rules={[
          {
            type: "email",
            message: "這個電郵無效",
          },
          {
            required: true,
            message: "請輸入你的電郵",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="密碼"
        rules={[
          {
            required: true,
            message: "請輸入你的密碼",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="確認密碼"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "請輸入確認密碼",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("確認密碼不一致"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="engName"
        label="英文名稱"
        tooltip="提示：必須與身份証上資料相同"
        rules={[
          {
            required: true,
            message: "請輸入你的英文名稱",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="chineseName"
        label="中文名稱"
        tooltip="提示：必須與身份証上資料相同"
        rules={[
          {
            required: true,
            message: "請輸入你的中文名稱",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="手提電話"
        tooltip="提示：請填寫以4、5、6、7、8、9開頭的8位香港手提電話"
        rules={[
          {
            required: true,
            message: "請輸入你的手提電話",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="hkid"
        label="身份證號碼"
        tooltip="接納補習個案簽註核對使用，包括括號內的數字和英文字母。例：A123456(A)"
        rules={[
          {
            required: true,
            message: "請輸入你的身份證號碼",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="gender"
        label="性別"
        rules={[{ required: true, message: "請選擇你的性別" }]}
      >
        <Row>
          <Radio.Group>
            <Radio value="male">男</Radio>
            <Radio value="female">女</Radio>
          </Radio.Group>
        </Row>
      </Form.Item>

      <Form.Item label="出生年份">
        <Row>
          <DatePicker picker="year" />
        </Row>
      </Form.Item>

      <Form.Item
        name="secondarySchool"
        label="就讀中學"
        rules={[
          {
            required: true,
            message: "請選擇你的性別",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="address"
        label="住宅地址"
        rules={[
          {
            required: true,
            message: "請輸入你的住宅地址",
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("請查閱並同意條款")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          我已查閱並同意 <a href="">條款</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          htmlType="button" // Change the type to "button"
          onClick={handleSubmit} // Call the handleSubmit function
        >
          Next
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RegisterForm;
