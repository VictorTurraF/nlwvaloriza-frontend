import * as React from "react";
import { Layout, Menu } from "antd";
import {
  TeamOutlined,
  RocketOutlined,
  TagOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Sider } = Layout;

export interface SidebarLayoutProps {
  collapsed: boolean;
}

function SidebarLayout({ collapsed }: SidebarLayoutProps) {
  const navigationItems = [
    {
      text: "Users",
      navigationPath: "users",
      icon: <TeamOutlined />,
    },
    {
      text: "My Profile",
      navigationPath: "me",
      icon: <UserOutlined />,
    },
    {
      text: "Compliments",
      navigationPath: "compliments",
      icon: <RocketOutlined />,
    },
    {
      text: "Tags",
      navigationPath: "tags",
      icon: <TagOutlined />,
    },
  ];

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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[]}>
        {navigationItems.map((navigationItem, index) => (
          <Menu.Item
            key={index}
            icon={navigationItem.icon}
          >
            <Link to={navigationItem.navigationPath}>
              {navigationItem.text}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}

export default React.memo(SidebarLayout);
