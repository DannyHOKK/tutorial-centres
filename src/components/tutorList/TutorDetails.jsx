import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTutor } from "../../redux/tutor/tutorAction";
import { Tabs } from "antd";
import TutorDetailsRight from "./TutorDetailsRight";
import TutorDetailsLeft from "./TutorDetailsLeft";

const TutorDetails = () => {
  const params = useParams();
  const { loading, error, success, tutor } = useSelector(
    (state) => state.tutor
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTutor(params.tutorId));
  }, []);

  const items = [
    {
      key: "1",
      label: "個人資料",
      children: (
        <>
          <strong style={{ fontSize: "36px" }}>{tutor.engName}</strong>
          <div className="tutor-card-details">
            <div>{tutor.tutorContent}</div>
            <div>{tutor.highestTutorLevel}</div>
            <div>{tutor.tutorAreas}</div>
            <div>{"HKD $" + tutor.lowestSalary + " 起"}</div>
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
            <div>{tutor.university}</div>
            <div>{tutor.universityMajor}</div>
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
    <div className="page-xm page-container tutor-details-flex">
      <div className="tutor-details-left">
        <TutorDetailsLeft tutor={tutor} />
      </div>
      <div className="tutor-details-right">
        <TutorDetailsRight tutor={tutor} />
      </div>
    </div>
  );
};

export default TutorDetails;
