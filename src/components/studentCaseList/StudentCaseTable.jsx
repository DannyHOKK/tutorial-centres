import React, { useState } from "react";
import StudentCaseCard from "./StudentCaseCard";
import { Modal } from "antd";
import StudentCasePopUp from "./StudentCasePopUp";

const StudentCaseTable = ({ studentCaseList }) => {
  const [isModalOpen, setIsModalOpen] = useState(() =>
    studentCaseList.map((cases) => false)
  );

  const toggleModal = (idx, target) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
  return (
    <div className="student-case-table-list">
      {studentCaseList.map((studentCase, index) => (
        <div key={index}>
          <div
            onClick={() => toggleModal(index, true)}
            style={{ cursor: "pointer" }}
          >
            <StudentCaseCard studentCase={studentCase} />
          </div>
          <StudentCasePopUp
            toggleModal={toggleModal}
            isModalOpen={isModalOpen}
            index={index}
            studentCase={studentCase}
          />
        </div>
      ))}
    </div>
  );
};

export default StudentCaseTable;
