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

  const dseGrading = [
    {
      value: 7,
      label: "5**",
    },
    {
      value: 6,
      label: "5*",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 1,
      label: "1",
    },
  ];

  const alGrading = [
    {
      value: 6,
      label: "A*",
    },
    {
      value: 5,
      label: "A",
    },
    {
      value: 4,
      label: "B",
    },
    {
      value: 3,
      label: "C",
    },
    {
      value: 2,
      label: "D",
    },
    {
      value: 1,
      label: "E",
    },
  ];

  const ibGrading = [
    {
      value: 7,
      label: "H7",
    },
    {
      value: 6,
      label: "H6",
    },
    {
      value: 5,
      label: "H5",
    },
    {
      value: 4,
      label: "H4",
    },
    {
      value: 3,
      label: "H3",
    },
    {
      value: 2,
      label: "H2",
    },
    {
      value: 1,
      label: "H1",
    },
  ];

  const alSubject2 = [
    {
      value: "中國文學",
      label: "中國文學",
    },
    {
      value: "英國文學",
      label: "英國文學",
    },
    {
      value: "中國歷史",
      label: "中國歷史",
    },
    {
      value: "世界歷史",
      label: "世界歷史",
    },
    {
      value: "地理",
      label: "地理",
    },
    {
      value: "音樂",
      label: "音樂",
    },
  ];

  const alSubject3 = [
    {
      value: "純粹數學",
      label: "純粹數學",
    },
    {
      value: "應用數學",
      label: "應用數學",
    },
    {
      value: "物理",
      label: "物理",
    },
    {
      value: "生物",
      label: "生物",
    },
    {
      value: "化學",
      label: "化學",
    },
  ];
  const alSubject4 = [
    {
      value: "企業概論",
      label: "企業概論",
    },
    {
      value: "會計學原理",
      label: "會計學原理",
    },
    {
      value: "經濟",
      label: "經濟",
    },
    {
      value: "電腦應用",
      label: "電腦應用",
    },
    {
      value: "政府及公共事務",
      label: "政府及公共事務",
    },
    {
      value: "數學及統計學",
      label: "數學及統計學",
    },
    {
      value: "心理學",
      label: "心理學",
    },
  ];

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
        maxWidth: 600,
        margin: "auto",
      }}
      scrollToFirstError
    >
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
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="highestTutorLevel" label="最高可補年級">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
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

      <Form.Item
        name="highestEduction"
        label="最高教育程度"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
          },
        ]}
      >
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
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
        name="highSchoolSubject"
        label="高中修讀科目類別"
        rules={[
          {
            message: "Please input your nickname!",
          },
        ]}
      >
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
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
          <Select.Option value="demo">Demo</Select.Option>
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
              labelCol={{ span: 6, offset: 0 }}
              wrapperCol={{ span: 10, offset: 0 }}
              style={{ maxWidth: 600 }}
            >
              <Space.Compact style={{ marginBottom: "20px" }}>
                <Select style={{ width: "100px" }} defaultValue="中國語文">
                  <Select.Option value="中國語文">中國語文</Select.Option>
                </Select>
                <Select
                  placeholder="請選擇"
                  style={{ width: "120px" }}
                  options={dseGrading}
                ></Select>
              </Space.Compact>
              <Space.Compact style={{ marginBottom: "20px" }}>
                <Select style={{ width: "100px" }} defaultValue="英國語文">
                  <Select.Option value="英國語文">英國語文</Select.Option>
                </Select>
                <Select
                  placeholder="請選擇"
                  style={{ width: "120px" }}
                  options={dseGrading}
                ></Select>
              </Space.Compact>
              <Space.Compact style={{ marginBottom: "20px" }}>
                <Select style={{ width: "100px" }} defaultValue="數學">
                  <Select.Option value="數學">數學</Select.Option>
                </Select>
                <Select
                  placeholder="請選擇"
                  style={{ width: "120px" }}
                  options={dseGrading}
                ></Select>
              </Space.Compact>
              <Space.Compact style={{ marginBottom: "20px" }}>
                <Select style={{ width: "100px" }} defaultValue="通識">
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
              labelCol={{ span: 6, offset: 0 }}
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
                          <Select defaultValue="請選擇科目">
                            <Select.Option value="通識">通識</Select.Option>
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
              labelCol={{ span: 6, offset: 0 }}
              wrapperCol={{ span: 15, offset: 0 }}
              style={{ maxWidth: 600, marginBottom: "50px" , marginTop: "30px"}}
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
                            style={{ width: "140px" }}
                          >
                            <Select.Option value="中國語文">
                              中國語文
                            </Select.Option>
                            <Select.Option value="英國語文">
                              英國語文
                            </Select.Option>
                            <Select.Option value="通識教育">
                              通識教育
                            </Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "second"]}>
                          <Select
                            placeholder="請選擇"
                            style={{ width: "140px" }}
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
              labelCol={{ span: 6, offset: 0 }}
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
                            style={{ width: "140px" }}
                          ></Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "second"]}>
                          <Select
                            placeholder="請選擇"
                            style={{ width: "140px" }}
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
              labelCol={{ span: 6, offset: 0 }}
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
                            style={{ width: "140px" }}
                          ></Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "second"]}>
                          <Select
                            placeholder="請選擇"
                            style={{ width: "140px" }}
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
              labelCol={{ span: 6, offset: 0 }}
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
                            style={{ width: "140px" }}
                          ></Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "second"]}>
                          <Select
                            placeholder="請選擇"
                            style={{ width: "140px" }}
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
            <Form.Item
              label="語文科目"
              labelCol={{ span: 6, offset: 0 }}
              wrapperCol={{ span: 15, offset: 0 }}
              style={{ maxWidth: 600 }}
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
                          <Select defaultValue="請選擇科目">
                            <Select.Option value="中國語文">
                              中國語文
                            </Select.Option>
                            <Select.Option value="英國語文">
                              英國語文
                            </Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "second"]}>
                          <Select
                            placeholder="請選擇"
                            style={{ width: "120px" }}
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
                      增加選修科目
                    </Button>
                  </div>
                )}
              </Form.List>
            </Form.Item>
            <Form.Item
              label="選修科目"
              labelCol={{ span: 6, offset: 0 }}
              wrapperCol={{ span: 15, offset: 0 }}
              style={{ maxWidth: 600 }}
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
                          <Select defaultValue="請選擇科目">
                            <Select.Option value="通識">通識</Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item noStyle name={[subField.name, "second"]}>
                          <Select
                            placeholder="請選擇"
                            style={{ width: "120px" }}
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
                      增加選修科目
                    </Button>
                  </div>
                )}
              </Form.List>
            </Form.Item>
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
