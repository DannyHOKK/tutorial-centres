import { Button, Divider, Modal } from "antd";
import React, { useState } from "react";
import FilterAltTwoToneIcon from "@mui/icons-material/FilterAltTwoTone";
import { CheckCard } from "@ant-design/pro-components";

const StudentCaseFilterPopUp = ({
  toggleModal,
  isModalOpen,
  index,
  info,
  setQueryData,
  handleFilterBtn,
}) => {
  const [checkItem, setCheckItem] = useState([]);

  const queryHandler = () => {
    setQueryData((prev) => ({
      ...prev,
      tutorContent: checkItem,
    }));
  };
  return (
    <>
      <Modal
        title={
          <>
            <FilterAltTwoToneIcon />
            篩選
            <Divider />
          </>
        }
        open={isModalOpen[index]}
        onOk={() => toggleModal(index, false)}
        onCancel={() => toggleModal(index, false)}
        footer={
          <>
            <Button
              onClick={() => {
                queryHandler();
                handleFilterBtn();
                toggleModal(index, false);
              }}
            >
              確認
            </Button>
          </>
        }
        width={900}
      >
        <CheckCard.Group
          multiple
          onChange={(value) => {
            setCheckItem(value);
          }}
        >
          {info.map((item, index) => (
            <CheckCard
              key={index}
              title={item.label}
              value={item.value}
              size="small"
              style={{ width: "120px", padding: "0", margin: "6px" }}
            />
          ))}
        </CheckCard.Group>
      </Modal>
    </>
  );
};

export default StudentCaseFilterPopUp;
