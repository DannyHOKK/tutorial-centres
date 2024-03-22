import React from "react";
import WHATSAPP_ICON from "../assets/whatsapp_icon.png";
import OFFICE_ICON from "../assets/office_icon.png";
import EMAIL_ICON from "../assets/email_icon.png";

const ContactUs = () => {
  return (
    <div className="page-container page-xm">
      <div className="page-header-title">聯絡補聰 Smart Tutor </div>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#ffe7c9",
          padding: "20px 0",
        }}
      >
        <br />
        <br />
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          <img
            alt="Contact Us Smart Tutor Centres Whatsapp 聯絡我們補聰中心"
            src={WHATSAPP_ICON}
            style={{ width: "80px" }}
          />
          <br />
          <span>WhatsApp聯絡我們</span>
          <br />
          <span>電話：67308138</span>
        </a>
        <br />
        <br />
        <br />
        <br />
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          <img
            alt="Contact Us Smart Tutor Centres Whatsapp 聯絡我們補聰中心"
            src={OFFICE_ICON}
            style={{ width: "80px" }}
          />
          <br />
          <span>星期一至日 - 上午9時至下午11時</span>
        </a>
        <br />
        <br />
        <br />
        <br />{" "}
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          <img
            alt="Contact Us Smart Tutor Centres Whatsapp 聯絡我們補聰中心"
            src={EMAIL_ICON}
            style={{ width: "100px" }}
          />
          <br />
          <span>smarttutor@gmail.com</span>
        </a>
        <br />
        <br />
      </div>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#ffba7b",
          padding: "20px 0",
        }}
      >
        如有合作請聯絡我們客服
      </div>
    </div>
  );
};

export default ContactUs;
