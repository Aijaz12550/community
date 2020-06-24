import axios from "axios";
import { getToken } from "./tokenHandler";

const _axios = axios.create();

_axios.CancelToken = axios.CancelToken;

_axios.interceptors.request.use(async (config) => {
  getToken().then((_tok) => {
    if (_tok) {
      config.headers.Authorization = `bearer ${_tok}`;
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Access-Control-Allow-Credentials"] = true;
    }
  });

  return config;
});


const _axios1 = axios.create({
  baseURL: process.env.API_BASE_URL_1,
});

_axios.CancelToken = axios.CancelToken;

_axios.interceptors.request.use(async (config) => {
  getToken().then((_tok) => {
    if (_tok) {
      config.headers.Authorization = `bearer ${_tok}`;
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Access-Control-Allow-Credentials"] = true;
    }
  });

  return config;
});



export { _axios, _axios1 };
