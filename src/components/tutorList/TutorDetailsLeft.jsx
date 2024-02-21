import React from "react";
import FEMALE from "../../assets/female_avatar.png";
import MALE from "../../assets/male_avatar.svg";

const TutorDetailsLeft = ({ tutor }) => {
  return (
    <div className="tutor-details-card-left">
      {tutor.gender === "male" && (
        <img
          style={{
            width: "240px",
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
            width: "240px",
            display: "block",
            margin: "0 auto",
          }}
          alt="example"
          src={FEMALE}
        />
      )}
      <div>{tutor.chineseName}</div>
      <div>{tutor.engName}</div>
      <div>{tutor.address}</div>
    </div>
  );
};

export default TutorDetailsLeft;
