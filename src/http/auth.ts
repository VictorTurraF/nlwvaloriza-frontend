import { client } from "./client";

export interface Credentials {
  email: string;
  password: string;
}

function getCSRF() {
  return client.get("/sanctum/csrf-cookie");
}

function login(credentials: Credentials) {
  return client.post("/api/login", credentials);
}

async function newLogin(credentials: Credentials) {
  try {
    const { data } = await client.post("/api/login", credentials);
    return data;
  } catch (error) {
    console.warn("Erro ao fazer login");
    console.warn(error);
    return null;
  }
}

export { login, newLogin, getCSRF };
