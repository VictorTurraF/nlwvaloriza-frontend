import { AxiosRequestConfig } from "axios";
import { client } from "./client";


async function listAll (params: AxiosRequestConfig = {}) {
  try {
    const {data} = await client.get('/api/users', params); 
    return data;
  } catch(error) {
    console.warn("Erro ao listar usuários");
    console.warn(error)
    return null;
  }
}

export { listAll }