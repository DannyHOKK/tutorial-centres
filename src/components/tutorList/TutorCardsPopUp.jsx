import { Button, Modal, notification } from "antd";
import React, { useEffect, useState } from "react";
import FEMALE from "../../assets/female_avatar.png";
import MALE from "../../assets/male_avatar.svg";
import { useDispatch, useSelector } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { matchingTutor } from "../../redux/student/studentAction";
import TutorCardsMatchingForm from "./TutorCardsMatchingForm";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const TutorCardsPopUp = ({ toggleModal, isModalOpen, index, tutor }) => {
  const { userToken, userIdentity, userDetails } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const applyTutorHandler = () => {
    if (
      userDetails !== null &&
      userDetails !== undefined &&
      userIdentity.includes("ROLE_STUDENT")
    ) {
      setOpen(true);
    } else if (
      userDetails !== null &&
      userDetails !== undefined &&
      userIdentity.includes("ROLE_TUTOR")
    ) {
    } else {
      setLogin(true);
    }
  };

  const applyConfirmHandler = (formData) => {
    dispatch(matchingTutor(formData));
  };

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
        centered
        open={isModalOpen[index]}
        onOk={() => toggleModal(index, false)}
        onCancel={() => toggleModal(index, false)}
        width={950}
        footer={
          <>
            {userDetails !== null &&
            userDetails !== undefined &&
            userIdentity.includes("ROLE_TUTOR") ? (
              <></>
            ) : (
              <>
                <Button
                  className="popup-card-footer-btn"
                  onClick={applyTutorHandler}
                >
                  立即預約
                </Button>
              </>
            )}
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
                  {tutor.examResult.split(",").map((result) => (
                    <tr key={result.id}>
                      <td>{result.split(":")[0]}</td>
                      <td>{result.split(":")[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          <div className="tutor-cards-popup-title">補習資料</div>

          <div className="tutor-cards-details-table">
            {tutor.tutorLevel && (
              <>
                <span>可教授程度(補習)：</span>
                <span>
                  {tutor.tutorLevel !== undefined &&
                    tutor.tutorLevel.replaceAll(",", " | ")}
                </span>
              </>
            )}
            {tutor.tutorMusic && (
              <>
                <span>可教授程度(補習)：</span>
                <span>
                  {tutor.tutorMusic !== undefined &&
                    tutor.tutorMusic.replaceAll(",", " | ")}
                </span>
              </>
            )}
            {tutor.tutorOtherLevel && (
              <>
                <span>可教授程度(補習)：</span>
                <span>
                  {tutor.tutorOtherLevel !== undefined &&
                    tutor.tutorOtherLevel.replaceAll(",", " | ")}
                </span>
              </>
            )}
            {tutor.tutorSpeaking && (
              <>
                <span>可教授程度(補習)：</span>
                <span>
                  {tutor.tutorSpeaking !== undefined &&
                    tutor.tutorSpeaking.replaceAll(",", " | ")}
                </span>
              </>
            )}

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
            <span>
              {tutor.noteProvided ? (
                <DoneIcon style={{ color: "green" }} />
              ) : (
                <CloseIcon style={{ color: "red" }} />
              )}
            </span>
          </div>
        </>
      </Modal>

      <TutorCardsMatchingForm
        tutor={tutor}
        open={open}
        setOpen={setOpen}
        applyConfirmHandler={applyConfirmHandler}
      />

      <Modal
        title="請登入學生帳戶"
        centered
        open={login}
        onCancel={() => setLogin(false)}
        footer={
          <>
            <Button onClick={() => setLogin(false)}>取消</Button>
            <Button
              onClick={() => {
                navigate("/login");
              }}
              style={{ backgroundColor: "orange", color: "white" }}
            >
              登入
            </Button>
          </>
        }
      >
        <div>請登入</div>
      </Modal>
    </div>
  );
};

export default TutorCardsPopUp;
