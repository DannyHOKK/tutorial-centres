import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TutorInfoEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tutorInfo = location.state?.tutorInfo;

  useEffect(() => {
    if (!tutorInfo) {
      navigate("/tutorMatching");
    }
  }, [tutorInfo]);
  console.log(tutorInfo);
  return <div className="page-container page-xs">TutorInfoEdit</div>;
};

export default TutorInfoEdit;
