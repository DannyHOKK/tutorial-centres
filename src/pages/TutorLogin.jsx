import React, { useState } from "react";
import LoginForm from "../components/tutorLogin/LoginForm";
import "./pages.css";
const TutorLogin = () => {
  const [credential, setCredential] = useState({});

  return (
    <div className="login-container page-container">
      <h2>導師登入或登記</h2>
      <LoginForm credential={credential} setCredential={setCredential} />
    </div>
  );
};

export default TutorLogin;
