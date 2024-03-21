import React, { useState } from "react";
import TutorCards from "./TutorCards";
import TutorCardsPopUp from "./TutorCardsPopUp";
import { useDispatch, useSelector } from "react-redux";
import { getTutor } from "../../redux/tutor/tutorAction";
import { Skeleton } from "antd";

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
        {loading ? (
          <>
            <div className="tutor-list-flex">
              <div>
                <div className="tutor-cards">
                  <Skeleton active avatar paragraph={{ rows: 1 }} />
                  <div className="tutor-cards-header">
                    <div className="tutor-cards-header-first"></div>
                  </div>

                  <div className="tutor-cards-details">
                    <Skeleton active />
                  </div>
                </div>
              </div>
            </div>
            <div className="tutor-list-flex">
              <div>
                <div className="tutor-cards">
                  <Skeleton active avatar paragraph={{ rows: 1 }} />
                  <div className="tutor-cards-header">
                    <div className="tutor-cards-header-first"></div>
                  </div>

                  <div className="tutor-cards-details">
                    <Skeleton active />
                  </div>
                </div>
              </div>
            </div>
            <div className="tutor-list-flex">
              <div>
                <div className="tutor-cards">
                  <Skeleton active avatar paragraph={{ rows: 1 }} />
                  <div className="tutor-cards-header">
                    <div className="tutor-cards-header-first"></div>
                  </div>

                  <div className="tutor-cards-details">
                    <Skeleton active />
                  </div>
                </div>
              </div>
            </div>
            <div className="tutor-list-flex">
              <div>
                <div className="tutor-cards">
                  <Skeleton active avatar paragraph={{ rows: 1 }} />
                  <div className="tutor-cards-header">
                    <div className="tutor-cards-header-first"></div>
                  </div>

                  <div className="tutor-cards-details">
                    <Skeleton active />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            {tutorList.map((tutor, index) => (
              <div key={index} className="tutor-list-flex">
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
          </>
        )}
      </div>
    </div>
  );
};

export default TutorListTable;
