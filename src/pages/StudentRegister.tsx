import React from "react";
import StudentRegisterForm from "../components/studentRegister/StudentRegisterForm";

const StudentRegister: React.FC = () => {
  return (
    <div className="page-container login-container">
      創建學生帳號
      <div>
        <StudentRegisterForm />
      </div>
    </div>
  );
};

export default StudentRegister;
