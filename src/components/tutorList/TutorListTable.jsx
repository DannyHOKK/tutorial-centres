import React, { useState } from "react";
import TutorCards from "./TutorCards";
import TutorCardsPopUp from "./TutorCardsPopUp";
import { useDispatch, useSelector } from "react-redux";
import { getTutor } from "../../redux/tutor/tutorAction";
import { Pagination, Skeleton } from "antd";

const TutorListTable = ({ loading, tutorList, setFilteData }) => {
  const [isModalOpen, setIsModalOpen] = useState(
    tutorList.list?.map(() => false) || []
  );
  const { error, success, getTutorLoading, tutorDetails } = useSelector(
    (state) => state.tutor
  );
  const { userIdentity } = useSelector((state) => state.auth);
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
                  <Skeleton avatar paragraph={{ rows: 1 }} />
                  <div className="tutor-cards-header">
                    <div className="tutor-cards-header-first"></div>
                  </div>

                  <div className="tutor-cards-details">
                    <Skeleton />
                  </div>
                </div>
              </div>
            </div>
            <div className="tutor-list-flex">
              <div>
                <div className="tutor-cards">
                  <Skeleton avatar paragraph={{ rows: 1 }} />
                  <div className="tutor-cards-header">
                    <div className="tutor-cards-header-first"></div>
                  </div>

                  <div className="tutor-cards-details">
                    <Skeleton />
                  </div>
                </div>
              </div>
            </div>
            <div className="tutor-list-flex">
              <div>
                <div className="tutor-cards">
                  <Skeleton avatar paragraph={{ rows: 1 }} />
                  <div className="tutor-cards-header">
                    <div className="tutor-cards-header-first"></div>
                  </div>

                  <div className="tutor-cards-details">
                    <Skeleton />
                  </div>
                </div>
              </div>
            </div>
            <div className="tutor-list-flex">
              <div>
                <div className="tutor-cards">
                  <Skeleton avatar paragraph={{ rows: 1 }} />
                  <div className="tutor-cards-header">
                    <div className="tutor-cards-header-first"></div>
                  </div>

                  <div className="tutor-cards-details">
                    <Skeleton />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {tutorList.list?.map((tutor, index) => (
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
                  getTutorLoading={getTutorLoading}
                  toggleModal={toggleModal}
                  isModalOpen={isModalOpen}
                  index={index}
                  tutorDetails={tutorDetails}
                  userIdentity={userIdentity}
                />
              </div>
            ))}
          </>
        )}
      </div>
      <div style={{ textAlign: "center", margin: "40px 0 0 0" }}>
        <Pagination
          total={tutorList.pagination?.total}
          current={tutorList.pagination?.currentPage}
          pageSize={10}
          onChange={(page) => {
            setFilteData((prev) => ({
              ...prev,
              currentPage: page,
            }));
            window.scrollTo(0, 0);
          }}
        />
      </div>
    </div>
  );
};

export default TutorListTable;
