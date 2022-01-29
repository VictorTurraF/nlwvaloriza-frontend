import { client } from "./client";

export interface TagCreateRequest {
  name: string;
  color: string;
}

function listAll() {
  return client.get("/api/tags");
}

function create(tag: TagCreateRequest) {
  return client.post("/api/tags", tag);
}

export { listAll, create };
