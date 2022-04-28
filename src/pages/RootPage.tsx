import { Button, Divider, Space, Typography } from "antd";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";

const FullCenteredBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  margin: 0 auto;
  gap: 1.5rem;
`;

const LogoAnimated = styled(motion.div)`
  z-index: 100;
  position: relative;
`;

const OptionsAnimated = styled(motion.div)`
  z-index: 90;
  position: relative;
  overflow: hidden;
  width: auto;

  .section {
    white-space: nowrap;
    text-align: right;
  }
`;

function RootSplashPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (auth.isLogged) {
    <Navigate to="/panel" />;
  }

  return (
    <FullCenteredBox>
      <LogoAnimated
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
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
        transition={{ duration: 0.3, delay: 0.5 }}
        variants={{
          closed: { width: 0 },
          open: { width: "auto" },
        }}
      >
        <Space className="section" split={<Divider type="vertical" />}>
          <Typography.Link onClick={() => navigate("/signup")}>Sign Up</Typography.Link>
          <Button type="primary" onClick={() => navigate("/signin")}>
            Sign In
          </Button>
        </Space>
      </OptionsAnimated>
    </FullCenteredBox>
  );
}

export default RootSplashPage;
