import React, { useState } from "react";
import { Button, Form, Input, Select, Slider } from "antd";
import subjectList from "../../staticData/subjectList.json";
import inputData from "../../staticData/inputData.json";

const TutorListFilter = () => {
  const [form] = Form.useForm();
  const [sliderValues, setSliderValues] = useState([50, 400]);

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

  const tutorContent = subjectList.tutorContent.map((content) => ({
    label: content.category,
    options: content.type.map((type) => ({
      label: type,
      value: type,
    })),
  }));

  const tutorAreas = inputData.location.map((location) => ({
    label: location.region,
    options: location.area.map((area) => ({
      label: area,
      value: area,
    })),
  }));

  const tutorLevel = subjectList.tutorContent.map((content) => ({
    label: content.category,
    options: content.level.map((level) => ({
      label: level,
      value: level,
    })),
  }));

  const handleSliderChange = (values) => {
    setSliderValues(values);
    form.setFieldValue("lowestSalary", values);
    console.log(values);
  };

  return (
    <Form
      form={form}
      name="filter"
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
      <Form.Item label="教授科目" name="tutorContent">
        <Select
          mode="multiple"
          allowClear
          placeholder="教授科目"
          options={tutorContent}
        />
      </Form.Item>

      <Form.Item label="可補地區" name="tutorAreas">
        <Select
          mode="multiple"
          allowClear
          placeholder="可補地區"
          options={tutorAreas}
        />
      </Form.Item>

      <Form.Item label="教授年級" name="tutorLevel">
        <Select
          mode="multiple"
          allowClear
          placeholder="教授年級"
          options={tutorLevel}
        />
      </Form.Item>

      <Form.Item label="學費" name="lowestSalary">
        <Slider
          range={{ draggableTrack: true }}
          max={1000}
          defaultValue={sliderValues}
          onChange={handleSliderChange}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button
          type="button"
          style={{
            backgroundColor: "orange",
            color: "white",
            margin: "0 10px",
          }}
          onClick={onFinish}
        >
          搜尋
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TutorListFilter;
