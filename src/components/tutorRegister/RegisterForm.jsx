import React, { useEffect, useState } from "react";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  Divider,
} from "antd";

import AuthService from "../api/AuthService";
import inputData from "../../staticData/inputData.json";
import { useDispatch } from "react-redux";
import { sendOtp } from "../../redux/tutor/tutorAction";

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
const options = inputData.location.map((location) => ({
  value: location.region,
  label: location.region,
  children: location.area.map((area) => ({
    value: area,
    label: area,
  })),
}));

const dropdownRender = (menus) => (
  <div>
    {menus}
    <Divider style={{ margin: "0 160px" }} />
  </div>
);

const RegisterForm = ({ userInfo, setUserInfo, current, next }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [emailList, setEmailList] = useState([]);

  const onFinish = () => {
    const values = form.getFieldsValue();
    const filteredData = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value !== undefined)
    );

    Object.keys(filteredData).forEach((key) => {
      setUserInfo((prevInfo) => ({
        ...prevInfo,
        [key]: filteredData[key],
      }));
    });
  };

  useEffect(() => {
    getEmailListHandler();
  }, []);

  const getEmailListHandler = () => {
    // const response = await AuthService.getAllEmail();
    // setEmailList(response.data.data);
    AuthService.getAllEmail()
      .then((res) => {
        setEmailList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      onFinish();
      dispatch(sendOtp(form.getFieldValue("phone")));
      next();
      // }
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

  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        className="page-xs"
        scrollToFirstError
        initialValues={userInfo}
      >
        <div className="register-subheader">個人資料</div>

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
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (emailList !== undefined && emailList.includes(value)) {
                  return Promise.reject("電郵已經被註冊");
                }
                return Promise.resolve();
              },
            }),
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
          name="hkId"
          label="身份證號碼"
          tooltip="接納補習個案簽註核對使用，輸入英文字母和頭四位數字。例：A1234"
          rules={[
            {
              required: true,
              message: "請輸入你的身份證號碼",
              whitespace: true,
            },
            {
              pattern: /^[A-Za-z]\d{4}$/,
              message: "輸入英文字母和頭四位數字",
            },
          ]}
        >
          <Input maxLength={5} />
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
          name="birthYear"
          label="出生年份"
          rules={[{ required: true, message: "請選擇你的出生年份" }]}
        >
          <DatePicker picker="year" />
        </Form.Item>

        <Form.Item
          name="address"
          label="住宅地區"
          rules={[
            {
              required: true,
              message: "請選擇你的地區",
            },
          ]}
        >
          <Cascader
            options={options}
            // onChange={onSelectChange}
            placeholder="請選擇地區"
            // showSearch={{ filter }}
            dropdownRender={dropdownRender}
          />
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
    </>
  );
};
export default RegisterForm;
