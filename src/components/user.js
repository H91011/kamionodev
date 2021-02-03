import { Layout, Menu, Button, Row, Col } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UserAddOutlined,
  EditOutlined
} from "@ant-design/icons";
import Kamion from "./kamioncu/kamion";

const { Header, Content, Footer, Sider } = Layout;

export default function() {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ height: "100vh", backgroundColor: "rgb(99, 153, 221)" }}
      >
        <div className="logo" />
        <br />
        <br />
        <br />
        <Menu
          style={{ backgroundColor: "rgb(99, 153, 221)", color: "#FFF" }}
          mode="inline"
          defaultSelectedKeys={["4"]}
        ></Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }} span={24}>
          <div
            className="site-layout-background"
            style={{ padding: 100, minHeight: 500 }}
          >
            <Kamion />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
