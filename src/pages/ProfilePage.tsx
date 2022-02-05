import { Badge, Descriptions, Space, Tag, Typography } from "antd";
import { useAuth } from "../hooks/useAuth";

function ProfilePage() {
  const { user } = useAuth();
  return (
    <Space direction="vertical">
      <Typography.Title level={4}>My Profile</Typography.Title>
      <Descriptions bordered>
        <Descriptions.Item label="Name">{user?.name}</Descriptions.Item>
        <Descriptions.Item label="Email">{user?.email}</Descriptions.Item>
        <Descriptions.Item label="Access Level">
          {user?.is_admin ? <Tag color="gold">admin</Tag> : <Tag>user</Tag>}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <Badge status="success" text="Codding" />
        </Descriptions.Item>
      </Descriptions>
    </Space>
  );
}

export default ProfilePage;
