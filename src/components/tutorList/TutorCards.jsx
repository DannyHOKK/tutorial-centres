import React from "react";
import FEMALE from "../../assets/female_avatar.png";
import MALE from "../../assets/male_avatar.svg";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SchoolIcon from "@mui/icons-material/School";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

const TutorCards = ({ tutor }) => {
  return (
    <div className="tutor-cards">
      <div>
        <div className="tutor-cards-header">
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
            }}
          >
            <span>{tutor.id}</span>
            <span style={{ color: "orange" }}>{tutor.engName}</span>
          </div>
        </div>
      </div>
      <div>
        <SchoolIcon /> {tutor.university}
      </div>
      <div>
        <ImportContactsIcon /> {tutor.tutorContent.replaceAll(",", " / ")}
      </div>
      <div>
        <LocalAtmIcon /> HKD${tutor.lowestSalary}~
      </div>
    </div>
  );
};

export default TutorCards;
