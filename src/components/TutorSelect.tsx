import React from "react";
import { CheckCard } from "@ant-design/pro-components";

const TutorSelect = ({ subjectType }) => {
  return (
    <CheckCard.Group
      multiple
      onChange={(value) => {
        console.log("value", value);
      }}
      defaultValue={["A"]}
    >
      {subjectType.map((item: string) => (
        <CheckCard
          title={item}
          value={item}
          size="small"
          style={{ width: "100px", padding: "0", margin: "6px" }}
        />
      ))}
    </CheckCard.Group>
  );
};

export default TutorSelect;
