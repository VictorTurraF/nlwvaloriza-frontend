import axios, { AxiosRequestConfig } from "axios";
import config from "../config";

const defaultClientConfig: AxiosRequestConfig = {
  baseURL: config.api.BASE_URL + config.api.PATH_PREFIX,
  timeout: 1000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
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

const sanctumClient = axios.create({
  ...defaultClientConfig,
  baseURL: config.api.BASE_URL,
});

export { client, authenticatedClient, sanctumClient };
