import React, { useEffect } from "react";
import { Button, Space, Badge, Table } from "antd";
import { fontSize } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { cancelMatchingCase } from "../../redux/tutor/tutorAction";

const TutorMatchingTable = ({ matchingStudentCaseDetails }) => {
  const dispatch = useDispatch();

  const expandedRowRender = (record) => {
    const columns = [
      {
        title: "學生性別",
        dataIndex: "studentGender",
        key: "studentGender",
      },
      {
        title: "補習類別",
        dataIndex: "tutorCategory",
        key: "tutorCategory",
      },
      {
        title: "補習內容",
        dataIndex: "tutorContent",
        key: "tutorContent",
      },
      {
        title: "每週堂數",
        dataIndex: "lessonPerWeek",
        key: "lessonPerWeek",
      },
      {
        title: "每堂時長",
        dataIndex: "lessonDuration",
        key: "lessonDuration",
      },
      {
        title: "地區",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "詳細地址",
        dataIndex: "detailsAddress",
        key: "detailsAddress",
      },
    ];

    const data = matchingStudentCaseDetails.map((caseDetails) => [
      {
        studentGender: caseDetails.studentCase.gender,
        tutorCategory: caseDetails.studentCase.tutorCategory,
        tutorContent: caseDetails.studentCase.tutorContent,
        lessonPerWeek: caseDetails.studentCase.lessonPerWeek,
        lessonDuration: caseDetails.studentCase.lessonDuration,
        address: caseDetails.studentCase.address,
        detailsAddress: caseDetails.studentCase.detailsAddress,
      },
    ]);
    return (
      <Table
        columns={columns}
        dataSource={data[record.key]}
        pagination={false}
        className="tutor-map-student-table-subtitle"
      />
    );
  };

  const columns = [
    {
      title: "個案ID",
      dataIndex: "caseId",
      key: "caseId",
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
      title: "狀態",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "行動",
      key: "operation",
      render: (text, record) => {
        if (record.recordStatus === "pending") {
          return (
            <>
              <Button
                style={{ backgroundColor: "red", color: "white" }}
                onClick={() => cancelMatchingHandler(record.recrodCaseId)}
              >
                取消配對
              </Button>
            </>
          );
        }
      },
    },
  ];

  const data = matchingStudentCaseDetails.map((caseDetails, index) => ({
    key: index,
    caseId: <a>{caseDetails.studentCase.caseId}</a>,
    studentLevelType: caseDetails.studentCase.studentLevelType,
    studentLevel: caseDetails.studentCase.studentLevel,
    tutorMethod: caseDetails.studentCase.tutorMethod,
    salary: (
      <>
        ${caseDetails.studentCase.minSalary} ~ $
        {caseDetails.studentCase.maxSalary}{" "}
      </>
    ),
    createDate: caseDetails.createDate.split("T")[0],
    status: (
      <>
        {caseDetails.status === "pending" && (
          <>
            <Badge status="processing" text="處理中" />
          </>
        )}

        {caseDetails.status === "cancel" && (
          <>
            <Badge status="default" text="已取消" />
          </>
        )}
        {caseDetails.status === "success" && (
          <>
            <Badge status="success" text="成功配對" />
          </>
        )}

        {caseDetails.status === "rejected" && (
          <>
            <Badge status="error" text="被拒絕" />
          </>
        )}
      </>
    ),
    recordStatus: caseDetails.status,
    recrodCaseId: caseDetails.studentCase.caseId,
  }));

  const cancelMatchingHandler = (caseId) => {
    dispatch(cancelMatchingCase(caseId));
    window.location.reload();
    console.log(caseId);
  };

  return (
    <div>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          // Only allow expanding one row at a time
          // expandRowByClick: true,
        }}
        dataSource={data}
        className="tutor-map-student-table"
      />
    </div>
  );
};

export default TutorMatchingTable;
