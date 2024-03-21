import { Button, Divider, Modal, Skeleton, notification } from "antd";
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

const TutorCardsPopUp = ({
  getTutorLoading,
  toggleModal,
  isModalOpen,
  index,
  tutorDetails,
}) => {
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
            {getTutorLoading ? (
              <div
                style={{
                  display: "flex",

                  paddingBottom: "10px",
                }}
              >
                <Skeleton avatar />
              </div>
            ) : (
              <>
                {" "}
                <div
                  style={{
                    display: "flex",

                    paddingBottom: "10px",
                  }}
                >
                  <div>
                    {tutorDetails.gender === "male" && (
                      <img
                        style={{ width: "100px" }}
                        alt="example"
                        src={MALE}
                      />
                    )}
                    {tutorDetails.gender === "female" && (
                      <img
                        style={{ width: "100px" }}
                        alt="example"
                        src={FEMALE}
                      />
                    )}
                  </div>
                  <div style={{ margin: "auto 20px" }}>
                    <div style={{ fontSize: "34px", fontWeight: "800" }}>
                      {tutorDetails.engName}
                    </div>
                    <div style={{ color: "grey" }}>
                      {tutorDetails.introTitle}
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        }
        centered
        open={isModalOpen[index]}
        onOk={() => toggleModal(index, false)}
        onCancel={() => toggleModal(index, false)}
        width={950}
        footer={
          getTutorLoading ? (
            <Skeleton.Button />
          ) : (
            <>
              {userIdentity?.includes("ROLE_TUTOR") && (
                <Button
                  className="popup-card-footer-btn"
                  onClick={applyTutorHandler}
                >
                  立即預約
                </Button>
              )}
            </>
          )
        }
      >
        <>
          {getTutorLoading ? (
            <>
              <Divider />
              <Skeleton paragraph={{ rows: 6 }} style={{ width: "45%" }} />
              <br />
              <Skeleton paragraph={{ rows: 4 }} style={{ width: "45%" }} />
              <Divider />
              <Skeleton paragraph={{ rows: 5 }} style={{ width: "45%" }} />
            </>
          ) : (
            <>
              <div className="tutor-cards-popup-title">導師簡介</div>
              {tutorDetails.intro}
              <div className="tutor-cards-popup-title">導師資料</div>
              <div className="tutor-cards-details-table">
                <span>補習經驗：</span>
                <span>{tutorDetails.workExperience}</span>

                <span>就讀中學：</span>
                <span>{tutorDetails.highSchool}</span>

                <span>最高學歷：</span>
                <span>{tutorDetails.highestEducation}</span>

                <span>就讀大學/科目：</span>
                <span>
                  {tutorDetails.university} ｜ {tutorDetails.universityMajor}
                </span>

                <span>現在學歷狀態：</span>
                <span>{tutorDetails.currentEducationLevel}</span>

                <span>現在職業：</span>
                <span>{tutorDetails.currentJob}</span>

                <span>公開試：</span>
                <span>{tutorDetails.hkOpenExam}</span>
              </div>
              <br />
              {tutorDetails.examResult && (
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
                      {tutorDetails.examResult.split(",").map((result) => (
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
                {tutorDetails.tutorLevel && (
                  <>
                    <span>可教授程度(補習)：</span>
                    <span>
                      {tutorDetails.tutorLevel !== undefined &&
                        tutorDetails.tutorLevel.replaceAll(",", " | ")}
                    </span>
                  </>
                )}
                {tutorDetails.tutorMusic && (
                  <>
                    <span>可教授程度(補習)：</span>
                    <span>
                      {tutorDetails.tutorMusic !== undefined &&
                        tutorDetails.tutorMusic.replaceAll(",", " | ")}
                    </span>
                  </>
                )}
                {tutorDetails.tutorOtherLevel && (
                  <>
                    <span>可教授程度(補習)：</span>
                    <span>
                      {tutorDetails.tutorOtherLevel !== undefined &&
                        tutorDetails.tutorOtherLevel.replaceAll(",", " | ")}
                    </span>
                  </>
                )}
                {tutorDetails.tutorSpeaking && (
                  <>
                    <span>可教授程度(補習)：</span>
                    <span>
                      {tutorDetails.tutorSpeaking !== undefined &&
                        tutorDetails.tutorSpeaking.replaceAll(",", " | ")}
                    </span>
                  </>
                )}

                <span>補習地區：</span>
                <span>
                  {tutorDetails.tutorAreas !== undefined &&
                    tutorDetails.tutorAreas.replaceAll(",", " ")}
                </span>

                <span>補習內容：</span>
                <span>
                  {tutorDetails.tutorContent !== undefined &&
                    tutorDetails.tutorContent.replaceAll(",", " ")}
                </span>

                <span>可提供補習筆記：</span>
                <span>
                  {tutorDetails.noteProvided ? (
                    <DoneIcon style={{ color: "green" }} />
                  ) : (
                    <CloseIcon style={{ color: "red" }} />
                  )}
                </span>
              </div>
            </>
          )}
        </>
      </Modal>

      <TutorCardsMatchingForm
        tutorDetails={tutorDetails}
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
