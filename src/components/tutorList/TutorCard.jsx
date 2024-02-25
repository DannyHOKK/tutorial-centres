import { Tabs, Tooltip } from "antd";
import React, { useState } from "react";
import FEMALE from "../../assets/female_avatar.png";
import MALE from "../../assets/male_avatar.svg";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useNavigate } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Button } from "@mui/material";

const TutorCard = ({ tutor }) => {
  const navigate = useNavigate();
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "個人資料",
      children: (
        <>
          <strong style={{ fontSize: "36px" }}>{tutor.engName}</strong>
          <div className="tutor-card-details">
            <Tooltip
              placement="rightBottom"
              title={tutor.tutorContent.replaceAll(",", " ")}
            >
              <div>
                <ImportContactsIcon style={{ marginRight: "6px" }} />
                {tutor.tutorContent.split(",").slice(0, 3).join(" ")}
              </div>
            </Tooltip>
            <div>
              <CastForEducationIcon style={{ marginRight: "6px" }} />
              {tutor.highestTutorLevel}
            </div>
            <div>
              <LocationOnIcon />
              {tutor.tutorAreas.replaceAll(",", " ")}
            </div>
            <div>
              <AttachMoneyIcon />
              {"HKD $" + tutor.lowestSalary + " 起"}
            </div>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: "學歷",
      children: (
        <>
          <div className="tutor-card-details">
            <div style={{ fontSize: "24px", marginTop: "10px" }}>
              {tutor.highestEducation}
            </div>
            <div>
              <SchoolIcon style={{ marginRight: "6px" }} />
              {tutor.university}
            </div>
            <div>
              <MenuBookIcon style={{ marginRight: "6px" }} />
              {tutor.universityMajor}
            </div>
          </div>
        </>
      ),
    },
    {
      key: "3",
      label: "簡介",
      children: (
        <>
          <div className="tutor-card-details">
            <div style={{ fontWeight: "900", fontSize: "24px" }}>
              {tutor.introTitle}
            </div>
            <div>{tutor.intro}</div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="tutor-card">
      <div style={{ padding: "6px 0", position: "relative" }}>
        {"T00" + tutor.id}
      </div>
      {tutor.gender === "male" && (
        <img
          style={{
            width: "180px",
            display: "block",
            margin: "0 auto",
          }}
          alt="example"
          src={MALE}
        />
      )}
      {tutor.gender === "female" && (
        <img
          style={{
            width: "180px",
            display: "block",
            margin: "0 auto",
          }}
          alt="example"
          src={FEMALE}
        />
      )}
      <div className="tutor-card-content">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        <br />
      </div>
      <div className="tutor-card-button">
        <Button
          style={{
            backgroundColor: "rgb(0, 86, 246)",
          }}
          onClick={() => navigate("/tutor/details/" + tutor.id)}
        >
          詳細資料
        </Button>

        <Button
          style={{
            backgroundColor: "green",
          }}
        >
          預約
        </Button>
      </div>
    </div>
  );
};

export default TutorCard;
