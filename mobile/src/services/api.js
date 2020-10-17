import axios from 'axios';

export const api = axios.create({
  baseURL: "http://seuip:3001",
});