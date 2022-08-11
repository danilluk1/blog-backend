import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useAuthState } from "react-firebase-hooks/auth";

export const BACKEND_URL = "http://localhost:5000"; //move to .env

export const $axios: AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
});

$axios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) return;

  config.headers.authorization = `Bearer ${localStorage.getItem('idToken')}`;

  return config;
});
