import axios from 'axios';

const BASE_API_URL = process.env.REACT_APP_API_URL + 'api';
// let BASE_API_URL = 'https://vninspect.asia/api';

const instance = axios.create({
  baseURL: BASE_API_URL,
});

export default instance;