import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const { userDetails, userToken, userIdentity } = useSelector(
    (state) => state.auth
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const checkAuthenticated = () => {
    if (userToken !== null) {
      return true;
    } else {
      return false;
    }
  };

  const checkStudentAuthority = () => {
    console.log(userToken);
    if (userDetails !== null && userIdentity.includes("ROLE_STUDENT")) {
      console.log(userDetails.authorities);
      console.log(userToken);
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
      <div className="navbar-container page-xl">
        <div>
          <a href="/">Hong Kong Tutorial Centres</a>
        </div>
        <div className="nav-list-container">
          <div className="nav-list-left">
            <ul className="nav-link">
              <li>
                <a href="/tutorList">星級導師</a>
              </li>
              <li>
                <a href="/studentCaseList">補習個案</a>
              </li>
              <li>
                <a href="/tuitionFeeReference">學費參考</a>
              </li>
              <li>
                <a href="/tutorFeeReference">導師收費</a>
              </li>
              <li>
                <a href="/tutorRegister">成為導師</a>
              </li>
              <li>
                <a href="/contactUs">聯絡我們</a>
              </li>
            </ul>
          </div>
          <div className="nav-list-right">
            {checkAuthenticated() ? (
              <div>
                {checkStudentAuthority() ? (
                  <>
                    <a href="/createStudentCase">創建補習個案</a>
                    <a href="/studentMatching">配對記錄</a>
                  </>
                ) : (
                  <>
                    <a href="/tutorMatching">配對記錄</a>
                  </>
                )}
                <a type="button" onClick={logoutHandler} className="login">
                  登出
                </a>
              </div>
            ) : (
              <div>
                <a href="/login" className="login">
                  登入
                </a>
                <a href="/studentRegister">學生註冊</a>
              </div>
            )}
          </div>
          <div className="toggle-btn" onClick={toggleDropdown}>
            <MenuIcon />
          </div>
        </div>
        <div
          ref={dropdownRef}
          className={`dropdown-menu  ${isOpen ? "open" : ""}`}
        >
          <ul className="nav-link">
            <li>
              <a href="/tutorList">星級導師</a>
            </li>
            <li>
              <a href="/studentCaseList">補習個案</a>
            </li>
            <li>
              <a href="/tuitionFeeReference">學費參考</a>
            </li>
            <li>
              <a href="/tutorFeeReference">導師收費</a>
            </li>
            <li>
              <a href="/tutorRegister">成為導師</a>
            </li>
            <li>
              <a href="/contactUs">聯絡我們</a>
            </li>
            {checkAuthenticated() ? (
              <li>
                {checkStudentAuthority() ? (
                  <a href="/createStudentCase" style={{ marginRight: "20px" }}>
                    創建補習方案
                  </a>
                ) : (
                  <>
                    <a href="/tutorMatching">配對記錄</a>
                  </>
                )}
                <button type="button" onClick={logoutHandler} className="login">
                  登出
                </button>
              </li>
            ) : (
              <li>
                <a href="/login" className="login">
                  登入
                </a>
                <a href="/studentRegister">學生註冊</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
