import React from "react";
import CUSTOMIZE_ICON from "../../assets/customize_icon.png";
import TRACE_ICON from "../../assets/trace_icon.png";
import CUSTOMER_SERVICE_ICON from "../../assets/customer_service_icon.png";
import PAIR_ICON from "../../assets/pair_icon.png";
import VARIOUS_ICON from "../../assets/various_icon.png";
import VERIFICATION_ICON from "../../assets/verification_icon.png";

const HomeSixPromise = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        登記 SMART TUTOR 補習平台的 "六大優勢"
      </h2>
      <div className="home-six-promise">
        <div className="home-six-promise-card">
          <div>自助網上配合平台</div>
          <div>
            <img alt="Smart Tutor Centres" src={PAIR_ICON} width="100px" />
          </div>
          <div>
            我們提供方便易用的自助網上配合平台，讓學生和家長能夠便捷地管理他們的學習進度和課程安排。
          </div>
        </div>
        <div className="home-six-promise-card">
          <div>平台認證老師</div>
          <div>
            <img
              alt="Smart Tutor Centres"
              src={VERIFICATION_ICON}
              width="100px"
            />
          </div>
          <div>
            我們擁有經驗豐富、具備學歷認證的教師團隊，他們具備專業知識和教學技巧，能夠提供高質量的教學服務。
          </div>
        </div>
        <div className="home-six-promise-card">
          <div>彈性的學習模式</div>
          <div>
            <img alt="Smart Tutor Centres" src={CUSTOMIZE_ICON} width="100px" />
          </div>
          <div>
            我們提供彈性的學習模式，包括一對一輔導、小班教學和線上學習，以滿足學生不同的學習需求和時間安排。
          </div>
        </div>
        <div className="home-six-promise-card">
          <div>全面的學科涵蓋</div>
          <div>
            <img alt="Smart Tutor Centres" src={VARIOUS_ICON} width="100px" />
          </div>
          <div>
            我們覆蓋廣泛的學科領域，包括數學、科學、語言藝術等，為學生提供全方位的學科輔導和支持。
          </div>
        </div>
        <div className="home-six-promise-card">
          <div>即時進展追蹤</div>
          <div>
            <img alt="Smart Tutor Centres" src={TRACE_ICON} width="100px" />
          </div>
          <div>
            我們通過即時進展追蹤系統，與學生和家長分享學習進度和表現，以便及時調整教學計劃和提供反饋。
          </div>
        </div>
        <div className="home-six-promise-card">
          <div>即時專業客服</div>
          <div>
            <img
              alt="Smart Tutor Centres"
              src={CUSTOMER_SERVICE_ICON}
              width="100px"
            />
          </div>
          <div>
            我們提供即時專業客服，確保學生和家長在學習過程中獲得及時的支持和解答疑問。
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSixPromise;
