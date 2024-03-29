import React, { useState } from "react";
import { Button, Cascader, Divider, Form, Input, Select, Slider } from "antd";
import subjectList from "../../staticData/subjectList.json";
import inputData from "../../staticData/inputData.json";
import { useDispatch, useSelector } from "react-redux";

// const tutorContent = subjectList.tutorContent.map((content) => ({
//   label: content.category,
//   options: content.type.map((type) => ({
//     label: type,
//     value: type,
//   })),
// }));

const dropdownRender = (menus) => (
  <div>
    {menus}
    <Divider style={{ margin: "0 140px" }} />
  </div>
);

const tutorContent = subjectList.tutorContent.map((content) => ({
  label: content.category,
  value: content.category,
  children: content.type.map((type) => ({
    label: type,
    value: type,
  })),
}));

// const tutorAreas = inputData.location.map((location) => ({
//   label: location.region,
//   options: location.area.map((area) => ({
//     label: area,
//     value: area,
//   })),
// }));

const tutorAreas = inputData.location.map((location) => ({
  label: location.region,
  value: location.region,
  children: location.area.map((area) => ({
    label: area,
    value: area,
  })),
}));

// const tutorLevel = subjectList.tutorContent.map((content) => ({
//   label: content.category,
//   options: content.level.map((level) => ({
//     label: level,
//     value: level,
//   })),
// }));

const tutorLevel = subjectList.tutorContent.map((content) => ({
  label: content.category,
  value: content.category,
  children: content.level.map((level) => ({
    label: level,
    value: level,
  })),
}));

const TutorListFilter = ({ setFilteData }) => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.tutor);

  return (
    <>
      <div className="tutor-side-filter">
        <div>教授科目：</div>
        {/* <Select
          mode="multiple"
          allowClear
          placeholder="教授科目"
          options={tutorContent}
          onChange={(value) => {
            setFilteData((prev) => ({
              ...prev,
              tutorContent: value,
            }));
          }}
          listHeight={500}
          style={{ margin: "15px 0", width: "100%" }}
        /> */}

        <Cascader
          options={tutorContent}
          // onChange={onSelectChange}
          placeholder="教授科目"
          // showSearch={{ filter }}
          dropdownRender={dropdownRender}
          style={{ margin: "15px 0", width: "100%" }}
          multiple
          onChange={(value) => {
            let tutorContent = [];
            value.map((content) => {
              tutorContent.push(content[1]);
            });
            setFilteData((prev) => ({
              ...prev,
              tutorContent: tutorContent,
            }));
            console.log(value);
          }}
        />

        <div>可補地區：</div>
        {/* <Select
          mode="multiple"
          allowClear
          placeholder="可補地區"
          options={tutorAreas}
          onChange={(value) => {
            setFilteData((prev) => ({
              ...prev,
              tutorAreas: value,
            }));
          }}
          listHeight={500}
          style={{ margin: "15px 0", width: "100%" }}
        /> */}

        <Cascader
          options={tutorAreas}
          // onChange={onSelectChange}
          placeholder="可補地區"
          // showSearch={{ filter }}
          dropdownRender={dropdownRender}
          style={{ margin: "15px 0", width: "100%" }}
          multiple
          onChange={(value) => {
            let tutorAreas = [];
            value.map((content) => {
              tutorAreas.push(content[1]);
            });
            setFilteData((prev) => ({
              ...prev,
              tutorAreas: tutorAreas,
            }));
          }}
        />

        <div>教授年級：</div>
        {/* <Select
          mode="multiple"
          allowClear
          placeholder="教授年級"
          options={tutorLevel}
          onChange={(value) => {
            setFilteData((prev) => ({
              ...prev,
              tutorLevel: value,
            }));
          }}
          listHeight={500}
          style={{ margin: "15px 0", width: "100%" }}
        /> */}
        <Cascader
          options={tutorLevel}
          // onChange={onSelectChange}
          placeholder="可補地區"
          // showSearch={{ filter }}
          dropdownRender={dropdownRender}
          style={{ margin: "15px 0", width: "100%" }}
          multiple
          onChange={(value) => {
            let tutorLevel = [];
            value.map((content) => {
              tutorLevel.push(content[1]);
            });
            setFilteData((prev) => ({
              ...prev,
              tutorLevel: tutorLevel,
            }));
          }}
        />
        <div>學費：</div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <Input
            pattern="[0-9]*"
            defaultValue={100}
            placeholder="最低"
            onChange={(value) => {
              setFilteData((prev) => ({
                ...prev,
                lowestSalary: parseInt(value.target.value),
              }));
            }}
          />
          ～
          <Input
            pattern="[0-9]*"
            defaultValue={1000}
            placeholder="最高"
            onChange={(value) => {
              setFilteData((prev) => ({
                ...prev,
                maxSalary: parseInt(value.target.value),
              }));
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TutorListFilter;
