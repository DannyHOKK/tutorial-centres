import { Button, Cascader, Divider, Form, Input, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import inputData from "../../staticData/inputData.json";
import { useDispatch, useSelector } from "react-redux";
import { modifyStudentDetails } from "../../redux/student/studentAction";

const options = inputData.location.map((location) => ({
  value: location.region,
  label: location.region,
  children: location.area.map((area) => ({
    value: area,
    label: area,
  })),
}));

const dropdownRender = (menus) => (
  <div>
    {menus}
    <Divider style={{ margin: "0 160px" }} />
  </div>
);

const StudentInfoEdit = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const studentDetails = location.state?.studentDetails;
  //   const [studentInfo, setStudentInfo] = useState({});
  const studentInfo = {
    ...studentDetails,
    address: studentDetails?.address?.split("/"),
  };
  const { modifyError, modifySuccess, modifyLoading } = useSelector(
    (state) => state.studentInfo
  );

  useEffect(() => {
    if (!studentDetails) {
      navigate("/studentMatching");
    }
  }, [studentDetails]);

  const editConfirmHandler = async () => {
    try {
      await form.validateFields();
      onFinish();
      // }
    } catch (error) {
      console.log("Form validation failed:", error);
    }
  };

  const onFinish = async () => {
    const values = form.getFieldsValue();
    const updateStudentInfo = { ...values, address: values.address.join("/") };
    dispatch(modifyStudentDetails(updateStudentInfo));
    console.log(updateStudentInfo);
    if (modifySuccess === true) {
      navigate("/studentMatching");
    }
  };

  return (
    <div className="page-container page-xs">
      <div className="second-header-title">編輯個人資料</div>
      <div className="user-info-card">
        <Form
          autoComplete="off"
          form={form}
          name="editStudentDetails"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 14,
          }}
          scrollToFirstError
          initialValues={studentInfo}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px 0",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            學生編號：{studentInfo.id}
          </div>
          <Form.Item name="email" label="電郵">
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="engName"
            label="英文名稱"
            rules={[
              {
                required: true,
                message: "請輸入你的英文名稱",
                whitespace: true,
              },
              {
                pattern: /^[a-zA-Z\s]+$/,

                message: "請輸入英文",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="chineseName"
            label="中文名稱"
            rules={[
              {
                required: true,
                message: "請輸入你的中文名稱",
                whitespace: true,
              },
              {
                pattern: /^[\u4E00-\u9FFF\s]+$/,
                message: "請輸入中文",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="手提電話">
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="gender"
            label="性別"
            rules={[{ required: true, message: "請選擇你的性別" }]}
          >
            <Radio.Group>
              <Radio value="男">男</Radio>
              <Radio value="女">女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="address"
            label="住宅地區"
            rules={[
              {
                required: true,
                message: "請選擇你的地區",
              },
            ]}
          >
            <Cascader
              options={options}
              // onChange={onSelectChange}
              placeholder="請選擇地區"
              // showSearch={{ filter }}
              dropdownRender={dropdownRender}
            />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={modifyLoading}
              onClick={editConfirmHandler}
            >
              確認更改
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default StudentInfoEdit;
