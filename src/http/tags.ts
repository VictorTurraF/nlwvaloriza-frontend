import { AxiosRequestConfig } from "axios";
import { client } from "./client";

export interface TagCreateRequest {
  name: string;
  color: string;
}

function listAll(config: AxiosRequestConfig) {
  return client.get("/api/tags", config );
}

function create(tag: TagCreateRequest) {
  return client.post("/api/tags", tag);
}

export { listAll, create };
