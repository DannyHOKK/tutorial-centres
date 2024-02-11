import React from "react";
import StudentRegisterForm from "../components/studentRegister/StudentRegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { registerStduentUser } from "../auth/authAction";

const StudentRegister = () => {
  const { loading, userDetails, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const studentRegister = (credential) => {
    // AuthService.loginTutor(credential).then((res) => {
    //   console.log(res);
    // });
    dispatch(registerStduentUser(credential));
  };

  return (
    <div className="page-container login-container">
      創建學生帳號
      <div>
        <StudentRegisterForm studentRegister={studentRegister} />
      </div>
    </div>
  );
};

export default StudentRegister;
