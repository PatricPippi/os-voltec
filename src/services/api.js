import axios from 'axios';

const devUrl = 'http://localhost:3333/api';
const prodUrl = 'https://apposvoltecrs-com.umbler.net/api';

const api = axios.create({
  baseURL: prodUrl,
});

export default api;
