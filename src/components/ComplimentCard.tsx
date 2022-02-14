import { Card, Space, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import TagBadge from "./TagBadge";

export interface Tag {
  text: string;
  color: string;
}

export interface ComplimentCardProps {
  message: string;
  authorName: string;
  tags: Tag[];
  authorImageUrl?: string;
}

function ComplimentCard({
  message,
  tags,
  authorName,
}: ComplimentCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={{
        hidden: { opacity: 0, y: 7 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeInOut",
          },
        },
      }}
    >
      <Card>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Typography.Text
            style={{
              fontSize: "1.5rem",
              fontWeight: "500",
            }}
            type="secondary"
          >
            {message}
          </Typography.Text>
          <Space size={8} wrap>
            {tags.map((tag, index) => (
              <TagBadge key={index} color={tag.color}>
                {tag.text}
              </TagBadge>
            ))}
          </Space>
          <Space>
            <Avatar icon={<UserOutlined />} />
            <Typography.Text>{authorName}</Typography.Text>
          </Space>
        </Space>
      </Card>
    </motion.div>
  );
}

export default ComplimentCard;
