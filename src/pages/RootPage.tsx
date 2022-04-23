import { Button, Divider, Space, Typography } from "antd";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";

const FullCenteredBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
`;

const LogoAnimated = styled(motion.div)`
  z-index: 100;
  position: relative;
`

const OptionsAnimated = styled(motion.div)`
  z-index: 90;
  position: relative;
  overflow: hidden;
  width: auto;

  .section {
    white-space: nowrap;
    text-align: right;
  }
`

function RootSplashPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (auth.isLogged) {
    <Navigate to="/panel" />;
  }

  return (
    <FullCenteredBox>
      <Space size="large" direction="horizontal" align="center">
        <LogoAnimated
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <a href="/about" className="logo">
            <img src="/assets/logo-dark.svg" alt="logo" />
          </a>
        </LogoAnimated>

        <OptionsAnimated
          initial="closed"
          animate="open"
          transition={{ duration: 0.3, delay: 0.3 }}
          variants={{
            closed: { width: 0 },
            open: { width: "75%" },
          }}
        >
          <Space className="section" split={<Divider type="vertical" />}>
            <Typography.Link onClick={() => navigate("/signup")}>Sign Up</Typography.Link>
            <Button type="primary" onClick={() => navigate("/signin")}>
              Sign In
            </Button>
          </Space>
        </OptionsAnimated>
      </Space>
    </FullCenteredBox>
  );
}

export default RootSplashPage;
