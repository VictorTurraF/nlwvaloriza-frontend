import axios, { AxiosRequestConfig } from "axios";

const defaultClientConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:8000",
  timeout: 1000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

const client = axios.create(defaultClientConfig);

const authenticatedClient = axios.create(defaultClientConfig);
authenticatedClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token") || "";
    Object.assign(config.headers, { Authorization: `Bearer ${token}` });
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { client, authenticatedClient };
