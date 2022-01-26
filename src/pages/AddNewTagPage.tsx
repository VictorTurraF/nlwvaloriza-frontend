import { Space, Typography } from "antd";
import TagForm from "../components/TagForm";

function AddNewTagPage() {

  function handleSubmit (values: any) {
    console.log(values);
  }

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Title level={5}>Add New Tag</Typography.Title>
      <TagForm  onSubmit={handleSubmit} />
    </Space>
  );
}

export default AddNewTagPage;
