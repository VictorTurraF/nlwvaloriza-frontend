import { Card } from "antd";
import { Typography } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

function LoginPage() {
  function handleFinish(values: any) {
    console.log("Received values of form: ", values);
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
              name="username"
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
