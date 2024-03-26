import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, verifyOtpPhone } from "../../redux/tutor/tutorAction";
import { Button } from "antd";
import axios from "axios";
import useCountDown from "../common/useCountDown";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { registerStduentUser } from "../../redux/auth/authAction";

const StudentOtpVerify = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [otpValue, setOtpValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { secondsLeft, start } = useCountDown();
  const inputsRef = useRef([]);
  // const { userInfo } = useParams();
  // const studentInfo = decodeURI(userInfo);
  const studentInfo = location.state.studentInfo;
  const { success } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    start(5);
  }, []);

  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [success]);

  const handleInput = (e, index) => {
    const target = e.target;
    const val = target.value;

    if (isNaN(val)) {
      target.value = "";
      return;
    }

    const next = inputsRef.current[index + 1];
    if (val !== "" && next) {
      next.focus();
    }

    const updatedOtpValue =
      otpValue.substring(0, index) + val + otpValue.substring(index + 1);
    setOtpValue(updatedOtpValue);
    setError(false);
  };

  const handleKeyUp = (e, index) => {
    const target = e.target;
    const key = e.key.toLowerCase();

    if (key === "backspace" || key === "delete") {
      target.value = "";

      const prev = inputsRef.current[index - 1];
      if (prev) {
        prev.focus();
      }

      const updatedOtpValue =
        otpValue.substring(0, index - 1) + otpValue.substring(index);
      setOtpValue(updatedOtpValue);

      return;
    }
  };

  const renderInputs = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <input
        key={index}
        ref={(input) => (inputsRef.current[index] = input)}
        className="otp-input"
        type="text"
        inputMode="numeric"
        maxLength="1"
        value={otpValue[index] || ""}
        onChange={(e) => handleInput(e, index)}
        onKeyUp={(e) => handleKeyUp(e, index)}
      />
    ));
  };

  const OtpCodeHandler = () => {
    // setLoading(true);

    // const twilioOtpDTO = {
    //   phone: "67308138",
    //   otpCode: otpValue,
    // };

    // // dispatch(verifyOtpPhone(twilioOtpDTO));
    // axios
    //   .post("http://localhost:8080/twilio/auth/verifyPhone", twilioOtpDTO, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data.code);
    //     if (res.data.code === 0) {
    //       dispatch(registerStduentUser(studentInfo));
    //     } else if (res.data.code === -1) {
    //       setError(true);
    //     }
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    dispatch(registerStduentUser(studentInfo));
  };

  const resendOtpHandler = () => {
    dispatch(sendOtp(studentInfo?.phone));
    start(60);
  };

  return (
    <div className="otp-container-layout">
      <h2>電話驗證</h2>
      <br />
      <div>驗證碼已傳送到 +852 {studentInfo?.phone}</div>

      <div className="otp-container">
        <div className="inputs">{renderInputs()}</div>
      </div>
      {error && <span style={{ color: "red" }}>驗證碼錯誤</span>}
      <br />
      <br />
      <div>
        收不到驗證碼？{" "}
        {secondsLeft > 0 ? (
          <span style={{ color: "grey", fontSize: "15px" }}>
            再發送 ({secondsLeft})
          </span>
        ) : (
          <span
            style={{ color: "blue", fontSize: "15px", cursor: "pointer" }}
            onClick={resendOtpHandler}
          >
            再發送
          </span>
        )}
      </div>
      <br />
      <Button
        type="primary"
        htmlType="submit" // Change the type to "button"
        loading={loading}
        onClick={OtpCodeHandler}
      >
        繼續
      </Button>
    </div>
  );
};

export default StudentOtpVerify;
