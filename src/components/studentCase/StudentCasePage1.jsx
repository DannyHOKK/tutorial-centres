import React, { useEffect, useState } from "react";
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

const other = subjectList.tutorContent[3].type.map((type) => ({
  value: type,
  label: type,
}));
const music = subjectList.tutorContent[2].type.map((type) => ({
  value: type,
  label: type,
}));
const speaking = subjectList.tutorContent[1].type.map((type) => ({
  value: type,
  label: type,
}));
const tutorCategory = subjectList.tutorContent.map((content) => ({
  value: content.category,
  label: content.category,
}));
const tutorial = subjectList.tutorContent[0].type.map((type) => ({
  value: type,
  label: type,
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
const addressOptions = inputData.location.map((location) => ({
  value: location.region,
  label: location.region,
  children: location.area.map((area) => ({
    value: area,
    label: area,
  })),
}));

const StudentCasePage1 = ({ studentCase, setStudentCase, next, prev }) => {
  const [form] = Form.useForm();
  const [tutorType, setTutorType] = useState("");
  const [studentLevelType, setStudentLevelType] = useState("");
  const [tutorMethod, setTutorMethod] = useState("");

  const onFinish = () => {
    const values = form.getFieldsValue();
    setStudentCase(values);
    console.log(values);
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
      next();
    } catch (error) {
      console.log("Form validation failed:", error);
    }
  };

  return (
    <div className="student-case-form">
      <Form
        {...formItemLayout}
        form={form}
        name="studentCasePage1"
        scrollToFirstError
        // initialValues={studentCase}
        // defaultValue={studentCase}
      >
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
              // setStudentCase((prev) => ({
              //   ...prev,
              //   studentLevelType: value,
              // }));
              setStudentLevelType(value);
              console.log(value);
              form.setFieldValue("studentLevel", "");
            }}
          />
        </Form.Item>

        {studentCase.studentLevelType === "幼稚園" ||
          (studentLevelType === "幼稚園" && (
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
          ))}
        {studentCase.studentLevelType === "小學" ||
          (studentLevelType === "小學" && (
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
              <Select
                allowClear
                placeholder="小學年級"
                options={primaryLevel}
              />
            </Form.Item>
          ))}
        {studentCase.studentLevelType === "中學" ||
          (studentLevelType === "中學" && (
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
          ))}
        {studentCase.studentLevelType === "大專或以上" ||
          (studentLevelType === "大專或以上" && (
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
              <Select
                allowClear
                placeholder="大專類別"
                options={collegeLevel}
              />
            </Form.Item>
          ))}
        {studentCase.studentLevelType === "成年人" ||
          (studentLevelType === "成年人" && (
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
          ))}

        <Form.Item
          name="tutorCategory"
          label="補習類型"
          rules={[
            {
              required: true,
              message: "請選擇補習類型",
            },
          ]}
        >
          <Select
            allowClear
            placeholder="請選擇補習類型"
            options={tutorCategory}
            onChange={(value) => {
              // setStudentCase((prev) => ({
              //   ...prev,
              //   tutorCategory: values,
              // }));
              setTutorType(value);
              form.setFieldValue("tutorContent", []);
            }}
          />
        </Form.Item>

        {studentCase.tutorCategory === "補習" ||
          (tutorType === "補習" && (
            <Form.Item
              name="tutorContent"
              label="補習科目"
              rules={[
                {
                  required: true,
                  message: "請選擇補習科目",
                },
              ]}
            >
              <Select mode="multiple" allowClear options={tutorial} />
            </Form.Item>
          ))}
        {studentCase.tutorCategory === "會話" ||
          (tutorType === "會話" && (
            <Form.Item
              name="tutorContent"
              label="會話"
              rules={[
                {
                  required: true,
                  message: "請選擇會話科目",
                },
              ]}
            >
              <Select mode="multiple" allowClear options={speaking} />
            </Form.Item>
          ))}
        {studentCase.tutorCategory === "音樂" ||
          (tutorType === "音樂" && (
            <Form.Item
              name="tutorContent"
              label="音樂"
              rules={[
                {
                  required: true,
                  message: "請選擇音樂",
                },
              ]}
            >
              <Select mode="multiple" allowClear options={music} />
            </Form.Item>
          ))}
        {studentCase.tutorCategory === "其他" ||
          (tutorType === "其他" && (
            <Form.Item
              name="tutorContent"
              label="其他"
              rules={[
                {
                  required: true,
                  message: "請選擇其他",
                },
              ]}
            >
              <Select mode="multiple" allowClear options={other} />
            </Form.Item>
          ))}

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
              // setStudentCase((prev) => ({
              //   ...prev,
              //   tutorMethod: value,
              // }));
              setTutorMethod(value);
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

        {studentCase.tutorMethod === "視像補習" ||
        tutorMethod === "視像補習" ||
        tutorMethod === "" ? (
          <></>
        ) : (
          <>
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
                options={addressOptions}
                // onChange={onSelectChange}
                placeholder="請選擇地區"
                // showSearch={{ filter }}
                dropdownRender={dropdownRender}
              />
            </Form.Item>
            <Form.Item
              name="detailsAddress"
              label="詳細地址"
              rules={[
                {
                  required: true,
                  message: "請輸入你的詳細地址",
                },
              ]}
            >
              <Input placeholder="請註明，例： 元朗YOHO TOWN （元朗站）" />
            </Form.Item>
          </>
        )}

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

export default StudentCasePage1;
