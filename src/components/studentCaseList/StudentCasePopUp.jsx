import { Button, Divider, Modal } from "antd";
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
            <span className="student-level-type" style={{ fontSize: "16px" }}>
              {studentCase.studentLevelType}
            </span>
            <span style={{ color: "blue" }}>
              {studentCase.tutorContent.replaceAll(",", " ")}
            </span>
          </div>
        }
        open={isModalOpen[index]}
        onOk={() => toggleModal(index, false)}
        onCancel={() => toggleModal(index, false)}
        footer={
          <>
            <Button className="popup-card-footer-btn">申請</Button>
          </>
        }
        width={900}
      >
        <br />
        <br />
        <h3>個案編號: {studentCase.caseId}</h3>
        <div className="student-case-popup">
          <div>
            <span>性別：</span>
            <span>{studentCase.gender}</span>
          </div>
          <div>
            <span> 補習類別：</span>
            <span style={{ color: "blue" }}>{studentCase.tutorCategory}</span>
          </div>
          {studentCase.tutorMethod === "視像補習" ? (
            <>
              <div>
                <span>授課方式：</span>
                <span
                  style={{
                    marginLeft: "6px",
                    padding: "3px 10px",
                    border: "1px solid black",
                    borderRadius: "5px",
                  }}
                >
                  {studentCase.tutorMethod}
                </span>
              </div>
            </>
          ) : (
            <>
              <div>
                <span> 補習地區：</span>
                <span>{studentCase.address}</span>
              </div>
              <div>
                <span> 授課方式：</span>
                <span
                  style={{
                    marginLeft: "6px",
                    padding: "6px 10px",
                    border: "1px solid black",
                    borderRadius: "5px",
                  }}
                >
                  {studentCase.tutorMethod}
                </span>
              </div>
              <div>
                <span> 詳細地址：</span>
                <span>{studentCase.detailsAddress}</span>
              </div>
            </>
          )}
          <div>
            <span> 要求導師性別：</span>
            <span>{studentCase.tutorGender}</span>
          </div>
          <div>
            <span> 要求導師：</span>
            <span>{studentCase.tutorRequest.replaceAll(",", " / ")}</span>
          </div>
          <div>
            <span> 每週堂數：</span>
            <span>{studentCase.lessonPerWeek}</span>
          </div>
          <div>
            <span> 每堂長度：</span>
            <span>{studentCase.lessonDuration}</span>
          </div>
          <div>
            <span> 時薪：</span>
            <span>
              HKD${studentCase.minSalary} ~ ${studentCase.maxSalary}
            </span>
          </div>
        </div>
        <br />
        <br />
        {/* {studentCase.timeslot && (
          <>
            <Divider />
            <div style={{ margin: "20px" }}>
              <span> 時間表：</span>
              <span>{studentCase.timeslot}</span>
            </div>
          </>
        )} */}

        <Divider />
        <div style={{ margin: "20px" }}>
          <span> 時間表：</span>
          <span>{studentCase.timeslot}</span>
        </div>
      </Modal>
    </div>
  );
};

export default StudentCasePopUp;
