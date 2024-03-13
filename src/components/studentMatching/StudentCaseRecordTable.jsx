import { Button, Table } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

const StudentCaseRecordTable = ({ studentCaseMatching }) => {
  const dispatch = useDispatch();

  const expandedRowRender = (record) => {
    const columns = [
      {
        title: "補習內容",
        dataIndex: "tutorContent",
        key: "tutorContent",
      },
    ];

    const data = studentCaseMatching.map((caseDetails) => ({
      tutorContent: caseDetails.studentCase.tutorContent,
    }));

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
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "個案ID",
      dataIndex: "caseId",
      key: "caseId",
    },
    {
      title: "學歷等級",
      dataIndex: "tutorCategory",
      key: "tutorCategory",
    },
    {
      title: "學生年級",
      dataIndex: "tutorGender",
      key: "tutorGender",
    },
    {
      title: "學生年級",
      dataIndex: "tutorContent",
      key: "tutorContent",
    },
    {
      title: "授課方式",
      dataIndex: "tutorMethod",
      key: "tutorMethod",
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
        // if (record.recordStatus === "pending") {
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
        // }
      },
    },
  ];

  // let tempCaseId;
  // const data = studentCaseMatching.map((cases, index) => {
  //   if (tempCaseId === cases.studentCase.caseId) {
  //     return null;
  //   } else {
  //     console.log(tempCaseId);
  //     tempCaseId = cases.studentCase.caseId;
  //     return {
  //       key: cases.studentCase.caseId,
  //       id: index,
  //       caseId: cases.studentCase.caseId,
  //       createDate: cases.studentCase.createData,
  //       tutorCategory: cases.studentCase.tutorCategory,
  //       tutorGender: cases.studentCase.tutorGender,
  //       tutorContent: cases.studentCase.tutorContent,
  //       tutorMethod: cases.studentCase.tutorMethod,
  //       studentLevel: cases.studentCase.studentLevel,
  //       studentLevelType: cases.studentCase.studentLevelType,
  //       salary: (
  //         <>
  //           ${cases.studentCase.minSalary} ~ ${cases.studentCase.maxSalary}
  //         </>
  //       ),
  //       address: cases.studentCase.address,
  //       detailsAddress: cases.studentCase.detailsAddress,
  //       lessonPerWeek: cases.studentCase.lessonPerWeek,
  //       lessonDuration: cases.studentCase.lessonDuration,
  //       status: cases.status,
  //     };
  //   }
  // });

  const data = studentCaseMatching.map((cases, index) => ({
    key: cases.id,
    id: index + 1,
    caseId: cases.caseId,
    tutorCategory: cases.tutorCategory,
    tutorContent: cases.tutorContent,
    tutorMethod: cases.tutorMethod,
    address: cases.address,
    detailsAddress: cases.detailsAddress,
    status: cases.status,
    salary: (
      <>
        ${cases.minSalary} ~ ${cases.maxSalary}
        {console.log(cases)}
      </>
    ),
    createData: cases.createDate && cases.createDate.split(",")[0],
    recordStatus: cases.status,
    recrodCaseId: cases.caseId,
    recordTutor: cases.tutorUser,
  }));

  console.log(studentCaseMatching);

  const cancelMatchingHandler = (caseId) => {
    // dispatch(cancelMatchingCase(caseId));
    window.location.reload();
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        expandable={{
          expandedRowRender,
          // Only allow expanding one row at a time
          // expandRowByClick: true,
        }}
        className="tutor-map-student-table"
      />
    </div>
  );
};

export default StudentCaseRecordTable;
