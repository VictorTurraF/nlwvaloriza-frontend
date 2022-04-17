import { message, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import ComplimentForm from "../components/ComplimentForm";
import { create as createCompliment } from "../http/compliments";

function AddNewCompliment() {
  const navigate = useNavigate();

  async function requestComplimentCreation(complimentCreationPayload: Object) {
    console.log(complimentCreationPayload);

    try {
      const response = await createCompliment(complimentCreationPayload);
      return response;
    } catch (error) {
      console.warn("Erro ao criar compliments");
      console.warn(error);
      return null;
    }
  }

  async function handleComplimentFormSubmit(form: any) {
    const response = await requestComplimentCreation({
      message: form.message,
      receiver_user_id: form.receiver_user_id.value,
      tags: form?.tags || [],
    });

    console.log(response);

    if (!!response && response.status === 201) {
      message.success("Compliment successfuly created");
      navigate("/panel/compliments");
    } else {
      message.error("Error creating compliment"); 
    }
  }

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Typography.Title level={4}>Send a Compliment</Typography.Title>
      <ComplimentForm onSubmit={handleComplimentFormSubmit} />
    </Space>
  );
}

export default AddNewCompliment;
