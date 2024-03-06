import React, { useState } from "react";

const StudentCaseFilter = ({ setQueryData }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [activeItemTwo, setActiveItemTwo] = useState(0);
  const [activeItemThree, setActiveItemThree] = useState(0);
  const [activeItemFour, setActiveItemFour] = useState(0);
  const [activeItemFive, setActiveItemFive] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  const handleItemTwoClick = (index) => {
    setActiveItemTwo(index);
    console.log(activeItem);
  };
  const handleItemThreeClick = (index) => {
    setActiveItemThree(index);
    console.log(activeItem);
  };
  const handleItemFourClick = (index) => {
    setActiveItemFour(index);
    console.log(activeItem);
  };
  const handleItemFiveClick = (index) => {
    setActiveItemFive(index);
    console.log(activeItem);
  };

  return (
    <div className="student-case-filter">
      <div>
        <ul>
          <li
            className={activeItem === 0 ? "active" : ""}
            onClick={() => {
              handleItemClick(0);
              setActiveItemTwo(0);
              setQueryData((prev) => ({
                ...prev,
                tutorCategory: "",
                tutorContent: [],
              }));
            }}
            set
          >
            全部
          </li>
          <li
            className={activeItem === 1 ? "active" : ""}
            onClick={() => {
              handleItemClick(1);
              setActiveItemTwo(0);
              setQueryData((prev) => ({
                ...prev,
                tutorCategory: "補習",
              }));
            }}
            set
          >
            補習
          </li>
          <li
            className={activeItem === 2 ? "active" : ""}
            onClick={() => {
              handleItemClick(2);
              setActiveItemThree(0);
              setQueryData((prev) => ({
                ...prev,
                tutorCategory: "會話",
              }));
            }}
          >
            會話
          </li>
          <li
            className={activeItem === 3 ? "active" : ""}
            onClick={() => {
              handleItemClick(3);
              setActiveItemFour(0);
              setQueryData((prev) => ({
                ...prev,
                tutorCategory: "音樂",
              }));
            }}
          >
            音樂
          </li>
          <li
            className={activeItem === 4 ? "active" : ""}
            onClick={() => {
              handleItemClick(4);
              setActiveItemFive(0);
              setQueryData((prev) => ({
                ...prev,
                tutorCategory: "其他",
              }));
            }}
          >
            其他
          </li>
        </ul>
      </div>
      {activeItem === 1 && (
        <div>
          <ul>
            <li
              className={activeItemTwo === 0 ? "active" : ""}
              onClick={() => {
                handleItemTwoClick(0);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: [],
                }));
              }}
            >
              全科
            </li>
            <li
              className={activeItemTwo === 1 ? "active" : ""}
              onClick={() => {
                handleItemTwoClick(1);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["中文"],
                }));
              }}
            >
              中文
            </li>
            <li
              className={activeItemTwo === 2 ? "active" : ""}
              onClick={() => {
                handleItemTwoClick(2);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["英文"],
                }));
              }}
            >
              英文
            </li>
            <li
              className={activeItemTwo === 3 ? "active" : ""}
              onClick={() => {
                handleItemTwoClick(3);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["數學"],
                }));
              }}
            >
              數學
            </li>
            <li
              className={activeItemTwo === 4 ? "active" : ""}
              onClick={() => {
                handleItemTwoClick(4);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["地理"],
                }));
              }}
            >
              地理
            </li>
            <li
              className={activeItemTwo === 5 ? "active" : ""}
              onClick={() => {
                handleItemTwoClick(5);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["物理"],
                }));
              }}
            >
              物理
            </li>
            <li
              className={activeItemTwo === 6 ? "active" : ""}
              onClick={() => {
                handleItemTwoClick(6);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["生物"],
                }));
              }}
            >
              生物
            </li>
            <li
              className={activeItemTwo === 7 ? "active" : ""}
              onClick={() => {
                handleItemTwoClick(7);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["化學"],
                }));
              }}
            >
              化學
            </li>
          </ul>
        </div>
      )}
      {activeItem === 2 && (
        <div>
          <ul>
            <li
              className={activeItemThree === 0 ? "active" : ""}
              onClick={() => {
                handleItemThreeClick(0);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: [""],
                }));
              }}
            >
              全部
            </li>
            <li
              className={activeItemThree === 6 ? "active" : ""}
              onClick={() => {
                handleItemThreeClick(6);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["英文拼音"],
                }));
              }}
            >
              英文拼音
            </li>
            <li
              className={activeItemThree === 1 ? "active" : ""}
              onClick={() => {
                handleItemThreeClick(1);

                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["日語"],
                }));
              }}
            >
              日語
            </li>
            <li
              className={activeItemThree === 2 ? "active" : ""}
              onClick={() => {
                handleItemThreeClick(2);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["韓語"],
                }));
              }}
            >
              韓語
            </li>
            <li
              className={activeItemThree === 3 ? "active" : ""}
              onClick={() => {
                handleItemThreeClick(3);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["英語會話"],
                }));
              }}
            >
              英語會話
            </li>
            <li
              className={activeItemThree === 4 ? "active" : ""}
              onClick={() => {
                handleItemThreeClick(4);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["普通話"],
                }));
              }}
            >
              普通話
            </li>
            <li
              className={activeItemThree === 5 ? "active" : ""}
              onClick={() => {
                handleItemThreeClick(5);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["法語"],
                }));
              }}
            >
              法語
            </li>
          </ul>
        </div>
      )}

      {activeItem === 3 && (
        <div>
          <ul>
            <li
              className={activeItemFour === 0 ? "active" : ""}
              onClick={() => {
                handleItemFourClick(0);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: [""],
                }));
              }}
            >
              全部
            </li>
            <li
              className={activeItemFour === 5 ? "active" : ""}
              onClick={() => {
                handleItemFourClick(5);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["鋼琴"],
                }));
              }}
            >
              鋼琴
            </li>
            <li
              className={activeItemFour === 1 ? "active" : ""}
              onClick={() => {
                handleItemFourClick(1);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["結他"],
                }));
              }}
            >
              結他
            </li>
            <li
              className={activeItemFour === 2 ? "active" : ""}
              onClick={() => {
                handleItemFourClick(2);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["色士風"],
                }));
              }}
            >
              色士風
            </li>
            <li
              className={activeItemFour === 3 ? "active" : ""}
              onClick={() => {
                handleItemFourClick(3);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["小提琴"],
                }));
              }}
            >
              小提琴
            </li>
            <li
              className={activeItemFour === 4 ? "active" : ""}
              onClick={() => {
                handleItemFourClick(4);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["樂理"],
                }));
              }}
            >
              樂理
            </li>
          </ul>
        </div>
      )}
      {activeItem === 4 && (
        <div>
          <ul>
            <li
              className={activeItemFive === 0 ? "active" : ""}
              onClick={() => {
                handleItemFiveClick(0);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: [""],
                }));
              }}
            >
              全部
            </li>
            <li
              className={activeItemFive === 4 ? "active" : ""}
              onClick={() => {
                handleItemFiveClick(4);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["游水"],
                }));
              }}
            >
              游水
            </li>
            <li
              className={activeItemFive === 1 ? "active" : ""}
              onClick={() => {
                handleItemFiveClick(1);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["電腦"],
                }));
              }}
            >
              電腦
            </li>
            <li
              className={activeItemFive === 2 ? "active" : ""}
              onClick={() => {
                handleItemFiveClick(2);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["繪畫"],
                }));
              }}
            >
              繪畫
            </li>
            <li
              className={activeItemFive === 3 ? "active" : ""}
              onClick={() => {
                handleItemFiveClick(3);
                setQueryData((prev) => ({
                  ...prev,
                  tutorContent: ["珠心算"],
                }));
              }}
            >
              珠心算
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentCaseFilter;
