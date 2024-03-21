import { Badge, Button, Table, notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelMatchingTutor } from "../../redux/student/studentAction";
import TutorCardsPopUp from "../tutorList/TutorCardsPopUp";
import { getTutor } from "../../redux/tutor/tutorAction";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
const StudentMatchingTable = ({ studentMatching }) => {
  const dispatch = useDispatch();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(() =>
    studentMatching.map((cases) => false)
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

  const tutorDetailsHandler = (tutorId) => {
    dispatch(getTutor(tutorId));
  };

  const studentCancelMatchingHandler = (caseId) => {
    dispatch(cancelMatchingTutor(caseId));
    window.location.reload();
  };

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "導師姓名",
      dataIndex: "engName",
      key: "engName",
    },
    {
      title: "申請等級",
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
      title: "配對日期",
      dataIndex: "createDate",
      key: "createDate",
    },
    {
      title: "申請時薪",
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
      filters: [
        {
          text: "處理中",
          value: "pending",
        },
        {
          text: "已取消",
          value: "cancel",
        },
        {
          text: "被拒絕",
          value: "rejected",
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
          {console.log(status)}
          {status === "pending" && <Badge status="processing" text="處理中" />}

          {status === "cancel" && <Badge status="default" text="已取消" />}
          {status === "waitAdmin" && (
            <Badge status="success" text="等待管理員聯絡" />
          )}

          {status === "rejected" && <Badge status="error" text="被拒絕" />}
        </>
      ),
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
                onClick={() => studentCancelMatchingHandler(record.recordId)}
              >
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
    engName: (
      <a
        onClick={() => {
          tutorDetailsHandler(match.tutorUser.id);
          toggleModal(index, true);
        }}
      >
        {match.tutorUser.engName}
      </a>
    ),
    studentLevelType: match.studentLevelType,
    studentLevel: match.studentLevel,
    tutorMethod: match.tutorMethod,
    tutorContent: match.tutorContent && match.tutorContent.replaceAll(",", " "),
    studentGender: match.studentUser.gender,
    createDate: match.createDate && match.createDate.split("T")[0],
    salary: <>${match.salary}</>,
    address: match.address,
    status: match.status,
    recordStatus: match.status,
    recordId: match.id,
  }));

  return (
    <div className="tutor-map-student-table">
      <Table
        columns={columns}
        dataSource={data}
        // style={{ minWidth: "1000px" }}
        onChange={handleChange}
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

export default StudentMatchingTable;
