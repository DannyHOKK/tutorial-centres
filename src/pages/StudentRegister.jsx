import React from "react";
import StudentRegisterForm from "../components/studentRegister/StudentRegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { registerStduentUser } from "../redux/auth/authAction";

const StudentRegister = () => {
  const { loading, userDetails, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const studentRegister = (credential) => {
    dispatch(registerStduentUser(credential));
  };

  return (
    <div className="page-container login-container page-xs">
      創建學生帳號
      <div>
        <StudentRegisterForm studentRegister={studentRegister} />
      </div>
    </div>
  );
};

export default StudentRegister;
