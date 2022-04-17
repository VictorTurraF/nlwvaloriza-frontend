import { Button, Form, Input } from "antd";
import TagSelector from "./TagSelector";
import UsersSelector from "./UsersSelector";

export interface ComplimentFormProps {
  onSubmit: (form: any) => void;
}

function ComplimentForm({ onSubmit = () => {} }: ComplimentFormProps) {
  return (
    <Form
      name="add_new_compliment_form"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      onFinish={onSubmit}
    >
      <Form.Item
        name="receiver_user_id"
        label="Receiver User"
        rules={[
          {
            required: true,
            message: "The user compliment receiver is required",
          },
        ]}
      >
        <UsersSelector />
      </Form.Item>
      <Form.Item
        name="message"
        label="Message"
        rules={[
          {
            required: true,
            message: "The message is required",
          },
        ]}
      >
        <Input.TextArea placeholder="Compliment message" rows={2} />
      </Form.Item>
      <Form.Item name="tags" label="Tags">
        <TagSelector />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ComplimentForm;
