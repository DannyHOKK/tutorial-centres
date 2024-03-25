import { Table } from "antd";
import React from "react";
import INSTRUCTION from "../../staticData/tutorFeeTable.json";

const TutorFeeHeader = () => {
  const columns = [
    {
      title: "項目說明",
      dataIndex: "項目說明",
      key: "項目說明",
    },
    {
      title: "費用(HKD)",
      dataIndex: "費用(HKD)",
      key: "費用(HKD)",
    },
    {
      title: "付費期限",
      dataIndex: "付費期限",
      key: "付費期限",
    },
  ];
  const instruction = INSTRUCTION.tutorInstruction;

  return (
    <div className="tutor-fee-header">
      <div>
        會員導師與Smart Tutor
        Centres職員電話確定接受補習個案，其口頭承諾在法律上已具效力，會員導師應充分理解本會的收費制度，因此特設本頁清楚介紹各種準則及衡量收費的標準，如介紹補習成功，我們會收取此份補習個案的頭兩個星期補習費用作為行政費。希望會員在申請或接納個案前，務必清晰其權利、責任和義務。立即登記成為導師，過千份補習任您選。
      </div>
      <br />
      <div>
        本公司對導師的一般收費如下： 根據每星期上堂課時決定首兩星期的協議堂數。
        例如:
        每星期上2堂，每堂1小時，學費時薪：$150，介紹費用將收取共四堂費用：共$600。
      </div>
      <br />
      <Table dataSource={instruction} columns={columns} pagination={false} />

      <br />
      <br />
      <div>
        備註：
        <br />
        {"(1)"}確認個案指Smart Tutor Centres職員與導師電話對話表明個案已確認
        {"(confirm)"}。
        <br />
        {"(2)"}任何原因是包括生病或任何意外所致失約。
        <br />
        {"(3)"}
        失責行為包括爽約、遲到、失責、提供失實履歷、更改或經常更改上課日期時間等。
        <br />
        <br />
        導師與家長之關係為服務合作關係，其間只為獨立合作聘約，並不存在僱傭關係；導師與Smart
        Tutor
        Centres亦只存在服務提供者與服務使用者之關係，雙方沒有任何僱傭關係，因此Smart
        Tutor
        Centres有權依本公司與導師所訂定之「導師條款」收取行政費用，成功登記即代表導師同意條款全部內容。而「導師條款」所訂之內容等同Smart
        Tutor Centres與導師之間所定之合約，而Smart Tutor
        Centres網站內所列出的任何規則或指示都屬於會員合約的一部份，會員亦須格守。
        <br />
        <br />
        Smart Tutor
        Centres是政府註冊公司，在此我們提醒各導師會員，網上登記與親身登記一樣，同具相同的法律約束力。提供假資料登記騙取個案等同欺騙行為，然而由於導師對法律認識不足，以為有關行為無法追究。在此，Smart
        Tutor
        Centres已把導師登記時的IP及日後每一個動作的IP紀錄下來，如有需要香港導中心會以該等資訊舉證，本公司絕不容忍導師此等違法行為，因此：切勿因為一時貪念導致前途盡毀。
      </div>
    </div>
  );
};

export default TutorFeeHeader;
