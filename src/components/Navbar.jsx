import React from "react";
import "./navbar.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { userDetails, userToken, userIdentity } = useSelector(
    (state) => state.auth
  );

  const checkAuthenticated = () => {
    if (localStorage.getItem("userToken") !== null) {
      return true;
    } else {
      return false;
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userDetails");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div>
          <a href="/">Hong Kong Tutorial Centres</a>
        </div>
        <div className="nav-list-container">
          <div>
            <a>星級導師</a>
            <a>最新個案</a>
            <a>視像補習</a>
            <a>幫助中心</a>
            <a>搵導師</a>
            <a>成為導師</a>
          </div>
          <div>
            {checkAuthenticated() ? (
              <>
                <button type="button" onClick={logoutHandler} className="login">
                  登出
                </button>
              </>
            ) : (
              <>
                <a href="/login" className="login">
                  登入
                </a>
                <a href="/tutorRegister">註冊</a>|
                <a href="/studentRegister">學生註冊</a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
