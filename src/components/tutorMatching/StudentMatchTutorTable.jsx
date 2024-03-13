import { Badge, Button, Table } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { cancelMatchingTutor } from "../../redux/student/studentAction";

const StudentMatchTutorTable = ({ studentMatching, identity }) => {
  const dispatch = useDispatch();
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "導師ID",
      dataIndex: "tutorId",
      key: "tutorId",
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
        if (identity === "student") {
          if (record.recordStatus === "pending") {
            return (
              <>
                <Button
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() => studentCancelMatchingHandler(record.recordId)}
                >
                  取消配對
                </Button>
              </>
            );
          }
        } else if (identity === "tutor") {
          return (
            <>
              <Button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  marginRight: "14px",
                }}
              >
                確認配對
              </Button>
              <Button style={{ backgroundColor: "red", color: "white" }}>
                取消配對
              </Button>
            </>
          );
        }
      },
    },
  ];

  const data = studentMatching.map((match, index) => ({
    id: index + 1,
    tutorId: match.tutorUser.id,
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
            <Badge status="processing" text="處理中" />
          </>
        )}

        {match.status === "cancel" && (
          <>
            <Badge status="default" text="已取消" />
          </>
        )}
        {match.status === "success" && (
          <>
            <Badge status="success" text="成功配對" />
          </>
        )}

        {match.status === "rejected" && (
          <>
            <Badge status="error" text="被拒絕" />
          </>
        )}
      </>
    ),
    recordStatus: match.status,
    recordId: match.id,
  }));

  const studentCancelMatchingHandler = (caseId) => {
    dispatch(cancelMatchingTutor(caseId));
    window.location.reload();
  };

  return (
    <div className="tutor-map-student-table">
      <Table
        columns={columns}
        dataSource={data}
        // style={{ minWidth: "1000px" }}
      />
    </div>
  );
};

export default StudentMatchTutorTable;
