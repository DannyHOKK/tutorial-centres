import React, { useState } from "react";
import { Button, Form, Input, Select, Slider } from "antd";
import subjectList from "../../staticData/subjectList.json";
import inputData from "../../staticData/inputData.json";

const TutorListFilter = ({ queryTutorList, setFilteData }) => {
  const [form] = Form.useForm();
  const [sliderValues, setSliderValues] = useState([100, 1000]);

  const onFinish = async () => {
    try {
      await form.validateFields();
      submitForm();
    } catch (error) {
      console.log("Form validation failed:", error);
    }
  };

  const submitForm = () => {
    form.setFieldValue("lowestSalary", sliderValues);
    const values = form.getFieldsValue();
    const transformedData = {
      ...values,
      lowestSalary: values.lowestSalary[0],
      maxSalary: values.lowestSalary[1],
    };
    setFilteData(transformedData);
    queryTutorList(transformedData);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSliderChange = (values) => {
    setSliderValues(values);
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

  return (
    <Form
      form={form}
      name="filter"
      {...formItemLayout}
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
          min={100}
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
