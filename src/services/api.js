import axios from 'axios';

const api = axios.create({
  baseURL: 'http://apposvoltecrs-com.umbler.net/',
})
export default api;
