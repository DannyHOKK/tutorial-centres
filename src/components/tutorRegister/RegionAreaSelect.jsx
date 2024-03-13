import React from "react";
import { CheckCard } from "@ant-design/pro-components";
import { Form, Select } from "antd";

const RegionAreaSelect = ({ area }) => {
  return (
    <Form.Item
      name="tutorAreas"
      rules={[
        {
          required: true,
          message: "請最少選擇一個區域",
        },
      ]}
    >
      <CheckCard.Group multiple>
        {area.map((item, index) => (
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

export default RegionAreaSelect;
