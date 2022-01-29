import { message, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import TagForm from "../components/TagForm";
import * as tagsClient from "../http/tags";


function AddNewTagPage() {
  const navigate = useNavigate()

  async function requestTagCreation (tag: tagsClient.TagCreateRequest) {
    try {
      const response = await tagsClient.create(tag)
      return response
    } catch (error) {
      console.warn('Erro ao criar tags')
      console.warn(error)
      return null
    }
  }

  async function handleSubmit (values: any) {
    const response = await requestTagCreation(values);
    if (!!response && response.status === 201) {
      message.success('Tag successfuly created');
      navigate('/panel/tags');
    }


  }

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Title level={5}>Add New Tag</Typography.Title>
      <TagForm  onSubmit={handleSubmit} />
    </Space>
  );
}

export default AddNewTagPage;
