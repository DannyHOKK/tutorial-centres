import { Modal } from "antd";
import React from "react";

const StudentCasePopUp = ({ isModalOpen, toggleModal, index, studentCase }) => {
  return (
    <div>
      <Modal
        title={
          <div style={{ fontSize: "20px" }}>
            <span>
              <strong>{studentCase.studentLevel}</strong>
            </span>
            <span className="student-level-type">
              {studentCase.studentLevelType}
            </span>
            <span style={{ color: "blue" }}>
              {studentCase.tutorContent.replaceAll(",", " ")}
            </span>
            <span></span>
          </div>
        }
        open={isModalOpen[index]}
        onOk={() => toggleModal(index, false)}
        onCancel={() => toggleModal(index, false)}
        footer="Footer"
        width={1000}
        height={800}
      >
        <h3>學生資料</h3>
        <div>
          <span>性別：</span>
          <span>{studentCase.gender}</span>
        </div>
        <div>
          <span> 授課方式：</span>
          <span>{studentCase.tutorMethod}</span>
        </div>
        <div>
          <span> 要求導師：</span>
          <span>{studentCase.tutorRequest}</span>
        </div>
        <div>
          <span> 每週堂數：</span>
          <span>{studentCase.lessonPerWeek}</span>
        </div>
        <div>
          <span> 每堂長度：</span>
          <span>{studentCase.lessonDuration}</span>
        </div>
      </Modal>
    </div>
  );
};

export default StudentCasePopUp;
