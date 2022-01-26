import * as React from "react";
import { Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
const { Header } = Layout;

export interface HeaderLayoutProps {
  collapsed: boolean,
  toggle: any
}

function HeaderLayout({ collapsed, toggle }: HeaderLayoutProps) {

  const menuConfig = {
    className: "trigger",
    onClick: toggle,
  };

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {collapsed ? (
        <MenuUnfoldOutlined {...menuConfig} />
      ) : (
        <MenuFoldOutlined {...menuConfig} />
      )}
    </Header>
  );
}

export default React.memo(HeaderLayout);
