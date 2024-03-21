import { Badge, Button, Table, notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelMatchingTutor } from "../../redux/student/studentAction";
import TutorCardsPopUp from "../tutorList/TutorCardsPopUp";
import {
  acceptStudentMatching,
  getTutor,
  rejectStudentMatching,
} from "../../redux/tutor/tutorAction";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const StudentMatchTutorTable = ({ studentMatching }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(() =>
    studentMatching.map((cases) => false)
  );
  const { tutorDetails, getTutorLoading } = useSelector((state) => state.tutor);

  const toggleModal = (idx, target) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };

  const { studentCaseSuccess, studentCaseError, studentSuccessMsg } =
    useSelector((state) => state.studentCase);

  useEffect(() => {
    console.log(studentCaseSuccess);
    if (studentCaseSuccess) {
      openNotification("success", studentSuccessMsg);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      // navigate("/tutorList");
    }
    if (studentCaseError) {
      openNotification("error", studentCaseError);
    }
  }, [studentCaseSuccess, studentCaseError]);

  const openNotification = (status, msg) => {
    if (status === "success") {
      notification.open({
        message: (
          <>
            <TaskAltIcon style={{ color: "green" }} />
            {msg}
          </>
        ),
        top,
      });
    }
    if (status === "error") {
      notification.open({
        message: msg,
        description: "如有需要請聯絡我們",
        top,
      });
    }
  };

  const rejectStudentMatchingHandler = (studentMatchId) => {
    dispatch(rejectStudentMatching(studentMatchId));
    window.location.reload();
  };

  const acceptStudentMatchingHandler = (studentMatchId) => {
    dispatch(acceptStudentMatching(studentMatchId));
    window.location.reload();
  };

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "學歷等級",
      dataIndex: "studentLevelType",
      key: "studentLevelType",
    },
    {
      title: "學生年級",
      dataIndex: "studentLevel",
      key: "studentLevel",
    },
    {
      title: "授課方式",
      dataIndex: "tutorMethod",
      key: "tutorMethod",
    },
    {
      title: "補習內容",
      dataIndex: "tutorContent",
      key: "tutorContent",
    },
    {
      title: "學生性別",
      dataIndex: "studentGender",
      key: "studentGender",
    },
    {
      title: "配對日期",
      dataIndex: "createDate",
      key: "createDate",
    },
    {
      title: "時薪",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "地區",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "狀態",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "行動",
      key: "operation",
      render: (text, record) => {
        return (
          <>
            {record.recordStatus === "pending" && (
              <>
                <Button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    marginRight: "14px",
                  }}
                  onClick={() => acceptStudentMatchingHandler(record.recordId)}
                >
                  確認配對
                </Button>
                <Button
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() => rejectStudentMatchingHandler(record.recordId)}
                >
                  取消配對
                </Button>
              </>
            )}
          </>
        );
      },
    },
  ];

  const data = studentMatching.map((match, index) => ({
    id: index + 1,
    studentLevelType: match.studentLevelType,
    studentLevel: match.studentLevel,
    tutorMethod: match.tutorMethod,
    tutorContent: match.tutorContent && match.tutorContent.replaceAll(",", " "),
    studentGender: match.studentUser.gender,
    createDate: match.createDate && match.createDate.split("T")[0],
    salary: <>${match.salary}</>,
    address: match.address,
    status: (
      <>
        {match.status === "pending" && (
          <>
            <Badge status="processing" text="待確認" />
          </>
        )}

        {match.status === "cancel" && (
          <>
            <Badge status="default" text="已取消" />
          </>
        )}
        {match.status === "waitAdmin" && (
          <>
            <Badge status="success" text="等待管理員聯絡" />
          </>
        )}

        {match.status === "rejected" && (
          <>
            <Badge status="error" text="已拒絕" />
          </>
        )}
      </>
    ),
    recordStatus: match.status,
    recordId: match.id,
  }));

  return (
    <div className="tutor-map-student-table">
      <Table
        columns={columns}
        dataSource={data}
        // style={{ minWidth: "1000px" }}
      />

      {studentMatching.map((match, index) => (
        <TutorCardsPopUp
          getTutorLoading={getTutorLoading}
          toggleModal={toggleModal}
          isModalOpen={isModalOpen}
          index={index}
          tutorDetails={tutorDetails}
        />
      ))}
    </div>
  );
};

export default StudentMatchTutorTable;
