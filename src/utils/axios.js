import axios from "axios";
import { getToken } from "./cookies";

const https = axios.create({
  baseURL: "http://10.1.0.93:4000/api",
  headers: {
    "content-type": "application/json"
  },
  timeout: 1000
});

// request interceptor
https.interceptors.request.use(
  request => {
    const token = getToken();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    if (error.response && error.response.status === 403) {
      window.location.replace("/sign-in");
    }
    return Promise.reject(error);
  }
);

export default https;
