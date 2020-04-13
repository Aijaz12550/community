import axios from "axios";
import { getToken } from "./tokenHandler";

const _axios = axios.create({
  baseURL: process.env.API_BASE_URL,
});

let token = getToken();

_axios.CancelToken = axios.CancelToken;

_axios.interceptors.request.use(async (config) => {
  if (token) {
    config.headers.Authorization = `bearer ${token}`;
    config.headers["Access-Control-Allow-Origin"] = "*"
    config.headers["Access-Control-Allow-Credentials"] = true
  }

  return config;
});

export { _axios };
