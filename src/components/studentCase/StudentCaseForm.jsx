import React from "react";
import {
  Button,
  Cascader,
  Checkbox,
  Divider,
  Form,
  Input,
  Radio,
  Select,
} from "antd";
import inputData from "../../staticData/inputData.json";
import { CheckCard } from "@ant-design/pro-components";

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
      offset: 6,
    },
  },
};

const StudentCaseForm = () => {
  const [form] = Form.useForm();
  const onFinish = () => {
    const values = form.getFieldsValue();
    const address = values.fullAddress[1];
    const { confirm, agreement, fullAddress, ...info } = values;
    const studentInfo = { ...info, address };
    studentRegister(studentInfo);
  };

  const filter = (inputValue, path) =>
    path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

  const dropdownRender = (menus) => (
    <div>
      {menus}
      <Divider style={{ margin: "0 250px" }} />
    </div>
  );

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      onFinish();
    } catch (error) {
      console.log("Form validation failed:", error);
    }
  };

  const validateNumber = (_, value) => {
    const regex = /^[5-9]\d{7}$/;
    if (value && !regex.test(value)) {
      return Promise.reject("請填寫以4、5、6、7、8、9開頭的8位香港手提電話");
    }
    return Promise.resolve();
  };

  const tutorCategory = inputData.studentCaseTutorCategory.map((category) => ({
    value: category,
    label: category,
  }));

  return (
    <div className="student-case-form">
      <Form
        {...formItemLayout}
        form={form}
        name="studentCase"
        className="page-xs"
        scrollToFirstError
      >
        <Form.Item
          name="tutorCategory"
          label="補習服務的類型"
          rules={[
            {
              required: true,
              message: "請選擇補習服務的類型",
            },
          ]}
        >
          <Select
            allowClear
            placeholder="補習服務的類型"
            options={tutorCategory}
          />
        </Form.Item>
        <Form.Item
          name="studentLevel"
          label="學生就讀的年級"
          rules={[
            {
              required: true,
              message: "請選擇學生就讀的年級",
            },
          ]}
        >
          <Select
            allowClear
            placeholder="學生就讀的年級"
            options={tutorCategory}
          />
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
            {
              pattern: /^[a-zA-Z\s]+$/,

              message: "請輸入英文",
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
            {
              pattern: /^[\u4E00-\u9FFF\s]+$/,
              message: "請輸入中文",
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
            {
              validator: validateNumber,
            },
          ]}
        >
          <Input maxLength={8} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="性別"
          rules={[{ required: true, message: "請選擇你的性別" }]}
        >
          <Radio.Group>
            <Radio value="male">男</Radio>
            <Radio value="female">女</Radio>
          </Radio.Group>
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
        <Form.Item {...tailFormItemLayout} className="form-button">
          <Button
            type="primary"
            htmlType="button" // Change the type to "button"
            onClick={handleSubmit} // Call the handleSubmit function
          >
            繼續
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StudentCaseForm;
