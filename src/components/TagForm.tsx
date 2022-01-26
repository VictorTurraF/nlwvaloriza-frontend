import { useState } from "react";
import { Button, Form, Input, Space, Typography } from "antd";
import TagBadge from "../components/TagBadge";
import { slugfy } from "../helpers/string";

export interface TagFormProps {
  onSubmit?: (values: any) => void
}

function TagForm({ onSubmit = () => {} }: TagFormProps) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#ffffff");

  return (
    <Form
      name="add_new_tag_form"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      onFinish={onSubmit}
      initialValues={{
        color: "#ffffff",
      }}
    >
      <Form.Item
        name="name"
        label="Tag Name"
        rules={[
          {
            required: true,
            message: "The tag name is required",
          },
        ]}
      >
        <Input
          onChange={(event) => setName(event.target.value)}
          placeholder="Input the tag name"
        />
      </Form.Item>
      <Form.Item label="Tag Color">
        <Space>
          <Form.Item
            name="color"
            noStyle
            rules={[
              {
                required: true,
                message: "The tag color is required",
              },
            ]}
          >
            <Input
              onChange={(event) => setColor(event.target.value)}
              type="color"
              style={{ width: "4rem" }}
            />
          </Form.Item>
          {!!name && (
            <>
              <Typography.Text>Preview:</Typography.Text>
              <TagBadge color={color}>{`#${slugfy(name)}`}</TagBadge>
            </>
          )}
        </Space>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default TagForm;
