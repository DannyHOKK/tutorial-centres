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
import data from "../staticData/inputData.json";
import TeachingContent from "./TeachingContent";
import { motion } from "framer-motion";
import Introduction from "./Introduction";

const RegisterProgressBar = ({ current, previousStep, next, prev }) => {
  const delta = current - previousStep;
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
      content: <TeachingContent />,
    },
    {
      title: "自我介紹",
      icon: <SmileOutlined />,
      content: <Introduction />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.icon,
  }));

  return (
    <div style={{ overflow: "hidden" }}>
      <Steps
        style={{ maxWidth: "800px", margin: "40px auto" }}
        current={current}
        items={items}
      />
      {current === 0 && (
        <motion.div
          initial={{ x: delta >= 0 ? "20%" : "-20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {steps[current].content}
        </motion.div>
      )}

      {current === 1 && (
        <motion.div
          initial={{ x: delta >= 0 ? "20%" : "-20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {steps[current].content}
        </motion.div>
      )}

      {current === 2 && (
        <motion.div
          initial={{ x: delta >= 0 ? "20%" : "-20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {steps[current].content}
        </motion.div>
      )}

      {current === 3 && (
        <motion.div
          initial={{ x: delta >= 0 ? "20%" : "-20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {steps[current].content}
        </motion.div>
      )}

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
    </div>
  );
};
export default RegisterProgressBar;
