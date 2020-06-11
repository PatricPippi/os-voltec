import axios from 'axios';

const api = axios.create({
  baseURL: 'https://voltec-backend.herokuapp.com',
})
export default api;
