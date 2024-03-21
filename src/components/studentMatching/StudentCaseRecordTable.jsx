import { Badge, Button, Table, notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTutor } from "../../redux/tutor/tutorAction";
import TutorCardsPopUp from "../tutorList/TutorCardsPopUp";
import {
  acceptStudentCase,
  rejectStudentCase,
} from "../../redux/student/studentAction";

const StudentCaseRecordTable = ({ studentCaseMatching }) => {
  const dispatch = useDispatch();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(() =>
    studentCaseMatching.map((cases) => false)
  );
  const { tutorDetails, getTutorLoading } = useSelector((state) => state.tutor);

  const handleChange = (pagination, filters, sorter) => {
    // console.log("Various parameters", pagination, filters, sorter);
    console.log(sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const toggleModal = (idx, target) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };

  const { rejectSuccess, acceptSuccess } = useSelector(
    (state) => state.studentCase
  );

  useEffect(() => {
    if (rejectSuccess) {
      window.location.reload();
    }
  }, [rejectSuccess]);

  useEffect(() => {
    if (acceptSuccess) {
      window.location.reload();
    }
  }, [acceptSuccess]);

  const tutorDetailsHandler = (tutorId) => {
    dispatch(getTutor(tutorId));
  };

  const rejectCaseHandler = (tutorMatchCaseId) => {
    dispatch(rejectStudentCase(tutorMatchCaseId));
  };

  const acceptCaseHandler = (tutorMatchCaseId) => {
    dispatch(acceptStudentCase(tutorMatchCaseId));
  };

  const expandedRowRender = (record) => {
    console.log(record.recordStatus);
    const columns = [
      {
        title: "導師名字",
        dataIndex: "engName",
        key: "engName",
      },
      {
        title: "導師性別",
        dataIndex: "tutorGender",
        key: "tutorGender",
      },
      {
        title: "導師職業",
        dataIndex: "currentJob",
        key: "currentJob",
      },
      {
        title: "補習經驗",
        dataIndex: "workExperience",
        key: "workExperience",
      },
      {
        title: "就讀大學",
        dataIndex: "university",
        key: "university",
      },
      {
        title: "大學主修",
        dataIndex: "universityMajor",
        key: "universityMajor",
      },
      {
        title: "大學等級",
        dataIndex: "currentEducationLevel",
        key: "currentEducationLevel",
      },
      {
        title: "配對日期",
        dataIndex: "caseCreateDate",
        key: "caseCreateDate",
      },
      {
        title: "狀態",
        dataIndex: "caseStatus",
        key: "caseStatus",
      },
      {
        title: "行動",
        key: "operation",
        render: (text, record) => {
          if (record.recordCaseStatus === "pending") {
            return (
              <>
                <Button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    marginRight: "10px",
                  }}
                  onClick={() => acceptCaseHandler(record.tutorMatchCaseId)}
                >
                  確認配對
                </Button>
                <Button
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() => rejectCaseHandler(record.tutorMatchCaseId)}
                >
                  拒絕導師
                </Button>
              </>
            );
          }
        },
      },
    ];

    // const data = Object.values(
    //   studentCaseMatching.reduce((acc, curr) => {
    //     const { caseId, ...rest } = curr;
    //     if (acc[caseId]) {
    //       acc[caseId] = [
    //         ...acc[caseId],
    //         {
    //           key: caseId,

    //           engName: rest.engName,
    //           tutorGender: rest.tutorGender,
    //           currentJob: rest.currentJob,
    //           workExperience: rest.workExperience,
    //           university: rest.university,
    //           universityMajor: rest.universityMajor,
    //           currentEducationLevel: rest.currentEducationLevel,
    //           caseStatus: rest.caseStatus,
    //           caseCreateDate:
    //             rest.caseCreateDate && rest.caseCreateDate.split(" ")[0],
    //         },
    //       ];
    //     } else {
    //       acc[caseId] = [
    //         {
    //           key: caseId,

    //           engName: rest.engName,
    //           tutorGender: rest.tutorGender,
    //           currentJob: rest.currentJob,
    //           workExperience: rest.workExperience,
    //           university: rest.university,
    //           universityMajor: rest.universityMajor,
    //           currentEducationLevel: rest.currentEducationLevel,
    //           caseStatus: rest.caseStatus,
    //           caseCreateDate:
    //             rest.caseCreateDate && rest.caseCreateDate.split(" ")[0],
    //         },
    //       ];
    //     }
    //     console.log(acc);
    //     return acc;
    //   }, {})
    // );

    let tempCaseId;
    const data = {};
    studentCaseMatching.forEach((cases, index) => {
      if (tempCaseId === cases.caseId) {
        data[tempCaseId].push({
          id: index,
          tutorMatchCaseId: cases.tutorMatchCaseId,
          engName: (
            <a
              onClick={() => {
                tutorDetailsHandler(cases.tutorId);
                toggleModal(index, true);
              }}
            >
              {cases.engName}
            </a>
          ),
          tutorGender: cases.tutorGender,
          currentJob: cases.currentJob,
          workExperience: cases.workExperience,
          university: cases.university,
          universityMajor: cases.universityMajor,
          currentEducationLevel: cases.currentEducationLevel,
          caseStatus: (
            <>
              {cases.caseStatus === "pending" && (
                <>
                  <Badge status="processing" text="處理中" />
                </>
              )}

              {cases.caseStatus === "cancel" && (
                <>
                  <Badge status="default" text="已取消" />
                </>
              )}
              {cases.caseStatus === "success" && (
                <>
                  <Badge status="success" text="成功配對" />
                </>
              )}

              {cases.caseStatus === "rejected" && (
                <>
                  <Badge status="error" text="已拒絕" />
                </>
              )}
            </>
          ),
          recordCaseStatus: cases.caseStatus,
          caseCreateDate:
            cases.caseCreateDate && cases.caseCreateDate.split(" ")[0],
        });
      } else {
        tempCaseId = cases.caseId;
        data[tempCaseId] = [
          {
            id: index,
            tutorMatchCaseId: cases.tutorMatchCaseId,
            engName: (
              <a
                onClick={() => {
                  tutorDetailsHandler(cases.tutorId);
                  toggleModal(index, true);
                }}
              >
                {cases.engName}
              </a>
            ),
            tutorGender: cases.tutorGender,
            currentJob: cases.currentJob,
            workExperience: cases.workExperience,
            university: cases.university,
            universityMajor: cases.universityMajor,
            currentEducationLevel: cases.currentEducationLevel,
            caseStatus: (
              <>
                {cases.caseStatus === "pending" && (
                  <>
                    <Badge status="processing" text="處理中" />
                  </>
                )}

                {cases.caseStatus === "cancel" && (
                  <>
                    <Badge status="default" text="已取消" />
                  </>
                )}
                {cases.caseStatus === "success" && (
                  <>
                    <Badge status="success" text="成功配對" />
                  </>
                )}

                {cases.caseStatus === "rejected" && (
                  <>
                    <Badge status="error" text="已拒絕" />
                  </>
                )}
              </>
            ),
            recordCaseStatus: cases.caseStatus,
            caseCreateDate:
              cases.caseCreateDate && cases.caseCreateDate.split(" ")[0],
          },
        ];
      }
    });

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
      title: "要求導師性別",
      dataIndex: "tutorRequestGender",
      key: "tutorRequestGender",
    },
    {
      title: "補習類別",
      dataIndex: "tutorCategory",
      key: "tutorCategory",
      filters: [
        {
          text: "音樂",
          value: "音樂",
        },
        {
          text: "會話",
          value: "會話",
        },
        {
          text: "補習",
          value: "補習",
        },
        {
          text: "其他",
          value: "其他",
        },
      ],
      filteredValue: filteredInfo.tutorCategory || null,
      onFilter: (value, record) => record.tutorCategory.includes(value),
      ellipsis: true,
    },
    {
      title: "補習內容",
      dataIndex: "tutorContent",
      key: "tutorContent",
    },
    {
      title: "授課方式",
      dataIndex: "tutorMethod",
      key: "tutorMethod",
      filters: [
        {
          text: "上門",
          value: "上門",
        },
        {
          text: "視像補習",
          value: "視像補習",
        },
      ],
      filteredValue: filteredInfo.tutorMethod || null,
      onFilter: (value, record) => record.tutorMethod.includes(value),
      sorter: (a, b) => a.tutorMethod.length - b.tutorMethod.length,
      sortOrder:
        sortedInfo.columnKey === "tutorMethod" ? sortedInfo.order : null,
      ellipsis: true,
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
      title: "創建日期",
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
      filters: [
        {
          text: "待配對",
          value: "new",
        },
        {
          text: "新導師配對",
          value: "newTutor",
        },
        {
          text: "等待管理員聯絡",
          value: "waitAdmin",
        },
      ],
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status === value,
      sorter: (a, b) => a.status.length - b.status.length,
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
      render: (status) => (
        <>
          {status === "new" && <Badge status="processing" text="待配對" />}
          {status === "waitAdmin" && (
            <Badge status="success" text="等待管理員聯絡" />
          )}
          {status === "newTutor" && (
            <Badge status="warning" text="新導師配對" />
          )}
        </>
      ), // Render the React element directly
    },
  ];

  let tempCaseId;
  const data = studentCaseMatching
    .map((cases, index) => {
      if (tempCaseId === cases.caseId) {
        return null;
      } else {
        tempCaseId = cases.caseId;
        return {
          key: cases.caseId,
          caseId: cases.caseId,
          createDate: cases.createDate && cases.createDate.split("T")[0],
          tutorCategory: cases.tutorCategory,
          tutorRequestGender: cases.tutorRequestGender,
          tutorContent: cases.tutorContent,
          tutorMethod: cases.tutorMethod,
          studentLevel: cases.studentLevel,
          studentLevelType: cases.studentLevelType,
          salary: (
            <>
              ${cases.minSalary} ~ ${cases.maxSalary}
            </>
          ),
          address: cases.address,
          detailsAddress: cases.detailsAddress,
          lessonPerWeek: cases.lessonPerWeek,
          lessonDuration: cases.lessonDuration,
          status: cases.status,
        };
      }
    })
    .filter((item) => item !== null);

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
          expandRowByClick: true,
        }}
        onChange={handleChange}
        className="tutor-map-student-table"
      />

      {studentCaseMatching.map((match, index) => (
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

export default StudentCaseRecordTable;
