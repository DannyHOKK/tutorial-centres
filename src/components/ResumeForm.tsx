import React, { useEffect, useState } from "react";
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
import "./global.css";

const ResumeForm = ({ userInfo, setUserInfo, current, next, prev }) => {
  const [form] = Form.useForm();
  const [test, setTest] = useState(
    userInfo.hkOpenExam ? userInfo.hkOpenExam : ""
  );

  const onFinish = () => {
    // get the form data
    const values = form.getFieldsValue();

    // filter out the undefined values of form data
    const filteredData = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value !== undefined)
    );

    // input the form data by using for loop.
    Object.keys(filteredData).forEach((key) => {
      setUserInfo((prevInfo: any) => ({
        ...prevInfo,
        [key]: values[key],
      }));
    });

    // create empty array for combining the HK Open Test data into one array list.
    const emptyArray: { subject?: string; grade?: string }[] = [];

    //set Condition for input data into userInfo with type of user selected the type of HK Open Test
    //empty the array which user didn't selected
    if (form.getFieldValue("hkOpenExam") === "HKAL") {
      //combine different array of HKAL result
      const alResult = emptyArray.concat(
        values.alLang,
        values.allist,
        values.allist2,
        values.allist3
      );

      console.log(alResult);

      setUserInfo((prevInfo: any) => ({
        ...prevInfo,
        // alResult: alResult,
        dseCompulsory: [], // Reset selected values for HKDSE compulsory subjects
        dseElective: [], // Reset selected values for HKDSE elective subjects
        languages: [],
        mathematics: [],
        hss: [],
        science: [],
      }));
    } else if (form.getFieldValue("hkOpenExam") === "HKDSE") {
      const convertedDataFormat = Object.entries(
        form.getFieldValue("dseCompulsory")
      ).map(([subject, grade]) => ({
        subject,
        grade,
      }));

      console.log(convertedDataFormat);
      // const hkdseResult = emptyArray.concat(
      //   convertedDataFormat,
      //   values.hkdseElective
      // );

      setUserInfo((prevInfo: any) => ({
        ...prevInfo,
        alLang: [], // Reset selected values for AL language subjects
        allist: [], // Reset selected values for AL arts subjects
        allist2: [], // Reset selected values for AL science subjects
        allist3: [], // Reset selected values for AL commerce subjects
        languages: [],
        mathematics: [],
        hss: [],
        science: [],
      }));
    } else if (form.getFieldValue("hkOpenExam") === "IB") {
      // const ibResult = emptyArray.concat(
      //   values.languages,
      //   values.mathematics,
      //   values.hss,
      //   values.science
      // );

      setUserInfo((prevInfo: any) => ({
        ...prevInfo,
        dseCompulsory: [], // Reset selected values for HKDSE compulsory subjects
        dseElective: [], // Reset selected values for HKDSE elective subjects
        alLang: [], // Reset selected values for AL language subjects
        allist: [], // Reset selected values for AL arts subjects
        allist2: [], // Reset selected values for AL science subjects
        allist3: [], // Reset selected values for AL commerce subjects
      }));
    }

    // setUserInfo((prevIndo: any) => ({
    //   ...prevIndo,
    //   currentEducationLeve: filteredData.currentEducationLeve,
    //   currentJob: filteredData.currentJob,
    //   experience: filteredData.experience,
    //   highSchoolMajor: filteredData.highSchoolMajor,
    //   highestEducation: filteredData.highestEducation,
    //   highestTutorLevel: filteredData.highestTutorLevel,
    //   hkOpenExam: filteredData.hkOpenExam,
    //   noteProvided: filteredData.noteProvided,
    //   secondaryLang: filteredData.secondaryLang,
    //   university: filteredData.university,
    //   universityMajor: filteredData.universityMajor,
    // }));
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
      onFinish();
      next();
    } catch (error) {
      console.log("Form validation failed:", error);
    }
  };
  const ib = subjectList.IB;
  const hkdseSubject = subjectList.HKDSE;
  const hkdseCompulsory = subjectList.HKDSECompulsory;
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
  const highestEducation = inputData.highestEducation.map(
    (highEducation: any) => ({
      label: highEducation,
      value: highEducation,
    })
  );
  const currentEducationLeve = inputData.currentEducationLeve.map(
    (level: any) => ({
      label: level,
      value: level,
    })
  );
  const highSchoolMajor = inputData.highSchoolMajor;
  const hkuniversity = inputData.hkuniversity.map((uni) => ({
    label: uni,
    value: uni,
  }));

  const handleRadioChange = (value: any) => {
    form.setFieldsValue({
      dseCompulsory: "", // Reset selected values for HKDSE compulsory subjects
      dseElective: [], // Reset selected values for HKDSE elective subjects
      alLang: [], // Reset selected values for AL language subjects
      allist: [], // Reset selected values for AL arts subjects
      allist2: [], // Reset selected values for AL science subjects
      allist3: [], // Reset selected values for AL commerce subjects
      languages: [],
      mathematics: [],
      hss: [],
      science: [],
    });
    setTest(value);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      className="form-style"
      scrollToFirstError
      initialValues={userInfo}
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
          {currentJob.map((job, id) => (
            <Select.Option key={id} value={job}>
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
            message: "請選擇你的補習經驗",
          },
        ]}
      >
        <Select>
          {tutorExperience.map((exp, id) => (
            <Select.Option key={id} value={exp}>
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
          {highestTutorLevel.map((level, id) => (
            <Select.Option key={id} value={level}>
              {level}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="noteProvided"
        label="是否有筆記提供"
        rules={[
          {
            required: true,
            message: "請選擇是否有筆記提供",
          },
        ]}
      >
        <Radio.Group>
          <Radio value="yes">有</Radio>
          <Radio value="no">沒有</Radio>
        </Radio.Group>
      </Form.Item>

      <div className="register-subheader">學業履歷資料</div>

      <Form.Item
        name="secondaryLang"
        label="中學教育語言"
        rules={[{ required: true, message: "請選擇中學語言" }]}
      >
        <Radio.Group>
          <Radio value="english">英文</Radio>
          <Radio value="chinese">中文</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="highSchoolMajor"
        label="高中修讀科目類別"
        rules={[
          {
            required: true,
            message: "請選擇高中修讀科目類別",
          },
        ]}
      >
        <Select>
          {highSchoolMajor.map((major, id) => (
            <Select.Option key={id} value={major}>
              {major}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="highestEducation"
        label="最高教育程度"
        rules={[
          {
            required: true,
            message: "請選擇最高教育程度",
          },
        ]}
      >
        <Select options={highestEducation}></Select>
      </Form.Item>

      <Form.Item
        name="university"
        label="就讀大學"
        rules={[
          {
            required: true,
            message: "請選擇你所讀的大學",
          },
        ]}
      >
        <Select
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={hkuniversity}
        ></Select>
      </Form.Item>

      <Form.Item
        name="currentEducationLeve"
        label="就讀年級"
        rules={[
          {
            required: true,
            message: "請選擇就選年級",
          },
        ]}
      >
        <Select options={currentEducationLeve}></Select>
      </Form.Item>

      <Form.Item
        name="universityMajor"
        label="大學主修科目"
        rules={[
          {
            required: true,
            message: "請輸修你所讀的大學主修科目",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <div className="register-subheader">公開試成績</div>
      <Form.Item
        name="hkOpenExam"
        label="香港文憑試"
        rules={[
          {
            required: true,
            message: "請選擇你所考的香港文憑試",
          },
        ]}
      >
        <Radio.Group
          onChange={(e) => {
            handleRadioChange(e.target.value);
          }}
        >
          <Radio value="HKDSE">HKDSE</Radio>
          <Radio value="HKAL">HKAL</Radio>
          <Radio value="IB">IB</Radio>
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
              <Form.List name="dseCompulsory">
                {(compulsoryFields) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 16,
                    }}
                  >
                    {hkdseCompulsory.map((compulsory, id) => (
                      <Space key={id}>
                        <Form.Item noStyle>
                          <Select
                            style={{ width: "200px" }}
                            value={compulsory}
                          ></Select>
                        </Form.Item>
                        <Form.Item
                          noStyle
                          name={compulsory}
                          rules={[
                            { required: true, message: "請填上必修課目等級" },
                          ]}
                        >
                          <Select
                            placeholder="請選擇"
                            style={{ width: "120px" }}
                            options={dseGrading}
                          ></Select>
                        </Form.Item>
                      </Space>
                    ))}
                  </div>
                )}
              </Form.List>
            </Form.Item>

            <Form.Item
              label="選修科目"
              labelCol={{ span: 8, offset: 0 }}
              wrapperCol={{ span: 15, offset: 0 }}
              style={{ maxWidth: 600 }}
            >
              <Form.List name="dseElective" {...formItemLayout}>
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
                        <Form.Item
                          noStyle
                          name={[subField.name, "subject"]}
                          rules={[
                            { required: true, message: "請填上選修課目" },
                          ]}
                        >
                          <Select
                            placeholder="請選擇科目"
                            style={{ width: "200px" }}
                          >
                            {hkdseSubject.map((major, id) => (
                              <Select.Option key={id} value={major}>
                                {major}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                        <Form.Item
                          noStyle
                          name={[subField.name, "grade"]}
                          rules={[
                            { required: true, message: "請填上選修課目" },
                          ]}
                        >
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
                    <Button
                      type="dashed"
                      block
                      onClick={() => {
                        subOpt.add();
                      }}
                    >
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
                        <Form.Item noStyle name={[subField.name, "subject"]}>
                          <Select
                            placeholder="請選擇科目"
                            style={{ width: "200px" }}
                            options={alSubject}
                          ></Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "grade"]}>
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
                        <Form.Item noStyle name={[subField.name, "subject"]}>
                          <Select
                            placeholder="請選擇科目"
                            options={alSubject2}
                            style={{ width: "200px" }}
                          ></Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "grade"]}>
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
                        <Form.Item noStyle name={[subField.name, "subject"]}>
                          <Select
                            placeholder="請選擇科目"
                            options={alSubject3}
                            style={{ width: "200px" }}
                          ></Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "grade"]}>
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
                        <Form.Item noStyle name={[subField.name, "subject"]}>
                          <Select
                            placeholder="請選擇科目"
                            options={alSubject4}
                            style={{ width: "200px" }}
                          ></Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "grade"]}>
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
            {ib.map((ibType, typeId) => (
              <Form.Item
                key={typeId}
                label={ibType.type.category}
                labelCol={{ span: 12, offset: 0 }}
                wrapperCol={{ span: 20, offset: 0 }}
                style={{
                  maxWidth: 600,
                  marginBottom: "50px",
                  marginTop: "30px",
                }}
              >
                <Form.List name={ibType.type.name} {...formItemLayout}>
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
                          <Form.Item noStyle name={[subField.name, "subject"]}>
                            <Select
                              style={{ minWidth: "260px" }}
                              placeholder="Please Select"
                            >
                              {ibType.subject.map((subject, id) => (
                                <Select.Option key={id} value={subject}>
                                  {subject}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                          <Form.Item noStyle name={[subField.name, "grade"]}>
                            <Select
                              placeholder="Please Select"
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

      <Form.Item {...tailFormItemLayout} className="form-button">
        <Button
          style={{
            margin: "0 8px",
          }}
          onClick={() => prev()}
        >
          上一頁
        </Button>
        <Button
          type="primary"
          htmlType="button" // Change the type to "button"
          onClick={handleSubmit} // Call the handleSubmit function
        >
          繼續
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResumeForm;
