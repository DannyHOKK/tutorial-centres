import { LoadingOutlined } from "@ant-design/icons";
import { Button, Divider, Spin } from "antd";
import React from "react";

const StudentInfo = ({ getStudentLoading, studentDetails }) => {
  console.log(studentDetails);
  return (
    <div className="user-info-card">
      {getStudentLoading ? (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "150px",
          }}
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 24,
              }}
              spin
            />
          }
        />
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span>學生編號：</span>
              <span>{studentDetails?.id}</span>
            </div>
            <Button type="primary">編輯個人資料</Button>
          </div>
          <div>
            <span>創建日期：</span>
            <span>{studentDetails?.createDate?.split("T")[0]}</span>
          </div>
          <Divider />
          <div className="student-info-list">
            <div>
              <span>中文姓名：</span>
              <span>{studentDetails?.chineseName}</span>
            </div>
            <div>
              <span>英文姓名：</span>
              <span>{studentDetails?.engName}</span>
            </div>
            <div>
              <span>性別：</span>
              <span>{studentDetails?.gender}</span>
            </div>
            <div>
              <span>地址：</span>
              <span>{studentDetails?.address}</span>
            </div>
            <div>
              <span>電郵：</span>
              <span>{studentDetails?.email}</span>
            </div>
            <div>
              <span>電話：</span>
              <span>{studentDetails?.phone}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentInfo;
