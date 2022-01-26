import { client } from "./client";

function listAll () {
  return client.get('/api/tags');
}

export { listAll }