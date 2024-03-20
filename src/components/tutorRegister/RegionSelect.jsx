import React, { useEffect, useState } from "react";
import { CheckCard, ProCard } from "@ant-design/pro-components";
import locationData from "../../staticData/inputData.json";
import RegionAreaSelect from "./RegionAreaSelect";
import { Form } from "antd";

const RegionSelect = ({ setRegion }) => {
  const [tab, setTab] = useState("tab1");
  const location = locationData.location;

  return (
    <>
      <Form.Item
        name="tutorAreas"
        rules={[
          {
            required: true,
            message: "請最少選擇一個區域",
          },
        ]}
      >
        <CheckCard.Group
          multiple
          onChange={(value) => {
            setRegion(value);
          }}
        >
          <ProCard
            tabs={{
              activeKey: tab,
              items: [
                {
                  label: location[0].region,
                  key: "tab1",
                  children: <RegionAreaSelect area={location[0].area} />,
                },
                {
                  label: location[1].region,
                  key: "tab2",
                  children: <RegionAreaSelect area={location[1].area} />,
                },
                {
                  label: location[2].region,
                  key: "tab3",
                  children: <RegionAreaSelect area={location[2].area} />,
                },
                {
                  label: location[3].region,
                  key: "tab4",
                  children: <RegionAreaSelect area={location[3].area} />,
                },
              ],
              onChange: (key) => {
                setTab(key);
              },
            }}
            style={{ maxWidth: "800px", margin: "0 auto" }}
          />{" "}
        </CheckCard.Group>
      </Form.Item>
    </>
  );
};

export default RegionSelect;
