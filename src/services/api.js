import axios from 'axios';

const devUrl = 'http://localhost:3333/api';
const prodUrl = 'http://apposvoltecrs-com.umbler.net/api';

const api = axios.create({
  baseURL: devUrl,
});

export default api;
