import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTutor } from "../../redux/tutor/tutorAction";

const TutorDetails = () => {
  const params = useParams();
  const { loading, error, success, tutor } = useSelector(
    (state) => state.tutor
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTutor(params.tutorId));
  }, []);
  return (
    <div className="page-xm page-container tutor-details-flex">
      <div className="tutor-details-left">
        <div className="tutor-details-card-left">highestEducation</div>
      </div>
      <div className="tutor-details-right">
        <div className="tutor-details-card-right">hihi</div>
      </div>
    </div>
  );
};

export default TutorDetails;
