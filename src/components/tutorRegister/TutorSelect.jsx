import React from "react";
import { CheckCard } from "@ant-design/pro-components";
import { Form } from "antd";

const TutorSelect = ({ subjectType }) => {
  return (
    <>
      {subjectType.map((item, index) => (
        <CheckCard
          key={index}
          title={item}
          value={item}
          size="small"
          style={{ width: "100px", padding: "0", margin: "6px" }}
        />
      ))}
    </>
  );
};

export default TutorSelect;
