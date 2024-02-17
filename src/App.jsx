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
import TutorDetails from "./components/tutorList/tutorDetails";
import StudentCase from "./pages/StudentCase";

function App() {
  const { userToken } = useSelector((state) => state.auth);

  const checkStudentAuthority = () => {
    if (
      localStorage.getItem("userDetails") !== null &&
      JSON.parse(localStorage.getItem("userDetails")).authorities.includes(
        "ROLE_STUDENT"
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
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
              checkStudentAuthority() ? <Navigate to="/" /> : <StudentCase />
            }
          />
          <Route path="/tutorList" element={<TutorList />} />
          <Route path="/tutor/details" element={<TutorDetails />}>
            <Route path=":tutorId" element={<TutorDetails />} />
          </Route>
        </Routes>

        <FloatButton
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
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
