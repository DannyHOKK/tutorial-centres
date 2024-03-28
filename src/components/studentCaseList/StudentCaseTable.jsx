import React, { useState } from "react";
import StudentCaseCard from "./StudentCaseCard";
import { Modal, Pagination, Skeleton, Spin } from "antd";
import StudentCasePopUp from "./StudentCasePopUp";
import { LoadingOutlined } from "@ant-design/icons";

const StudentCaseTable = ({ studentCaseList, loading, setQueryData }) => {
  const [isModalOpen, setIsModalOpen] = useState(
    () => studentCaseList.list?.map(() => false) || []
  );

  const toggleModal = (idx, target) => {
    console.log(idx);
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
  return (
    <div>
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
                    <Skeleton />
                  </div>
                </div>
              </div>
            </div>
            <div className="student-case-flex">
              <div>
                <div className="student-case-card">
                  <div className="student-case-card-header">
                    <Skeleton />
                  </div>
                </div>
              </div>
            </div>
            <div className="student-case-flex">
              <div>
                <div className="student-case-card">
                  <div className="student-case-card-header">
                    <Skeleton />
                  </div>
                </div>
              </div>
            </div>
            <div className="student-case-flex">
              <div>
                <div className="student-case-card">
                  <div className="student-case-card-header">
                    <Skeleton />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {studentCaseList.list?.map((studentCase, index) => (
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
      <div style={{ textAlign: "center", margin: "40px 0 0 0" }}>
        <Pagination
          total={studentCaseList.pagination?.total}
          current={studentCaseList.pagination?.currentPage}
          pageSize={10}
          onChange={(page) => {
            setQueryData((prev) => ({
              ...prev,
              currentPage: page,
            }));

            window.scrollTo(0, 0);
          }}
        />
      </div>
    </div>
  );
};

export default StudentCaseTable;
