import React, { useState } from "react";
import {
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SchoolIcon from "@mui/icons-material/School";
import { Button, Steps, message } from "antd";
import { motion } from "framer-motion";
import StudentCasePage1 from "./StudentCasePage1";
import StudentCasePage2 from "./StudentCasePage2";
import StudentCasePage3 from "./StudentCasePage3";

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

const StudentCaseForm = ({
  studentCase,
  setStudentCase,
  next,
  prev,
  current,
  previousStep,
  submitCaseHandler,
}) => {
  const delta = current - previousStep;
  const steps = [
    {
      title: "個人資料",
      icon: <UserOutlined />,
      content: (
        <StudentCasePage1
          studentCase={studentCase}
          setStudentCase={setStudentCase}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      title: "要求導師",
      icon: <SchoolIcon />,
      content: (
        <StudentCasePage2
          studentCase={studentCase}
          setStudentCase={setStudentCase}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      title: "授課資料",
      icon: <SolutionOutlined />,
      content: (
        <StudentCasePage3
          studentCase={studentCase}
          setStudentCase={setStudentCase}
          prev={prev}
          submitCaseHandler={submitCaseHandler}
        />
      ),
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

export default StudentCaseForm;
