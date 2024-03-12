import React from "react";
import FEMALE from "../../assets/female_avatar.png";
import MALE from "../../assets/male_avatar.svg";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SchoolIcon from "@mui/icons-material/School";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import { Button } from "antd";

const TutorCards = ({ tutor }) => {
  return (
    <div className="tutor-cards">
      <div className="tutor-cards-header">
        <div className="tutor-cards-header-first">
          <div>
            {tutor.gender === "male" && (
              <img className="tutor-cards-img" alt="example" src={MALE} />
            )}
            {tutor.gender === "female" && (
              <img className="tutor-cards-img" alt="example" src={FEMALE} />
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              marginLeft: "14px",
            }}
          >
            <span>T{tutor.id}</span>
            <span
              style={{ color: "orange", fontSize: "18px", fontWeight: "700" }}
            >
              {tutor.engName}
            </span>
          </div>
        </div>
        <div>
          <Button
            style={{
              backgroundColor: "orange",
              color: "white",
              width: "100px",
              height: "40px",
            }}
          >
            詳細資料
          </Button>
        </div>
      </div>
      <div className="tutor-cards-details">
        <div>
          <span>
            <SchoolIcon />
          </span>
          <span>
            {tutor.university} | {tutor.universityMajor}
          </span>
        </div>
        <div>
          <span>
            <ImportContactsIcon />{" "}
          </span>
          <span>
            {tutor.tutorContent && tutor.tutorContent.replaceAll(",", " / ")}
          </span>
        </div>
        <div>
          <span>
            <CastForEducationIcon />
          </span>
          <span>
            {" "}
            {tutor.tutorLevel && tutor.tutorLevel.replaceAll(",", " | ")}
          </span>
        </div>
        <div>
          <span>
            <LocationOnIcon />
          </span>
          <span> {tutor.tutorAreas}</span>
        </div>
        <div>
          <span>
            <LocalAtmIcon />{" "}
          </span>
          <span>HKD${tutor.lowestSalary}~</span>
        </div>
      </div>
    </div>
  );
};

export default TutorCards;
