import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.199:5000/api/v1",
});
