import React, { useEffect, useState } from "react";
import RegionSelect from "./RegionSelect";
import TutorContent from "./TutorContent";
import TutorLevel from "./TutorLevel";
import { Button, Form } from "antd";
import "../global.css";
import CloseIcon from "@mui/icons-material/Close";

const TeachingContent = ({ userInfo, setUserInfo, current, next, prev }) => {
  const [form] = Form.useForm();
  const [region, setRegion] = useState([]);
  const [content, setContent] = useState([]);
  const onFinish = () => {
    const values = form.getFieldsValue();
    const filteredData = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value !== undefined)
    );

    Object.keys(filteredData).forEach((key) => {
      setUserInfo((prevInfo) => ({
        ...prevInfo,
        [key]: values[key],
      }));
    });
  };
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
        span: 24,
        offset: 0,
      },
    },
  };

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
    <Form
      form={form}
      name="register"
      className="page-xs"
      scrollToFirstError
      initialValues={userInfo}
    >
      <div className="register-subheader">授課區域</div>

      <RegionSelect setRegion={setRegion} />
      <div style={{ display: "flex", margin: "10px", flexWrap: "wrap" }}>
        {region && (
          <>
            {region.map((item) => (
              <div className="region-item-show">
                {item}
                {/* <CloseIcon
                  style={{
                    fontSize: "14px",
                    marginLeft: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    console.log("hihi");
                  }}
                /> */}
              </div>
            ))}
          </>
        )}
      </div>
      <div className="register-subheader">授課內容</div>
      <TutorContent setContent={setContent} />
      <div style={{ display: "flex", margin: "10px", flexWrap: "wrap" }}>
        {content && (
          <>
            {content.map((item) => (
              <div className="region-item-show">
                {item}
                {/* <CloseIcon
                  style={{
                    fontSize: "14px",
                    marginLeft: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    console.log("hihi");
                  }}
                /> */}
              </div>
            ))}
          </>
        )}
      </div>
      <div className="register-subheader">授課程度</div>
      <TutorLevel next={next} prev={prev} />

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
  );
};

export default TeachingContent;
