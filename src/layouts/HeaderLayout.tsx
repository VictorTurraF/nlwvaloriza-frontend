import * as React from "react";
import { Button, Col, Layout, Row } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined } from "@ant-design/icons";
import { DivElement } from "../types/components";
import { useAuth } from "../hooks/useAuth";
const { Header } = Layout;

export interface HeaderLayoutProps extends DivElement {
  collapsed: boolean;
  toggle: any;
}

function HeaderLayout({ collapsed, toggle, children }: HeaderLayoutProps) {
  const menuConfig = {
    className: "trigger",
    onClick: toggle,
  };

  const auth = useAuth()

  function handleLoggoutClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    auth.signOut();
  }


  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Row>
        <Col flex="auto">
          {collapsed ? (
            <MenuUnfoldOutlined {...menuConfig} />
          ) : (
            <MenuFoldOutlined {...menuConfig} />
          )}
        </Col>
        <Col>
          <Button
            icon={<LogoutOutlined />}
            style={{ marginRight: "1rem" }}
            type="primary"
            onClick={handleLoggoutClick}
          >
            Logout
          </Button>
        </Col>
      </Row>
    </Header>
  );
}

export default React.memo(HeaderLayout);
