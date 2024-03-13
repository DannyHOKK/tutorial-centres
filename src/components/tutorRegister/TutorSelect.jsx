import React from "react";
import { CheckCard } from "@ant-design/pro-components";
import { Form } from "antd";

const TutorSelect = ({ subjectType }) => {
  return (
    <Form.Item
      name="tutorContent"
      rules={[
        {
          required: true,
          validator: (_, value) => {
            if (value && value.length > 0) {
              return Promise.resolve();
            }
            return Promise.reject("請最少選擇一個授課內容");
          },
        },
      ]}
    >
      <CheckCard.Group multiple>
        {subjectType.map((item, index) => (
          <CheckCard
            key={index}
            title={item}
            value={item}
            size="small"
            style={{ width: "100px", padding: "0", margin: "6px" }}
          />
        ))}
      </CheckCard.Group>
    </Form.Item>
  );
};

export default TutorSelect;
