import { AxiosRequestConfig } from "axios";
import { client } from "./client";

async function listAll(config: AxiosRequestConfig = {}) {
  try {
    const { data } = await client.get("/compliments", config);
    return data;
  } catch (error) {
    console.warn("Error while listing compliments");
    console.warn(error);
    return null
  }
}

export { listAll };
