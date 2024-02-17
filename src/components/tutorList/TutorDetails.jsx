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
    <div className="page-container tutor-list-container">
      {tutor.engName}
      {tutor.chineseName}
    </div>
  );
};

export default TutorDetails;
