import axios from 'axios';

//conectando ao banco de dados
export const api = axios.create({
   baseURL: "https://acheme.herokuapp.com",
});