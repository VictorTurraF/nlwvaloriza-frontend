import * as React from "react";
import { List, ListProps, Typography, Button, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TagListItem from "./TagListItem";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

export interface Tag {
  name: string;
  hashtag: string;
  color: string;
}

export interface TagListProps extends ListProps<Tag> {
  tags?: Tag[];
}

export function TagList({ header = <TagListHeader />, tags }: TagListProps) {
  return (
    <List
      size="large"
      itemLayout="vertical"
      header={header}
      bordered
      dataSource={tags}
      renderItem={(tag) => <TagListItem tag={tag} />}
    />
  );
}

function TagListHeader() {
  const navigate = useNavigate();
  return (
    <Row align="middle">
      <Col flex="auto">
        <Title level={5} style={{ marginBottom: 0 }}>
          Hashtags
        </Title>
      </Col>
      <Col>
        <Button
          type="dashed"
          icon={<PlusOutlined />}
          onClick={() => navigate("new")}
        >
          Add New Tag
        </Button>
      </Col>
    </Row>
  );
}
