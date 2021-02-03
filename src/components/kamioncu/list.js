import { Button, Row, Col, List, Space } from "antd";
import { UserAddOutlined, EditOutlined } from "@ant-design/icons";
import Search from "./search.js";

export default function() {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires."
  ];
  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      header={
        <Row>
          <Col style={{ textAlign: "end" }} span={24}>
            <Space direction="horizontal">
              <Search />
              <Button style={{ width: "60px" }}>
                {" "}
                <UserAddOutlined className={"iconSize"} />{" "}
              </Button>
              <Button style={{ width: "60px" }}>
                <EditOutlined className={"iconSize"} />
              </Button>
            </Space>
          </Col>
        </Row>
      }
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item span={24}>
          <Button style={{ width: "100%" }}>{item}</Button>
        </List.Item>
      )}
    />
  );
}
