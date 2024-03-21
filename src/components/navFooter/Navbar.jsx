import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import TUTOR_ICON from "../../assets/smart_tutor_icon.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

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
          <a href="/">
            <img
              alt="Smart Tutor Centres Icon"
              src={TUTOR_ICON}
              width={"150px"}
            />
          </a>
        </div>
        <div className="nav-list-container">
          <div className="nav-list-left">
            <ul className="nav-link">
              <li>
                <NavLink activeclassname="active" to="/tutorList">
                  星級導師
                </NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" to="/studentCaseList">
                  補習個案
                </NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" to="/tuitionFeeReference">
                  學費參考
                </NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" to="/tutorFeeReference">
                  導師收費
                </NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" to="/tutorRegister">
                  成為導師
                </NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" to="/contactUs">
                  聯絡我們
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-list-right">
            <ul className="nav-link">
              {checkAuthenticated() ? (
                <>
                  {checkStudentAuthority() ? (
                    <>
                      <li>
                        <NavLink
                          activeclassname="active"
                          to="/createStudentCase"
                        >
                          創建補習個案
                        </NavLink>
                      </li>
                      <li>
                        <NavLink activeclassname="active" to="/studentMatching">
                          配對記錄
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink
                          className="nav-button"
                          activeclassname="active"
                          to="/tutorMatching"
                        >
                          配對記錄
                        </NavLink>
                      </li>
                    </>
                  )}

                  <li>
                    <div
                      type="button"
                      onClick={logoutHandler}
                      className="login"
                    >
                      <ExitToAppIcon />
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      className="nav-button login"
                      activeclassname="active"
                      to="/login"
                    >
                      登入
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav-button login"
                      activeclassname="active"
                      to="/studentRegister"
                    >
                      學生註冊
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
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
              <NavLink activeclassname="active" to="/tutorList">
                星級導師
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/studentCaseList">
                補習個案
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/tuitionFeeReference">
                學費參考
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/tutorFeeReference">
                導師收費
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/tutorRegister">
                成為導師
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/contactUs">
                聯絡我們
              </NavLink>
            </li>
            {checkAuthenticated() ? (
              <>
                {checkStudentAuthority() ? (
                  <>
                    <li>
                      <NavLink
                        style={{ marginRight: "20px" }}
                        activeclassname="active"
                        to="/createStudentCase"
                      >
                        創建補習方案
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeclassname="active" to="/studentMatching">
                        配對記錄
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink activeclassname="active" to="/tutorMatching">
                        配對記錄
                      </NavLink>
                    </li>
                  </>
                )}
                <li>
                  <div type="button" onClick={logoutHandler} className="login">
                    <ExitToAppIcon />
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    className="nav-button login"
                    activeclassname="active"
                    to="/login"
                  >
                    登入
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-button login"
                    activeclassname="active"
                    to="/studentRegister"
                  >
                    學生註冊
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
