import * as React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import SidebarLayout from "./SidebarLayout";
import Spinner from "../components/Spinner";
import { DivElement } from "../types/components";
const { Content } = Layout;

export interface DashboardLayoutProps extends DivElement {}

function DashboardLayout({ children, ...divProps }: DashboardLayoutProps) {
  const [collapsed, setCollpased] = React.useState(false);

  function toggle() {
    setCollpased(() => !collapsed);
  }

  return (
    <div {...divProps} id="components-layout-demo-custom-trigger">
      <Layout className="layout-wrapper">
        <SidebarLayout collapsed={collapsed} />
        <Layout
          style={{ height: "100vh", overflowY: "scroll" }}
          className="site-layout"
        >
          <HeaderLayout toggle={toggle} collapsed={collapsed} />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              flex: "1 0 auto",
              overflow: "initial",
            }}
          >
            <React.Suspense fallback={<Spinner />}>
              <Outlet />
            </React.Suspense>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default DashboardLayout;
