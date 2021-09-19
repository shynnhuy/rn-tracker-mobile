import axios from "axios";
import { getAccessToken } from "./utils/storage";

export const api = axios.create({
  baseURL: "http://192.168.1.199:5000/api/v1",
});

api.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (Boolean(token)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);
