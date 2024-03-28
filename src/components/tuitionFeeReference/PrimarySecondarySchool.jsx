import { Table } from "antd";
import React from "react";
import FEETABLE from "../../staticData/tutorFeeTable.json";

const PrimarySecondarySchool = () => {
  const primarySecondaryPriceColumns = [
    {
      title: "學生程度",
      dataIndex: "學生程度",
      key: "學生程度",
    },
    {
      title: "中學程度",
      dataIndex: "中學程度",
      key: "中學程度",
    },
    {
      title: "大學程度",
      dataIndex: "大學程度",
      key: "大學程度",
    },
    {
      title: "大學畢業",
      dataIndex: "大學畢業",
      key: "大學畢業",
    },
    {
      title: "全職導師",
      dataIndex: "全職導師",
      key: "全職導師",
    },
    {
      title: "現職教師",
      dataIndex: "現職教師",
      key: "現職教師",
    },
  ];

  const languagePriceColumns = [
    {
      title: "程度",
      dataIndex: "程度",
      key: "程度",
    },
    {
      title: "英語 普通話",
      dataIndex: "英語普通話",
      key: "英語普通話",
    },
    {
      title: "日語(日籍導師)",
      dataIndex: "日語(日籍導師)",
      key: "日語(日籍導師)",
    },
  ];

  const openExamPriceColumns = [
    {
      title: "程度",
      dataIndex: "程度",
      key: "程度",
    },
    {
      title: "學費幅度（每小時計）",
      dataIndex: "學費幅度（每小時計）",
      key: "學費幅度（每小時計）",
    },
    {
      title: "學費中位數（每小時計）",
      dataIndex: "學費中位數（每小時計）",
      key: "學費中位數（每小時計）",
    },
  ];

  const musicPriceColumns = [
    {
      title: "程度",
      dataIndex: "程度",
      key: "程度",
    },
    {
      title: "學費（30分鐘計）",
      dataIndex: "學費（30分鐘計）",
      key: "學費（30分鐘計）",
    },
    {
      title: "學費（45分鐘計）",
      dataIndex: "學費（45分鐘計）",
      key: "學費（45分鐘計）",
    },
    {
      title: "學費（每小時計）",
      dataIndex: "學費（每小時計）",
      key: "學費（每小時計））",
    },
  ];

  const primarySecondaryPriceData = FEETABLE.primarySecondaryPriceData;
  const languagePriceData = FEETABLE.languagePriceData;
  const openExamPriceData = FEETABLE.openExamPriceData;
  const musicPriceData = FEETABLE.musicPriceData;
  return (
    <div>
      <br />
      <div className="page-header-title">學費參考價目</div>
      <br />
      <br />
      <div className="second-header-title">中小學學費</div>
      <Table
        dataSource={primarySecondaryPriceData}
        columns={primarySecondaryPriceColumns}
        pagination={false}
      />

      <br />

      <br />
      <div className="second-header-title">語言教學學費</div>
      <Table
        dataSource={languagePriceData}
        columns={languagePriceColumns}
        pagination={false}
      />

      <br />
      <br />
      <div className="second-header-title">
        教授公開考試學費（IELTS、TOFEL、LCCI、MCSE、OCACLE等）
      </div>
      <Table
        dataSource={openExamPriceData}
        columns={openExamPriceColumns}
        pagination={false}
      />
      <br />

      <br />
      <div className="second-header-title">
        樂器教授（鋼琴、小提琴、結他及其他中西樂器）
      </div>
      <Table
        dataSource={musicPriceData}
        columns={musicPriceColumns}
        pagination={false}
      />
      <br />
    </div>
  );
};

export default PrimarySecondarySchool;
