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
import subjectList from "../../staticData/subjectList.json";

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
const tutorRequest = inputData.tutorRequest.map((request) => ({
  label: request,
  value: request,
}));
const lessonPerWeek = inputData.lessonPerWeek.map((lesson) => ({
  label: lesson,
  value: lesson,
}));
const lessonDuration = inputData.lessonDuration.map((time) => ({
  label: time,
  value: time,
}));

const StudentCasePage2 = () => {
  const [form] = Form.useForm();
  return (
    <div className="student-case-form">
      <Form
        {...formItemLayout}
        form={form}
        name="studentCasePage2"
        scrollToFirstError
      >
        <Form.Item
          name="tutorRequest"
          label="導師要求 "
          rules={[
            {
              required: true,
              message: "請選擇導師要求",
            },
          ]}
        >
          <Select
            allowClear
            placeholder="請選擇導師要求"
            options={tutorRequest}
          />
        </Form.Item>

        <Form.Item name="tutorRemark" label="其他要求">
          <Input placeholder="例：有特殊學習困難教學經驗 / 名校優先" />
        </Form.Item>

        <Form.Item
          name="lessonPerWeek"
          label="每星期堂數"
          rules={[
            {
              required: true,
              message: "請選擇每星期堂數",
            },
          ]}
        >
          <Select
            allowClear
            placeholder="請選擇每星期堂數"
            options={lessonPerWeek}
          />
        </Form.Item>

        <Form.Item
          name="lessonDuration"
          label="每堂時間（小時）"
          rules={[
            {
              required: true,
              message: "請選擇每堂時間",
            },
          ]}
        >
          <Select
            allowClear
            placeholder="請選擇每堂時間"
            options={lessonDuration}
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout} className="form-button">
          <Button
            type="primary"
            htmlType="button" // Change the type to "button"
          >
            繼續
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StudentCasePage2;
