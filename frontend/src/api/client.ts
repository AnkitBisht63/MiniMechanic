import axios from 'axios';
import { Platform } from 'react-native';

const defaultBaseUrl = Platform.select({
  android: 'http://10.0.2.2:8080/api',
  ios: 'http://localhost:8080/api',
  web: 'http://localhost:8080/api',
  default: 'http://localhost:8080/api',
});

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL ?? defaultBaseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
