import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { FloatButton } from "antd";
import {
  WhatsAppOutlined,
  InstagramOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import TutorLogin from "./pages/TutorLogin";
import TutorRegister from "./pages/TutorRegister";
import StudentRegister from "./pages/StudentRegister";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<TutorLogin />} />
          <Route path="/register" element={<TutorRegister />} />
          <Route path="/studentRegister" element={<StudentRegister />} />
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
