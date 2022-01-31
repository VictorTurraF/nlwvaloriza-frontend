import { client } from "./client";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginCallbacks {
  onInvalidLogin?: (response: any) => void;
  onFailure?: (error: any, response: any) => void;
}

async function getCSRF() {
  try {
    const response = await client.get("/sanctum/csrf-cookie");
    return response;
  } catch (error) {
    console.warn("Erro ao solicitar csrf token");
    console.warn(error);
    return null;
  }
}

async function signIn(
  credentials: LoginCredentials,
  callbacks: LoginCallbacks = {}
) {
  try {
    const response = await client.post("/api/login", credentials);
    return response;
  } catch (error: any) {
    if (error.response.status === 400) {
      callbacks?.onInvalidLogin && callbacks.onInvalidLogin(error.response);
    } else {
      console.warn("Erro ao fazer o login");
      console.warn(error);
      callbacks?.onFailure && callbacks.onFailure(error, error.response);
    }
    return null;
  }
}

export { signIn, getCSRF };
