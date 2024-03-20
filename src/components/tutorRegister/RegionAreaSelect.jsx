import React from "react";
import { CheckCard } from "@ant-design/pro-components";
import { Form, Select } from "antd";

const RegionAreaSelect = ({ area }) => {
  return (
    <>
      {area.map((item, index) => (
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

export default RegionAreaSelect;
