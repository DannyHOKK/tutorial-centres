import React from "react";
import "./footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <a href="/">關於我們</a>
        {/* <a>教育資訊</a>
        <a>認證獎項</a>
        <a>重大里程</a> */}
        <a href="/tutorRegister">成為導師</a>
        <a href="/studentRegister">成為學生</a>
        <a href="/studentCaseList">補習個案</a>
        <a href="/contactUs">聯絡我們</a>
        {/* <a>下載應用程式</a> */}
        <a href="/tutorFeeReference">私補學費參考</a>
        <a href="/termsAndConditions">隱私政策</a>
      </div>
      <div className="copyright">
        Copyright © {new Date().getFullYear()} | Smart Tutor Centres All rights
        reserved
      </div>
    </div>
  );
};

export default Footer;
