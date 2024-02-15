import { Button, Cascader, Checkbox, Divider, Form, Input, Radio } from "antd";
import React from "react";
import "../global.css";
import inputData from "../../staticData/inputData.json";
import { CheckCard } from "@ant-design/pro-components";
import { useDispatch } from "react-redux";

// type DefaultOptionType = GetProp<CascaderProps, "options">[number];

// interface Option {
//   value: string;
//   label: string;
//   children?: Option[];
//   disabled?: boolean;
// }

// const options: Option[] = inputData.location.map((location) => ({
//   value: location.region,
//   label: location.region,
//   children: location.area.map((area) => ({
//     value: area,
//     label: area,
//   })),
// }));

// const filter = (inputValue: string, path: DefaultOptionType[]) =>
//   path.some(
//     (option) =>
//       (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) >
//       -1
//   );

// const dropdownRender = (menus: React.ReactNode) => (
//   <div>
//     {menus}
//     <Divider style={{ margin: "0 250px" }} />
//   </div>
// );

// const onSelectChange = (value: any, selectedOptions: Option[]) => {
//   console.log(value, selectedOptions);
// };

// interface StudentRegisterFormProps {
//   studentRegister: (credential: any) => void; // Replace 'any' with the correct type for 'credential'
// }

const StudentRegisterForm = ({ studentRegister }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = () => {
    const values = form.getFieldsValue();
    const address = values.fullAddress[1];
    const { confirm, agreement, fullAddress, ...info } = values;
    const studentInfo = { ...info, address };
    studentRegister(studentInfo);
    // console.log(studentRegister(credential));
    // console.log(credential);
  };

  const options = inputData.location.map((location) => ({
    value: location.region,
    label: location.region,
    children: location.area.map((area) => ({
      value: area,
      label: area,
    })),
  }));

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

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      className="form-style"
      scrollToFirstError
    >
      <div className="register-subheader">個人資料</div>
      <Form.Item
        name="identity"
        label="註冊身份"
        rules={[
          {
            required: true,
            message: "請選擇你的身份",
          },
        ]}
      >
        <CheckCard.Group
          onChange={(value) => {
            console.log("value", value);
          }}
        >
          {inputData.studentRegisterIdentity.map((item, index) => (
            <CheckCard
              key={index}
              title={item}
              value={item}
              size="small"
              style={{ width: "100px", padding: "0", margin: "6px" }}
            />
          ))}
        </CheckCard.Group>
      </Form.Item>
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
        name="fullAddress"
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
          showSearch={{ filter }}
          onSearch={(value) => console.log(value)}
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
  );
};

export default StudentRegisterForm;