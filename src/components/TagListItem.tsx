import { Col, List, Row } from "antd";
import { Tag } from "./TagList";
import TagBadge from './TagBadge'

export interface TagListItemProps {
  tag: Tag;
}

function TagListItem({ tag }: TagListItemProps) {
  return (
    <List.Item >
      <Row>
        <Col span={12}>{tag.name}</Col>
        <Col span={12}>
          <TagBadge color={'#eb2f96'}>{tag.hashtag}</TagBadge>
        </Col>
      </Row>
    </List.Item>
  );
}

export default TagListItem;
