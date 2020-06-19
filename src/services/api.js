import axios from 'axios';

const api = axios.create({
  baseURL: 'http://apposvoltecrs-com.umbler.net/api/',
})
export default api;
