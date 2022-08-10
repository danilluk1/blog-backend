import axios, { AxiosRequestConfig } from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "..";

export const BACKEND_URL = "http://localhost:5000";

export const $axios = axios.create({
  baseURL: BACKEND_URL,
});

$axios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) return;

  let context =
    (config.headers.authorization = `Bearer ${auth.currentUser.to}`);
});
