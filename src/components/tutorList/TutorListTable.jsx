import React, { useState } from "react";
import TutorCards from "./TutorCards";
import TutorCardsPopUp from "./TutorCardsPopUp";
import { useDispatch, useSelector } from "react-redux";
import { getTutor } from "../../redux/tutor/tutorAction";

const TutorListTable = ({ loading, tutorList }) => {
  const [isModalOpen, setIsModalOpen] = useState(() =>
    tutorList.map((cases) => false)
  );
  const { error, success, tutorDetails } = useSelector((state) => state.tutor);
  const dispatch = useDispatch();

  const toggleModal = (idx, target) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };

  const tutorDetailsHandler = (tutorId) => {
    dispatch(getTutor(tutorId));
  };

  return (
    <div>
      <div className="tutor-list">
        {tutorList.map((tutor, index) => (
          <div key={index} style={{ flex: "0 0 48%", cursor: "pointer" }}>
            <div
              onClick={() => {
                toggleModal(index, true);
                tutorDetailsHandler(tutor.id);
              }}
            >
              <TutorCards tutor={tutor} />
            </div>

            <TutorCardsPopUp
              toggleModal={toggleModal}
              isModalOpen={isModalOpen}
              index={index}
              tutor={tutorDetails}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorListTable;
