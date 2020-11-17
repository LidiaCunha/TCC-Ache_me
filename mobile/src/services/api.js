import axios from 'axios';

export const api = axios.create({
  baseURL: "http://192.168.56.1:3001",
});