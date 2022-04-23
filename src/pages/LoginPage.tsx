import { Card } from "antd";
import { Typography } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
const { Title, Paragraph, Link } = Typography;

function LoginPage() {
  const [isSigning, setIsSigning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  let from = (location.state as any)?.from?.pathname || "/panel/users";

  async function handleFinish(form: any) {
    setIsSigning(true);

    const logginSucceed = await signIn({
      email: form.email,
      password: form.password,
    });

    if (logginSucceed) {
      navigate(from, { replace: true });
    } else {
      setIsSigning(false);
    }
  }

  return (
    <div id="login-page-wrapper">
      <Card className="login-card">
        <Typography>
          <Title level={3}>Sign in</Title>
          <Paragraph>Login to manage your account</Paragraph>
        </Typography>
        <div id="components-form-demo-normal-login">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={handleFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="/signin/recover">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item style={{ marginBottom: "0" }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size="large"
                loading={isSigning}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
      <Typography style={{ textAlign: "center" }}>
        <Paragraph>
          Don't have an account? <Link href="/register">Sign up</Link>
        </Paragraph>
      </Typography>
    </div>
  );
}

export default LoginPage;
