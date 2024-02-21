import React from "react";

const TutorFeeHeader = () => {
  return (
    <div className="tutor-fee-header">
      <div>
        會員導師與香港導師中心職員電話確定接受補習個案，其口頭承諾在法律上已具效力，會員導師應充分理解本會的收費制度，因此特設本頁清楚介紹各種準則及衡量收費的標準，如介紹補習成功，我們會收取此份補習個案的頭兩個星期補習費用作為行政費。希望會員在申請或接納個案前，務必清晰其權利、責任和義務。立即登記成為導師，過千份補習任您選。
      </div>
      <br />
      <div>
        本公司對導師的一般收費如下： 根據每星期上堂課時決定首兩星期的協議堂數。
        例如:
        每星期上2堂，每堂1小時，學費時薪：$150，介紹費用將收取共四堂費用：共$600。
      </div>
      <table>
        <thead>
          <tr>
            <th>項目說明</th>
            <th>費用(HKD)</th>
            <th>付費期限</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>登記成為導師</td>
            <td>免費</td>
            <td>----</td>
          </tr>
          <tr>
            <td>首課補習提示</td>
            <td>免費</td>
            <td>----</td>
          </tr>
          <tr>
            <td>導師取消口頭承諾確認的個案</td>
            <td>$200</td>
            <td>協議堂數最後上課日</td>
          </tr>
          <tr>
            <td>導師與家長串同欺騙行政費用</td>
            <td>原行政費用+$300</td>
            <td>確認個案終止72小時內或議定日期</td>
          </tr>
          <tr>
            <td>私下與家長/學生更動堂數並且未有即時匯報</td>
            <td>原行政費用</td>
            <td>原行政費用</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TutorFeeHeader;
