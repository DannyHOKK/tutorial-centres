import React from "react";
import HomeSixPromise from "../components/home/HomeSixPromise";
import HOME_STUDENT_STEPS from "../assets/home_student_steps.png";
import HOME_STUDENT_STEPS_1000 from "../assets/home_student_steps_1000px.png";
import HOME_BANNER from "../assets/home_banner.png";
import HOME_BANNER_400 from "../assets/home_banner_400px.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <div
        style={{
          textAlign: "center",
        }}
      >
        <picture>
          <source media="(max-width: 460px)" srcSet={HOME_BANNER_400} />
          <img
            alt="Smart Tutor Centres Introduction 補聰中心Banner"
            src={HOME_BANNER}
            style={{ width: "100%" }}
          />
        </picture>
        <br />
        <picture>
          <source
            media="(max-width: 1080px)"
            srcSet={HOME_STUDENT_STEPS_1000}
          />
          <img
            alt="Smart Tutor Centres Student Signin Tutorial 學生登記教學"
            src={HOME_STUDENT_STEPS}
            style={{ width: "100%" }}
          />
        </picture>
        <br />
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#ffe7c9",
            padding: "30px 0",
          }}
        >
          <Button
            style={{
              width: "300px",
              height: "50px",
              background: "orange",
              color: "white",
            }}
            onClick={() => navigate("/studentRegister")}
          >
            登記成為學生
          </Button>
        </div>
      </div>
      <div className="page-xm home-container">
        <br />
        <br />
        <HomeSixPromise />
      </div>
    </div>
  );
};

export default Home;
