import { client } from "./client";

export interface Credentials {
  email: string,
  password: string,
}

function getCSRF () {
  return client.get('/sanctum/csrf-cookie');
}

function login (credentials: Credentials) {
  return client.post('/api/login', credentials);
}

export { login, getCSRF }