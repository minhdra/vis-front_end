import axios from 'axios';

const BASE_API_URL = process.env.REACT_APP_API_URL + 'api';
// const BASE_API_URL = 'https://api-vninspection.vercel.app/api';

const instance = axios.create({
  baseURL: BASE_API_URL,
});

export default instance;