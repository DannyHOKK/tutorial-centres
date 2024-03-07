import { Button, Modal } from "antd";
import React, { useEffect } from "react";
import FEMALE from "../../assets/female_avatar.png";
import MALE from "../../assets/male_avatar.svg";
import { useDispatch, useSelector } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const TutorCardsPopUp = ({ toggleModal, isModalOpen, index, tutor }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getTutor());
    console.log(tutor.id);
  }, []);
  return (
    <div>
      <Modal
        title={
          <>
            <div
              style={{
                display: "flex",

                paddingBottom: "10px",
              }}
            >
              <div>
                {tutor.gender === "male" && (
                  <img style={{ width: "100px" }} alt="example" src={MALE} />
                )}
                {tutor.gender === "female" && (
                  <img style={{ width: "100px" }} alt="example" src={FEMALE} />
                )}
              </div>
              <div style={{ margin: "auto 20px" }}>
                <div style={{ fontSize: "34px", fontWeight: "800" }}>
                  {tutor.engName}
                </div>
                <div style={{ color: "grey" }}>{tutor.introTitle}</div>
              </div>
            </div>
          </>
        }
        open={isModalOpen[index]}
        onOk={() => toggleModal(index, false)}
        onCancel={() => toggleModal(index, false)}
        width={950}
        footer={
          <>
            <Button className="popup-card-footer-btn">立即預約</Button>
          </>
        }
      >
        <>
          <div className="tutor-cards-popup-title">導師簡介</div>
          {tutor.intro}

          <div className="tutor-cards-popup-title">導師資料</div>
          <div className="tutor-cards-details-table">
            <span>補習經驗：</span>
            <span>{tutor.workExperience}</span>

            <span>就讀中學：</span>
            <span>{tutor.highSchool}</span>

            <span>最高學歷：</span>
            <span>{tutor.highestEducation}</span>

            <span>就讀大學/科目：</span>
            <span>
              {tutor.university} ｜ {tutor.universityMajor}
            </span>

            <span>現在學歷狀態：</span>
            <span>{tutor.currentEducationLevel}</span>

            <span>現在職業：</span>
            <span>{tutor.currentJob}</span>

            <span>公開試：</span>
            <span>{tutor.hkOpenExam}</span>
          </div>
          <br />
          {tutor.examResult && (
            <>
              <div
                style={{
                  marginBottom: "10px",
                  fontSize: "18px",
                  fontWeight: "800",
                }}
              >
                公開試成績：
              </div>
              <table className="details-exam-table">
                <thead>
                  <tr>
                    <th>科目</th>
                    <th>等級</th>
                  </tr>
                </thead>
                <tbody>
                  {tutor.examResult.map((result) => (
                    <tr key={result.id}>
                      <td>{result.subject}</td>
                      <td>{result.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          <div className="tutor-cards-popup-title">補習資料</div>

          <div className="tutor-cards-details-table">
            <span>補習地區：</span>
            <span>
              {tutor.tutorAreas !== undefined &&
                tutor.tutorAreas.replaceAll(",", " ")}
            </span>

            <span>補習內容：</span>
            <span>
              {tutor.tutorContent !== undefined &&
                tutor.tutorContent.replaceAll(",", " ")}
            </span>

            <span>可提供補習筆記：</span>
            <span>{tutor.noteProvided ? <DoneIcon /> : <CloseIcon />}</span>
          </div>
        </>
      </Modal>
    </div>
  );
};

export default TutorCardsPopUp;
