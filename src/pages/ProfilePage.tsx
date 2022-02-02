import { Space, Typography } from "antd";

function ProfilePage() {
  return (
    <Space direction="vertical">
      <Typography.Title level={4}>My Profile</Typography.Title>
      <Typography.Paragraph>Profile informations</Typography.Paragraph>
    </Space>
  );
}

export default ProfilePage;
