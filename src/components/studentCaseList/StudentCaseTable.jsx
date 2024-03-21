import React, { useState } from "react";
import StudentCaseCard from "./StudentCaseCard";
import { Modal, Skeleton, Spin } from "antd";
import StudentCasePopUp from "./StudentCasePopUp";
import { LoadingOutlined } from "@ant-design/icons";

const StudentCaseTable = ({ studentCaseList, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(() =>
    studentCaseList.map((cases) => false)
  );

  const toggleModal = (idx, target) => {
    console.log(idx);
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
  return (
    <div className="student-case-table-list">
      {loading ? (
        // <Spin
        //   spinning={loading}
        //   indicator={
        //     <LoadingOutlined
        //       style={{
        //         fontSize: 24,
        //       }}
        //       spin
        //     />
        //   }
        // />
        <>
          <div className="student-case-flex">
            <div>
              <div className="student-case-card">
                <div className="student-case-card-header">
                  <Skeleton active />
                </div>
              </div>
            </div>
          </div>
          <div className="student-case-flex">
            <div>
              <div className="student-case-card">
                <div className="student-case-card-header">
                  <Skeleton active />
                </div>
              </div>
            </div>
          </div>
          <div className="student-case-flex">
            <div>
              <div className="student-case-card">
                <div className="student-case-card-header">
                  <Skeleton active />
                </div>
              </div>
            </div>
          </div>
          <div className="student-case-flex">
            <div>
              <div className="student-case-card">
                <div className="student-case-card-header">
                  <Skeleton active />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {studentCaseList.map((studentCase, index) => (
            <div key={index} className="student-case-flex">
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
        </>
      )}
    </div>
  );
};

export default StudentCaseTable;
