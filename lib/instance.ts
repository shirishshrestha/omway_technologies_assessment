import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const instance = axios.create({
  baseURL: API_URL,
});
