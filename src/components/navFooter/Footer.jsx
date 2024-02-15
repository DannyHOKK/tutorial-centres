import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <a>關於我們</a>
        <a>教育資訊</a>
        <a>認證獎項</a>
        <a>重大里程</a>
        <a>聯絡我們</a>
        <a>下載應用程式</a>
        <a>私補學費參考</a>
        <a>隱私政策</a>
      </div>
      <div className="copyright">
        Copyright © 2019 - {new Date().getFullYear()} | HKTutorial All rights
        reserved
      </div>
    </div>
  );
};

export default Footer;
