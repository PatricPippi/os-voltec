import axios from 'axios';

const devUrl = 'http://localhost:3333/api';
const prodUrl = 'https://api.voltecrs.com.br/api';

const api = axios.create({
  baseURL: prodUrl,
});

export default api;
