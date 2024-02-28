import React, { useState } from "react";
import {
  Button,
  Card,
  Cascader,
  Checkbox,
  Divider,
  Form,
  Input,
  Radio,
  Select,
  Slider,
  Space,
} from "antd";
import inputData from "../../staticData/inputData.json";
import subjectList from "../../staticData/subjectList.json";
import {
  CloseOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

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
const tutorGender = inputData.tutorGender.map((gender) => ({
  label: gender,
  value: gender,
}));
const lessonPerWeek = inputData.lessonPerWeek.map((lesson) => ({
  label: lesson,
  value: lesson,
}));
const lessonDuration = inputData.lessonDuration.map((time) => ({
  label: time,
  value: time,
}));
const weekoptions = inputData.oneWeek.map((day) => ({
  label: day,
  value: day,
}));

const StudentCasePage2 = ({ studentCase, setStudentCase, next, prev }) => {
  const [form] = Form.useForm();
  const [sliderValues, setSliderValues] = useState([100, 300]);

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      onFinish();
    } catch (error) {
      console.log("Form validation failed:", error);
    }
  };

  const onFinish = () => {
    form.setFieldValue("lowestSalary", sliderValues);
    const values = form.getFieldsValue();
    const filteredData = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value !== undefined)
    );
    Object.keys(filteredData).forEach((key) => {
      setStudentCase((prev) => ({
        ...prev,
        [key]: filteredData[key],
      }));
    });
    next();
  };

  const handleSliderChange = (values) => {
    setSliderValues(values);
  };

  return (
    <div className="student-case-form">
      <Form
        {...formItemLayout}
        form={form}
        name="studentCasePage2"
        scrollToFirstError
        initialValues={studentCase}
      >
        <Form.Item
          name="tutorGender"
          label="導師性別"
          rules={[
            {
              required: true,
              message: "請選擇導師性別",
            },
          ]}
        >
          <Select
            allowClear
            placeholder="請選擇導師性別"
            options={tutorGender}
          />
        </Form.Item>

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
            mode="multiple"
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

        <Form.Item label="學費" name="lowestSalary">
          <Slider
            range={{ draggableTrack: true }}
            min={100}
            max={1000}
            step={5}
            defaultValue={sliderValues}
            marks={{
              100: "$100",
              200: "$200",
              300: "$300",
              500: "$500",
              1000: "$1000",
            }}
            onChange={handleSliderChange}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Card size="small" title="上堂時間表">
            <Form.Item
              label="可上課的時段"
              labelCol={{ span: 8, offset: 0 }}
              wrapperCol={{ span: 15, offset: 0 }}
              style={{ maxWidth: 600, marginBottom: "50px", marginTop: "30px" }}
            >
              <Form.List name="timeslot" {...formItemLayout}>
                {(subFields, subOpt) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 16,
                    }}
                  >
                    {subFields.map((subField) => (
                      <Space key={subField.key}>
                        <Form.Item
                          noStyle
                          name={[subField.name, "week"]}
                          rules={[{ required: true, message: "請填上星期幾" }]}
                        >
                          <Select
                            placeholder="星期幾"
                            style={{ width: "120px" }}
                            options={weekoptions}
                          ></Select>
                        </Form.Item>
                        <Form.Item
                          noStyle
                          name={[subField.name, "time"]}
                          rules={[{ required: true, message: "請填上時間" }]}
                        >
                          <Input
                            style={{ width: "160px" }}
                            placeholder="請填上: 1400-1600"
                          />
                        </Form.Item>
                        <CloseOutlined
                          onClick={() => {
                            subOpt.remove(subField.name);
                          }}
                        />
                      </Space>
                    ))}
                    <Button type="dashed" onClick={() => subOpt.add()} block>
                      增加上課時段
                    </Button>
                  </div>
                )}
              </Form.List>
            </Form.Item>
          </Card>
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
            繼續
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StudentCasePage2;
