import React from "react";

const PrimarySecondarySchool = () => {
  return (
    <div>
      <br />
      <div className="page-header-title">學費參考價目</div>
      <br />
      <br />
      <div>中小學學費</div>
      <table className="p-s-school-table">
        <thead>
          <tr>
            <th>學生程度</th>
            <th>中學程度</th>
            <th>大學程度</th>
            <th>大學畢業</th>
            <th>全職導師</th>
            <th>現職教師</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>幼稚園</td>
            <td>$100</td>
            <td>$120-$140</td>
            <td>$120-$140</td>
            <td>$180-$200</td>
            <td>$250</td>
          </tr>
          <tr>
            <td>小一</td>
            <td>$100-$120</td>
            <td>$130-$150</td>
            <td>$180-$200</td>
            <td>$200-$250</td>
            <td>$300-$350</td>
          </tr>
          <tr>
            <td>小二</td>
            <td>$100-$120</td>
            <td>$130-$150</td>
            <td>$180-$200</td>
            <td>$200-$250</td>
            <td>$300-$350</td>
          </tr>
          <tr>
            <td>小三</td>
            <td>$100-$120</td>
            <td>$130-$150</td>
            <td>$180-$200</td>
            <td>$200-$250</td>
            <td>$300-$350</td>
          </tr>
          <tr>
            <td>小四</td>
            <td>$120-$130</td>
            <td>$140-$160</td>
            <td>$200-$220</td>
            <td>$250-$300</td>
            <td>$350-$400</td>
          </tr>
          <tr>
            <td>小五</td>
            <td>$130-$140</td>
            <td>$140-$160</td>
            <td>$200-$220</td>
            <td>$250-$300</td>
            <td>$350-$400</td>
          </tr>
          <tr>
            <td>小六</td>
            <td>$130-$140</td>
            <td>$140-$160</td>
            <td>$200-$220</td>
            <td>$250-$300</td>
            <td>$350-$400</td>
          </tr>
          <tr>
            <td>中一</td>
            <td>$140-150</td>
            <td>$150-$170</td>
            <td>$250-$280</td>
            <td>$300-$350</td>
            <td>$400-$450</td>
          </tr>
          <tr>
            <td>中二</td>
            <td>$150-160</td>
            <td>$150-$170</td>
            <td>$250-$280</td>
            <td>$300-$350</td>
            <td>$400-$450</td>
          </tr>
          <tr>
            <td>中三</td>
            <td>$160-170</td>
            <td>$160-$170</td>
            <td>$250-$280</td>
            <td>$300-$350</td>
            <td>$400-$450</td>
          </tr>
          <tr>
            <td>中四</td>
            <td></td>
            <td>$170-$180</td>
            <td>$280-$300</td>
            <td>$350-$400</td>
            <td>$450-$600</td>
          </tr>
          <tr>
            <td>中五</td>
            <td></td>
            <td>$180-$200</td>
            <td>$280-$300</td>
            <td>$350-$400</td>
            <td>$450-$600</td>
          </tr>
          <tr>
            <td>中六</td>
            <td></td>
            <td>$200-$250</td>
            <td>$280-$300</td>
            <td>$350-$400</td>
            <td>$450-$600</td>
          </tr>
          <tr>
            <td>大專或大學</td>
            <td></td>
            <td></td>
            <td>$300-$350</td>
            <td>$500或以上</td>
            <td>$600或以上</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <br />
      <div>語言教學學費</div>
      <table className="p-s-school-table">
        <thead>
          <tr>
            <th>程度</th>
            <th>英語 普通話 </th>
            <th>日語(日籍導師)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>初階</td>
            <td>$180 - $250</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>進階</td>
            <td>$250 - $300</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>高階</td>
            <td>$300 - $350</td>
            <td>$400</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <br />
      <div>教授公開考試學費（IELTS、TOFEL、LCCI、MCSE、OCACLE等）</div>
      <table className="p-s-school-table">
        <thead>
          <tr>
            <th>程度</th>
            <th>學費幅度（每小時計）</th>
            <th>學費中位數（每小時計）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>初階</td>
            <td>$150 - $250</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>進階</td>
            <td>$150 - $300</td>
            <td>$225</td>
          </tr>
          <tr>
            <td>高階</td>
            <td>$200 - $400</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>深造級</td>
            <td>$200 - $500</td>
            <td>$300</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <br />
      <div>樂器教授（鋼琴、小提琴、結他及其他中西樂器）</div>
      <table className="p-s-school-table">
        <thead>
          <tr>
            <th>程度</th>
            <th>學費（30分鐘計）</th>
            <th>學費（45分鐘計）</th>
            <th>學費（每小時計）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>初級 - Grade 1</td>
            <td>$100</td>
            <td>$150</td>
            <td>$170</td>
          </tr>
          <tr>
            <td>Grade 2</td>
            <td>$110</td>
            <td>$160</td>
            <td>$180</td>
          </tr>
          <tr>
            <td>Grade 3</td>
            <td>$120</td>
            <td>$170</td>
            <td>$190</td>
          </tr>
          <tr>
            <td>Grade 4</td>
            <td>$125</td>
            <td>$180</td>
            <td>$210</td>
          </tr>
          <tr>
            <td>Grade 5</td>
            <td>-</td>
            <td>$200</td>
            <td>$230</td>
          </tr>
          <tr>
            <td>Grade 6</td>
            <td>-</td>
            <td>$220</td>
            <td>$250</td>
          </tr>
          <tr>
            <td>Grade 7</td>
            <td>-</td>
            <td>$240</td>
            <td>$280</td>
          </tr>
          <tr>
            <td>Grade 8</td>
            <td>-</td>
            <td>$240</td>
            <td>$320</td>
          </tr>
          <tr>
            <td>Grade 9 或演奏級</td>
            <td>-</td>
            <td>$340</td>
            <td>$380</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PrimarySecondarySchool;
