import * as React from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  TeamOutlined,
  RocketOutlined,
  TagOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

export interface DashboardLayoutProps extends React.HTMLProps<HTMLDivElement> {}

function DashboardLayout({ children, ...divProps }: DashboardLayoutProps) {
  const [collapsed, setCollpased] = React.useState(false);

  function toggle() {
    setCollpased(() => !collapsed);
  }

  const menuConfig = {
    className: "trigger",
    onClick: toggle,
  };

  return (
    <div {...divProps} id="components-layout-demo-custom-trigger">
      <Layout className="layout-wrapper">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <a href="/about" className="logo">
            <img src="assets/logo.svg" alt="logo" />
          </a>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<TeamOutlined />}>
              Users
            </Menu.Item>
            <Menu.Item key="2" icon={<RocketOutlined />}>
              Compliments
            </Menu.Item>
            <Menu.Item key="3" icon={<TagOutlined />}>
              Tags
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {collapsed ? (
              <MenuUnfoldOutlined {...menuConfig} />
            ) : (
              <MenuFoldOutlined {...menuConfig} />
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default DashboardLayout;
