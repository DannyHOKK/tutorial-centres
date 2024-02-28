import React from "react";

const StudentCaseFilter = () => {
  return (
    <div>
      <div>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li>補習</li>
          <li>會話</li>
          <li>音樂</li>
          <li>其他</li>
        </ul>
      </div>
      <div>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li>全科</li>
          <li>中文</li>
          <li>英文</li>
          <li>數學</li>
          <li>地理</li>
          <li>物理</li>
          <li>生物</li>
          <li>化學</li>
        </ul>
        <span> filter</span>
      </div>
    </div>
  );
};

export default StudentCaseFilter;
