import React from "react";
import StudentRegisterForm from "../components/studentRegister/StudentRegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { registerStduentUser } from "../redux/auth/authAction";
import StudentOtpVerify from "../components/studentRegister/StudentOtpVerify";

const StudentRegister = () => {
  const { loading, userDetails, error, success } = useSelector(
    (state) => state.auth
  );
  return (
    <div className="page-container login-container page-xs">
      創建學生帳號
      <div>
        <StudentRegisterForm />
      </div>
    </div>
  );
};

export default StudentRegister;
