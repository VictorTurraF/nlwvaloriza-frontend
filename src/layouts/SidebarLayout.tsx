import * as React from "react";
import { Layout, Menu } from "antd";
import { TeamOutlined, RocketOutlined, TagOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

export interface SidebarLayoutProps {
  collapsed: boolean;
}

function SidebarLayout({ collapsed }: SidebarLayoutProps) {
  const navigate = useNavigate();

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <a href="/about" className="logo">
        <img src="/assets/logo.svg" alt="logo" />
      </a>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item
          onClick={() => navigate("users")}
          key="1"
          icon={<TeamOutlined />}
        >
          Users
        </Menu.Item>
        <Menu.Item
          onClick={() => navigate("compliments")}
          key="2"
          icon={<RocketOutlined />}
        >
          Compliments
        </Menu.Item>
        <Menu.Item
          onClick={() => navigate("tags")}
          key="3"
          icon={<TagOutlined />}
        >
          Tags
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default React.memo(SidebarLayout);
