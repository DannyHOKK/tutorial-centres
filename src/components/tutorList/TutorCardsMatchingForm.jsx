import { Button, Cascader, Divider, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const options = inputData.location.map((location) => ({
  value: location.region,
  label: location.region,
  children: location.area.map((area) => ({
    value: area,
    label: area,
  })),
}));
const studentLevel = inputData.studentLevel.map((level) => ({
  label: level.type,
  value: level.type,
}));

const kindergartenLevel = inputData.studentLevel[0].level.map((level) => ({
  label: level,
  value: level,
}));
const primaryLevel = inputData.studentLevel[1].level.map((level) => ({
  label: level,
  value: level,
}));
const secondaryLevel = inputData.studentLevel[2].level.map((level) => ({
  label: level,
  value: level,
}));
const collegeLevel = inputData.studentLevel[3].level.map((level) => ({
  label: level,
  value: level,
}));
const adultLevel = inputData.studentLevel[4].level.map((level) => ({
  label: level,
  value: level,
}));
const dropdownRender = (menus) => (
  <div>
    {menus}
    <Divider style={{ margin: "0 250px" }} />
  </div>
);

const TutorCardsMatchingForm = ({
  tutor,
  open,
  setOpen,
  applyConfirmHandler,
}) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [tutorMethod, setTutorMethod] = useState("");
  const [studentLevelType, setStudentLevelType] = useState("");
  const tutorContentArray = tutor.tutorContent && tutor.tutorContent.split(",");
  const tutorContentOptions =
    tutorContentArray &&
    tutorContentArray.map((content) => ({
      label: content,
      value: content,
    }));

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      let formData = {
        tutorId: tutor.id,
        studentLevelType: form.getFieldValue("studentLevelType"),
        studentLevel: form.getFieldValue("studentLevel"),
        tutorContent: form.getFieldValue("tutorContent").join(","),
        salary: form.getFieldValue("salary"),
        tutorMethod: form.getFieldValue("tutorMethod"),
        address:
          form.getFieldValue("address") !== null &&
          form.getFieldValue("address") !== undefined
            ? form.getFieldValue("address").join("/")
            : "",
      };
      applyConfirmHandler(formData);
    } catch (error) {
      console.log("Form validation failed:", error);
    }
  };

  return (
    <Modal
      title={<div> 申請 {tutor.engName} 導師</div>}
      centered
      open={open}
      onCancel={() => setOpen(false)}
      footer={
        <>
          <Button onClick={() => setOpen(false)}>取消申請</Button>
          <Button
            // onClick={() => applyConfirmHandler(tutor.id)}
            onClick={handleSubmit}
            style={{ backgroundColor: "orange", color: "white" }}
          >
            確認申請
          </Button>
        </>
      }
      width={750}
    >
      <div>請填寫下列表格，申請導師</div>
      <br />
      <Form {...formItemLayout} autoComplete="off" form={form}>
        <Form.Item
          name="studentLevelType"
          label="學生就讀的類別"
          rules={[
            {
              required: true,
              message: "請選擇學生就讀的類別",
            },
          ]}
        >
          <Select
            allowClear
            placeholder="學生就讀的類別"
            options={studentLevel}
            onChange={(value) => {
              setStudentLevelType(value);
              console.log(value);
              form.setFieldValue("studentLevel");
            }}
          />
        </Form.Item>

        {studentLevelType === "幼稚園" && (
          <Form.Item
            name="studentLevel"
            label="幼稚園年級"
            rules={[
              {
                required: true,
                message: "請選擇幼稚園就讀年級",
              },
            ]}
          >
            <Select
              allowClear
              placeholder="幼稚園年級"
              options={kindergartenLevel}
            />
          </Form.Item>
        )}
        {studentLevelType === "小學" && (
          <Form.Item
            name="studentLevel"
            label="小學年級"
            rules={[
              {
                required: true,
                message: "請選擇小學年級",
              },
            ]}
          >
            <Select allowClear placeholder="小學年級" options={primaryLevel} />
          </Form.Item>
        )}
        {studentLevelType === "中學" && (
          <Form.Item
            name="studentLevel"
            label="中學年級"
            rules={[
              {
                required: true,
                message: "請選擇中學年級",
              },
            ]}
          >
            <Select
              allowClear
              placeholder="中學年級"
              options={secondaryLevel}
            />
          </Form.Item>
        )}
        {studentLevelType === "大專或以上" && (
          <Form.Item
            name="studentLevel"
            label="大專類別"
            rules={[
              {
                required: true,
                message: "請選擇大專類別",
              },
            ]}
          >
            <Select allowClear placeholder="大專類別" options={collegeLevel} />
          </Form.Item>
        )}
        {studentLevelType === "成年人" && (
          <Form.Item
            name="studentLevel"
            label="歲數"
            rules={[
              {
                required: true,
                message: "請選擇你的歲數",
              },
            ]}
          >
            <Select allowClear placeholder="你的歲數" options={adultLevel} />
          </Form.Item>
        )}

        <Form.Item
          name="tutorContent"
          label="授課內容"
          rules={[
            {
              required: true,
              message: "請選擇授課內容",
            },
          ]}
        >
          <Select mode="multiple" options={tutorContentOptions} />
        </Form.Item>
        <Form.Item
          name="salary"
          label="申請薪金/小時"
          rules={[
            {
              required: true,
              message: "請輸入薪金",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="tutorMethod"
          label="上課方式"
          rules={[
            {
              required: true,
              message: "請選擇上課方式",
            },
          ]}
        >
          <CheckCard.Group
            onChange={(value) => {
              setTutorMethod(value);
              form.setFieldValue("address");
            }}
          >
            <CheckCard
              title="上門"
              value="上門"
              size="small"
              style={{ width: "100px", padding: "0", margin: "6px" }}
            />
            <CheckCard
              title="公眾地方"
              value="公眾地方"
              size="small"
              style={{ width: "100px", padding: "0", margin: "6px" }}
            />
            <CheckCard
              title="視像補習"
              value="視像補習"
              size="small"
              style={{ width: "100px", padding: "0", margin: "6px" }}
            />
            <CheckCard
              title="上門或視像皆可"
              value="上門或視像皆可"
              size="small"
              style={{ width: "130px", padding: "0", margin: "6px" }}
            />
          </CheckCard.Group>
        </Form.Item>

        {tutorMethod === "視像補習" ? (
          <></>
        ) : (
          <Form.Item
            name="address"
            label="地區"
            rules={[
              {
                required: true,
                message: "請選擇地區",
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
        )}
      </Form>
    </Modal>
  );
};

export default TutorCardsMatchingForm;
