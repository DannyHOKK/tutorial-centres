import { useState } from "react";

import "./App.css";
import Navbar from "./components/navFooter/Navbar";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/navFooter/Footer";
import { FloatButton } from "antd";
import {
  WhatsAppOutlined,
  InstagramOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import TutorLogin from "./pages/TutorLogin";
import TutorRegister from "./pages/TutorRegister";
import StudentRegister from "./pages/StudentRegister";
import PrivateRoute from "./routing/PrivateRoute";
import { useSelector } from "react-redux";
import TutorList from "./pages/TutorList";
import StudentCase from "./pages/StudentCase";
import TutorFeeReference from "./pages/TutorFeeReference";
import ContactUs from "./pages/ContactUs";
import TuitionFeeReference from "./pages/TuitionFeeReference";
import StudentCaseList from "./pages/StudentCaseList";
import TutorMatching from "./pages/TutorMatching";
import StudentMatching from "./pages/StudentMatching";
import StudentOtpVerify from "./components/studentRegister/StudentOtpVerify";

function App() {
  const { userToken, userIdentity, userDetails } = useSelector(
    (state) => state.auth
  );

  const checkAuthority = () => {
    if (
      userDetails !== null &&
      userDetails !== undefined &&
      userIdentity.includes("ROLE_STUDENT")
    ) {
      return "student";
    } else if (
      userDetails !== null &&
      userDetails !== undefined &&
      userIdentity.includes("ROLE_TUTOR")
    ) {
      return "tutor";
    } else {
      return null;
    }
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/user" element={<PrivateRoute />}></Route>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={userToken ? <Navigate to="/" /> : <TutorLogin />}
          />
          <Route
            path="/tutorRegister"
            element={userToken ? <Navigate to="/" /> : <TutorRegister />}
          />
          <Route
            path="/studentRegister"
            element={userToken ? <Navigate to="/" /> : <StudentRegister />}
          />
          <Route
            path="/studentRegister/:userInfo"
            element={<StudentOtpVerify />}
          />

          <Route
            path="/createStudentCase"
            element={
              checkAuthority() === "student" ? (
                <StudentCase />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/tutorMatching"
            element={
              checkAuthority() === "tutor" ? (
                <TutorMatching />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/studentMatching"
            element={
              checkAuthority() === "student" ? (
                <StudentMatching />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/studentCaseList" element={<StudentCaseList />} />
          <Route path="/tutorList" element={<TutorList />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/tutorFeeReference" element={<TutorFeeReference />} />
          <Route
            path="/tuitionFeeReference"
            element={<TuitionFeeReference />}
          />
        </Routes>

        {/* <FloatButton
          style={{ right: "4%", bottom: "100px", mar: "20px" }}
          onClick={() => console.log("onClick")}
          icon={<WhatsAppOutlined />}
        />
        <FloatButton
          style={{ right: "4%", bottom: "160px", mar: "20px" }}
          onClick={() => console.log("onClick")}
          icon={<InstagramOutlined />}
        />
        <FloatButton
          style={{ right: "4%", bottom: "220px", mar: "20px" }}
          onClick={() => console.log("onClick")}
          icon={<FacebookFilled />}
        /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
