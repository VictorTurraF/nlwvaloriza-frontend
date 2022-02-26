import { Space, Typography } from 'antd'
import ComplimentForm from '../components/ComplimentForm'

function AddNewCompliment() {
  function handleComplimentFormSubmit(form: any) {
    console.log(form)
  }
  
  return (
    <Space direction='vertical' style={{ width: '100%'}}>
      <Typography.Title level={4}>Send a Compliment</Typography.Title>
      <ComplimentForm onSubmit={handleComplimentFormSubmit} />
    </Space>
  )
}

export default AddNewCompliment