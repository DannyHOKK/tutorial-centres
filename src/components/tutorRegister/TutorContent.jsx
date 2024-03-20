import React, { useState } from "react";
import { CheckCard, ProCard } from "@ant-design/pro-components";
import subjectList from "../../staticData/subjectList.json";
import TutorSelect from "./TutorSelect";
import { Form } from "antd";

const TutorContent = ({ setContent }) => {
  const [tab, setTab] = useState("tab1");
  const subject = subjectList.tutorContent;
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
      <CheckCard.Group multiple onChange={(value) => setContent(value)}>
        <ProCard
          tabs={{
            activeKey: tab,
            items: [
              {
                label: subject[0].category,
                key: "tab1",
                children: <TutorSelect subjectType={subject[0].type} />,
              },
              {
                label: subject[1].category,
                key: "tab2",
                children: <TutorSelect subjectType={subject[1].type} />,
              },
              {
                label: subject[2].category,
                key: "tab3",
                children: <TutorSelect subjectType={subject[2].type} />,
              },
              {
                label: subject[3].category,
                key: "tab4",
                children: <TutorSelect subjectType={subject[3].type} />,
              },
            ],
            onChange: (key) => {
              setTab(key);
            },
          }}
          style={{ maxWidth: "800x", margin: "0 auto" }}
        />
      </CheckCard.Group>
    </Form.Item>
  );
};

export default TutorContent;
