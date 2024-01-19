import React, { useState } from "react";
import {
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SchoolIcon from "@mui/icons-material/School";
import { Button, Steps } from "antd";
import RegisterForm from "./RegisterForm";
import ResumeForm from "./ResumeForm";
import location from "../staticData/location.json";

const RegisterProgressBar = ({ current, next, prev }) => {
  const steps = [
    {
      title: "個人資料",
      icon: <UserOutlined />,
      content: <RegisterForm current={current} next={next} />,
    },
    {
      title: "履歷資料",
      icon: <SchoolIcon />,
      content: <ResumeForm />,
    },
    {
      title: "授課資料",
      icon: <SolutionOutlined />,
      content: "testing",
    },
    {
      title: "自我介紹",
      icon: <SmileOutlined />,
      content: "testing",
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.icon,
  }));
  const test = location.location.map((item) => ({
    key: item.title,
    region: item.region,
    area: item.area,
  }));

  return (
    <>
      <Steps
        style={{ maxWidth: "800px", margin: "40px auto" }}
        current={current}
        items={items}
      />

      {test.map((item) => (
        <div>
          <div>{item.region}</div>
          <div>
            {item.area.map((items) => (
              <div>{items}</div>
            ))}
          </div>
        </div>
      ))}

      <div>{steps[current].content}</div>

      {current < steps.length - 1 && (
        <Button type="primary" onClick={() => next()}>
          Next
        </Button>
      )}
      {current === steps.length - 1 && (
        <Button
          type="primary"
          onClick={() => message.success("Processing complete!")}
        >
          Done
        </Button>
      )}
      {current > 0 && (
        <Button
          style={{
            margin: "0 8px",
          }}
          onClick={() => prev()}
        >
          Previous
        </Button>
      )}
    </>
  );
};
export default RegisterProgressBar;
