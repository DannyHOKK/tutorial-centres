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
// import TutorDetails from "./components/tutorList/tutorDetails";
import StudentCase from "./pages/StudentCase";
import TutorFeeReference from "./pages/TutorFeeReference";
import ContactUs from "./pages/ContactUs";
import TuitionFeeReference from "./pages/TuitionFeeReference";

function App() {
  const { userToken, userIdentity, userDetails } = useSelector(
    (state) => state.auth
  );

  const checkStudentAuthority = () => {
    // if (userDetails !== null && userIdentity.includes("ROLE_STUDENT")) {
    //   console.log(userIdentity);
    return true;
    // } else {
    //   return false;
    // }
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
            path="/createStudentCase"
            element={
              checkStudentAuthority() ? <StudentCase /> : <Navigate to="/" />
            }
          />
          <Route path="/studentCase" element={<StudentCase />} />
          <Route path="/tutorList" element={<TutorList />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/tutorFeeReference" element={<TutorFeeReference />} />
          <Route
            path="/tuitionFeeReference"
            element={<TuitionFeeReference />}
          />
          {/* <Route path="/tutor/details" element={<TutorDetails />}>
            <Route path=":tutorId" element={<TutorDetails />} />
          </Route> */}
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
