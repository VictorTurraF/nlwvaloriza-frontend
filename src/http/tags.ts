import { AxiosRequestConfig } from "axios";
import { client } from "./client";

export interface TagCreateRequest {
  name: string;
  color: string;
}

function listAll(config: AxiosRequestConfig) {
  return client.get("/tags", config );
}

function create(tag: TagCreateRequest) {
  return client.post("/tags", tag);
}

export { listAll, create };
