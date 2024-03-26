import { LoadingOutlined } from "@ant-design/icons";
import { Button, Divider, Spin } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const TutorInfo = ({ getTutorLoading, tutorDetails }) => {
  const navigate = useNavigate();

  const editHandler = () => {
    const tutorInfo = tutorDetails;
    navigate("/tutorMatching/edit", { state: { tutorInfo } });
  };
  return (
    <div className="user-info-card">
      {getTutorLoading ? (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "150px",
          }}
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 24,
              }}
              spin
            />
          }
        />
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span>導師編號：</span>
              <span>{tutorDetails?.id}</span>
            </div>
            <Button type="primary" onClick={editHandler}>
              編輯個人資料
            </Button>
          </div>
          <div>
            <span>創建日期：</span>
            <span>{tutorDetails?.createDate?.split("T")[0]}</span>
          </div>
          <Divider />
          <div className="student-info-list">
            <div>
              <span>中文姓名：</span>
              <span>{tutorDetails?.chineseName}</span>
            </div>
            <div>
              <span>英文姓名：</span>
              <span>{tutorDetails?.engName}</span>
            </div>
            <div>
              <span>性別：</span>
              <span>{tutorDetails?.gender}</span>
            </div>
            <div>
              <span>出生日期：</span>
              <span>{tutorDetails?.birthYear}</span>
            </div>
            <div>
              <span>身份證號碼：</span>
              <span>{tutorDetails?.hkId}</span>
            </div>
            <div>
              <span>地址：</span>
              <span>{tutorDetails?.address}</span>
            </div>
            <div>
              <span>電郵：</span>
              <span>{tutorDetails?.email}</span>
            </div>
            <div>
              <span>電話：</span>
              <span>{tutorDetails?.phone}</span>
            </div>
            <div>
              <span>現在職業：</span>
              <span>{tutorDetails?.currentJob}</span>
            </div>
            <div>
              <span>最高學歷：</span>
              <span>{tutorDetails?.highestEducation}</span>
            </div>
            <div>
              <span>大學：</span>
              <span>{tutorDetails?.university}</span>
            </div>
            <div>
              <span>大學主修：</span>
              <span>{tutorDetails?.universityMajor}</span>
            </div>
            <div>
              <span>教育水平：</span>
              <span>{tutorDetails?.currentEducationLevel}</span>
            </div>
            <div>
              <span>工作經驗：</span>
              <span>{tutorDetails?.workExperience}</span>
            </div>
            <div>
              <span>中學：</span>
              <span>{tutorDetails?.highSchool}</span>
            </div>
            <div>
              <span>中學主修：</span>
              <span>{tutorDetails?.highSchoolMajor}</span>
            </div>
            <div>
              <span>教學地區：</span>
              <span>{tutorDetails?.tutorAreas}</span>
            </div>
            <div>
              <span>教學內容：</span>
              <span>{tutorDetails?.tutorContent}</span>
            </div>

            {tutorDetails.tutorLevel && (
              <div>
                <span>可教授程度(補習)：</span>
                <span>{tutorDetails?.tutorLevel}</span>
              </div>
            )}
            {tutorDetails.tutorMusic && (
              <div>
                <span>可教授程度(會話)：</span>
                <span>{tutorDetails?.tutorMusic}</span>
              </div>
            )}
            {tutorDetails.tutorOtherLevel && (
              <div>
                <span>可教授程度(音樂)：</span>
                <span>{tutorDetails?.tutorOtherLevel}</span>
              </div>
            )}
            {tutorDetails.tutorSpeaking && (
              <div>
                <span>可教授程度(其他)：</span>
                <span>{tutorDetails?.tutorSpeaking}</span>
              </div>
            )}
            <div>
              <span>最低補習時薪：</span>
              <span>{tutorDetails?.lowestSalary}</span>
            </div>
            <div>
              <span>理想補習時薪：</span>
              <span>{tutorDetails?.idealSalary}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorInfo;
