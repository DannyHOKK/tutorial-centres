import React, { useState } from "react";
import { ProCard } from "@ant-design/pro-components";
import locationData from "../staticData/inputData.json";
import RegionAreaSelect from "./RegionAreaSelect";

const RegionSelect = () => {
  const [tab, setTab] = useState("tab1");
  const location = locationData.location;
  return (
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
        ],
        onChange: (key) => {
          setTab(key);
        },
      }}
      style={{ maxWidth: "800px", margin: "0 auto" }}
    />
  );
};

export default RegionSelect;
