import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Card,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Space,
} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./registerForm.css";
import subjectList from "../staticData/subjectList.json";
import inputData from "../staticData/inputData.json";

const ResumeForm = ({ next, prev }) => {
  const [form] = Form.useForm();
  const [test, setTest] = useState("");
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 24,
        offset: 0,
      },
    },
  };

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      next();
    } catch (error) {
      console.log("Form validation failed:", error);
    }
  };
  const ib = subjectList.IB;
  const hkdseSubject = subjectList.HKDSE;
  const dseGrading = subjectList.HKDSEGrading;
  const alGrading = subjectList.HKALGrading;
  const ibGrading = subjectList.IBGrading;
  const alSubject = subjectList.HKAL[0].subject;
  const alSubject2 = subjectList.HKAL[1].subject;
  const alSubject3 = subjectList.HKAL[2].subject;
  const alSubject4 = subjectList.HKAL[3].subject;

  const currentJob = inputData.currentJob;
  const tutorExperience = inputData.tutorExperience;
  const highestTutorLevel = inputData.highestTutorLevel;
  const highestEducation = inputData.highestEducation;
  const highSchoolMajor = inputData.highSchoolMajor;
  const hkuniversity = inputData.hkuniversity;

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "86",
      }}
      style={{
        maxWidth: 800,
        margin: "auto",
      }}
      scrollToFirstError
    >
      <div className="register-subheader">職業履歷資料</div>

      <Form.Item
        name="currentJob"
        label="現時職業"
        rules={[
          {
            required: true,
            message: "請選擇你的職業",
          },
        ]}
      >
        <Select>
          {currentJob.map((job) => (
            <Select.Option key={job.id} value={job}>
              {job}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="experience"
        label="補習經驗"
        rules={[
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Select>
          {tutorExperience.map((exp) => (
            <Select.Option key={exp.id} value={exp}>
              {exp}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="highestTutorLevel"
        label="最高可補年級"
        rules={[
          {
            required: true,
            message: "請選擇最高可補年級",
          },
        ]}
      >
        <Select>
          {highestTutorLevel.map((level) => (
            <Select.Option key={level.id} value={level}>
              {level}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="noteProvided" label="是否有筆記提供">
        <Row>
          <Radio.Group>
            <Radio value="yes">有</Radio>
            <Radio value="no">沒有</Radio>
          </Radio.Group>
        </Row>
      </Form.Item>

      <div className="register-subheader">學業履歷資料</div>
      <Form.Item
        name="highestEducation"
        label="最高教育程度"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
          },
        ]}
      >
        <Select>
          {highestEducation.map((education) => (
            <Select.Option key={education.id} value={education}>
              {education}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="secondaryLang" label="中學語言">
        <Row>
          <Radio.Group>
            <Radio value="english">英文</Radio>
            <Radio value="chinese">中文</Radio>
          </Radio.Group>
        </Row>
      </Form.Item>

      <Form.Item
        name="highSchoolMajor"
        label="高中修讀科目類別"
        rules={[
          {
            message: "Please input your nickname!",
          },
        ]}
      >
        <Select>
          {highSchoolMajor.map((major) => (
            <Select.Option key={major.key} value={major}>
              {major}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="university"
        label="就讀大學"
        rules={[
          {
            message: "Please input your nickname!",
          },
        ]}
      >
        <Select>
          {hkuniversity.map((uni) => (
            <Select.Option key={uni.id} value={uni}>
              {uni}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="universityMajor"
        label="大學主修科目"
        rules={[
          {
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <div className="register-subheader">公開試成績</div>
      <Form.Item
        name="dse"
        label="香港文憑試"
        rules={[
          {
            required: "true",
            message: "Please input your nickname!",
          },
        ]}
      >
        <Radio.Group>
          <Radio
            value="hkdse"
            onClick={() => {
              setTest("HKDSE");
            }}
          >
            HKDSE
          </Radio>
          <Radio
            value="hkal"
            onClick={() => {
              setTest("HKAL");
            }}
          >
            HKAL
          </Radio>
          <Radio
            value="ib"
            onClick={() => {
              setTest("IB");
            }}
          >
            IB
          </Radio>
        </Radio.Group>
      </Form.Item>

      {test === "HKDSE" && (
        <Form.Item wrapperCol={{ span: 24 }}>
          <Card size="small" title="香港中學文憑試成績 (HKDSE)">
            <Form.Item
              label="必修科目"
              labelCol={{ span: 8, offset: 0 }}
              wrapperCol={{ span: 10, offset: 0 }}
              style={{ maxWidth: 600, marginBottom: "50px", marginTop: "30px" }}
            >
              <Space.Compact style={{ marginBottom: "20px" }}>
                <Select style={{ width: "200px" }} defaultValue="中國語文">
                  <Select.Option value="中國語文">中國語文</Select.Option>
                </Select>
                <Select
                  placeholder="請選擇"
                  style={{ width: "120px" }}
                  options={dseGrading}
                ></Select>
              </Space.Compact>
              <Space.Compact style={{ marginBottom: "20px" }}>
                <Select style={{ width: "200px" }} defaultValue="英國語文">
                  <Select.Option value="英國語文">英國語文</Select.Option>
                </Select>
                <Select
                  placeholder="請選擇"
                  style={{ width: "120px" }}
                  options={dseGrading}
                ></Select>
              </Space.Compact>
              <Space.Compact style={{ marginBottom: "20px" }}>
                <Select style={{ width: "200px" }} defaultValue="數學">
                  <Select.Option value="數學">數學</Select.Option>
                </Select>
                <Select
                  placeholder="請選擇"
                  style={{ width: "120px" }}
                  options={dseGrading}
                ></Select>
              </Space.Compact>
              <Space.Compact style={{ marginBottom: "20px" }}>
                <Select style={{ width: "200px" }} defaultValue="通識">
                  <Select.Option value="通識">通識</Select.Option>
                </Select>
                <Select
                  placeholder="請選擇"
                  style={{ width: "120px" }}
                  options={dseGrading}
                ></Select>
              </Space.Compact>
            </Form.Item>

            <Form.Item
              label="選修科目"
              labelCol={{ span: 8, offset: 0 }}
              wrapperCol={{ span: 15, offset: 0 }}
              style={{ maxWidth: 600 }}
            >
              <Form.List name="dselist" {...formItemLayout}>
                {(subFields, subOpt) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 16,
                    }}
                  >
                    {subFields.map((subField) => (
                      <Space key={subField.key}>
                        <Form.Item noStyle name={[subField.name, "first"]}>
                          <Select
                            defaultValue="請選擇科目"
                            style={{ width: "200px" }}
                          >
                            {hkdseSubject.map((major) => (
                              <Select.Option key={major.id} value={major}>
                                {major}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "second"]}>
                          <Select
                            placeholder="請選擇"
                            style={{ width: "120px" }}
                            options={dseGrading}
                          ></Select>
                        </Form.Item>
                        <CloseOutlined
                          onClick={() => {
                            subOpt.remove(subField.name);
                          }}
                        />
                      </Space>
                    ))}
                    <Button type="dashed" onClick={() => subOpt.add()} block>
                      增加選修科目
                    </Button>
                  </div>
                )}
              </Form.List>
            </Form.Item>
          </Card>
        </Form.Item>
      )}

      {test === "HKAL" && (
        <Form.Item wrapperCol={{ span: 24 }}>
          <Card size="small" title="香港高級程度會考成績 (HKALE)">
            <Form.Item
              label="語文科目"
              labelCol={{ span: 8, offset: 0 }}
              wrapperCol={{ span: 15, offset: 0 }}
              style={{ maxWidth: 600, marginBottom: "50px", marginTop: "30px" }}
            >
              <Form.List name="alLang" {...formItemLayout}>
                {(subFields, subOpt) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 16,
                    }}
                  >
                    {subFields.map((subField) => (
                      <Space key={subField.key}>
                        <Form.Item noStyle name={[subField.name, "first"]}>
                          <Select
                            defaultValue="請選擇科目"
                            style={{ width: "200px" }}
                            options={alSubject}
                          ></Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "second"]}>
                          <Select
                            placeholder="請選擇"
                            style={{ width: "120px" }}
                            options={alGrading}
                          ></Select>
                        </Form.Item>
                        <CloseOutlined
                          onClick={() => {
                            subOpt.remove(subField.name);
                          }}
                        />
                      </Space>
                    ))}
                    <Button type="dashed" onClick={() => subOpt.add()} block>
                      增加選修科目
                    </Button>
                  </div>
                )}
              </Form.List>
            </Form.Item>
            <Form.Item
              label="文科科目"
              labelCol={{ span: 8, offset: 0 }}
              wrapperCol={{ span: 15, offset: 0 }}
              style={{ maxWidth: 600, marginBottom: "50px" }}
            >
              <Form.List name="allist" {...formItemLayout}>
                {(subFields, subOpt) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 16,
                    }}
                  >
                    {subFields.map((subField) => (
                      <Space key={subField.key}>
                        <Form.Item noStyle name={[subField.name, "first"]}>
                          <Select
                            defaultValue="請選擇科目"
                            options={alSubject2}
                            style={{ width: "200px" }}
                          ></Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "second"]}>
                          <Select
                            placeholder="請選擇"
                            style={{ width: "120px" }}
                            options={alGrading}
                          ></Select>
                        </Form.Item>
                        <CloseOutlined
                          onClick={() => {
                            subOpt.remove(subField.name);
                          }}
                        />
                      </Space>
                    ))}
                    <Button type="dashed" onClick={() => subOpt.add()} block>
                      增加選修科目
                    </Button>
                  </div>
                )}
              </Form.List>
            </Form.Item>

            <Form.Item
              label="理科科目"
              labelCol={{ span: 8, offset: 0 }}
              wrapperCol={{ span: 15, offset: 0 }}
              style={{ maxWidth: 600, marginBottom: "50px" }}
            >
              <Form.List name="allist2" {...formItemLayout}>
                {(subFields, subOpt) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 16,
                    }}
                  >
                    {subFields.map((subField) => (
                      <Space key={subField.key}>
                        <Form.Item noStyle name={[subField.name, "first"]}>
                          <Select
                            defaultValue="請選擇科目"
                            options={alSubject3}
                            style={{ width: "200px" }}
                          ></Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "second"]}>
                          <Select
                            placeholder="請選擇"
                            style={{ width: "120px" }}
                            options={alGrading}
                          ></Select>
                        </Form.Item>
                        <CloseOutlined
                          onClick={() => {
                            subOpt.remove(subField.name);
                          }}
                        />
                      </Space>
                    ))}
                    <Button type="dashed" onClick={() => subOpt.add()} block>
                      增加選修科目
                    </Button>
                  </div>
                )}
              </Form.List>
            </Form.Item>

            <Form.Item
              label="商科科目"
              labelCol={{ span: 8, offset: 0 }}
              wrapperCol={{ span: 15, offset: 0 }}
              style={{ maxWidth: 600, marginBottom: "50px" }}
            >
              <Form.List name="allist3" {...formItemLayout}>
                {(subFields, subOpt) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 16,
                    }}
                  >
                    {subFields.map((subField) => (
                      <Space key={subField.key}>
                        <Form.Item noStyle name={[subField.name, "first"]}>
                          <Select
                            defaultValue="請選擇科目"
                            options={alSubject4}
                            style={{ width: "200px" }}
                          ></Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "second"]}>
                          <Select
                            placeholder="請選擇"
                            style={{ width: "120px" }}
                            options={alGrading}
                          ></Select>
                        </Form.Item>
                        <CloseOutlined
                          onClick={() => {
                            subOpt.remove(subField.name);
                          }}
                        />
                      </Space>
                    ))}
                    <Button type="dashed" onClick={() => subOpt.add()} block>
                      增加選修科目
                    </Button>
                  </div>
                )}
              </Form.List>
            </Form.Item>
          </Card>
        </Form.Item>
      )}

      {test === "IB" && (
        <Form.Item wrapperCol={{ span: 24 }}>
          <Card size="small" title="International Baccalaureate">
            {ib.map((ibType) => (
              <Form.Item
                label={ibType.type}
                labelCol={{ span: 12, offset: 0 }}
                wrapperCol={{ span: 20, offset: 0 }}
                style={{
                  maxWidth: 600,
                  marginBottom: "50px",
                  marginTop: "30px",
                }}
              >
                <Form.List name={ibType.type} {...formItemLayout}>
                  {(subFields, subOpt) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 16,
                      }}
                    >
                      {subFields.map((subField) => (
                        <Space key={subField.key}>
                          <Form.Item noStyle name={[subField.name, "first"]}>
                            <Select style={{ minWidth: "260px" }}>
                              {ibType.subject.map((subject) => (
                                <Select.Option key={subject.id} value={subject}>
                                  {subject}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                          <Form.Item noStyle name={[subField.name, "second"]}>
                            <Select
                              placeholder="請選擇"
                              style={{ minWidth: "120px" }}
                              options={ibGrading}
                            ></Select>
                          </Form.Item>
                          <CloseOutlined
                            onClick={() => {
                              subOpt.remove(subField.name);
                            }}
                          />
                        </Space>
                      ))}
                      <Button type="dashed" onClick={() => subOpt.add()} block>
                        Add Subject
                      </Button>
                    </div>
                  )}
                </Form.List>
              </Form.Item>
            ))}
          </Card>
        </Form.Item>
      )}

      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          htmlType="button" // Change the type to "button"
          onClick={handleSubmit} // Call the handleSubmit function
        >
          Next
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResumeForm;
