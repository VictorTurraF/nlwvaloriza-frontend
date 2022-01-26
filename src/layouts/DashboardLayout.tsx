import * as React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import SidebarLayout from "./SidebarLayout";
const { Content } = Layout;

export interface DashboardLayoutProps extends React.HTMLProps<HTMLDivElement> {}

function DashboardLayout({ children, ...divProps }: DashboardLayoutProps) {
  const [collapsed, setCollpased] = React.useState(false);

  function toggle() {
    setCollpased(() => !collapsed);
  }

  return (
    <div {...divProps} id="components-layout-demo-custom-trigger">
      <Layout className="layout-wrapper">
        <SidebarLayout collapsed={collapsed} />
        <Layout className="site-layout">
          <HeaderLayout toggle={toggle} collapsed={collapsed} />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default DashboardLayout;
