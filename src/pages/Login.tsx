import { Card } from "antd";
import { Typography } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Credentials, getCSRF, login } from "../http/auth";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph } = Typography;

function LoginPage() {

  const navigate = useNavigate()

  async function performLoginRequest (credentials: Credentials) {
    try {
      await getCSRF()
      const loginResponse = await login(credentials);
      return loginResponse 
    } catch (error) {
      console.warn("Erro ao logar");
      console.warn(error);
      return null
    }
  }

  async function handleFinish(form: any) {
    const loginResponse = await performLoginRequest({ 
      email: form.email, 
      password: form.password 
    })

    if (loginResponse && loginResponse.status === 204) {
      navigate('/panel/users')
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

              <a className="login-form-forgot" href="/login/recover">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item style={{ marginBottom: '0' }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size="large"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
      <Typography style={{ textAlign: 'center' }}>
        <Paragraph>
          Don't have an account? <Button type="link" style={{ padding: '0' }}>Sign up</Button>
        </Paragraph>
      </Typography>
    </div>
  );
}

export default LoginPage;
