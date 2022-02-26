import { AxiosRequestConfig } from "axios";
import { client } from "./client";

export interface TagCreateRequest {
  name: string;
  color: string;
}

async function listAll(config: AxiosRequestConfig = {}) {
  try {
    const response = await client.get("/tags", config );
    return response
  } catch (error) {
    console.warn("Erro ao listar todas as tags")
    console.warn(error)
    return null
  }
}

function create(tag: TagCreateRequest) {
  return client.post("/tags", tag);
}

export { listAll, create };
