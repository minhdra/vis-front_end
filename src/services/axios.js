import axios from 'axios';

const BASE_API_URL = process.env.REACT_APP_API_URL + 'api';
const BASE_API_IMAGE_URL = process.env.REACT_APP_IMAGE_URL + 'api';
// let BASE_API_URL = 'https://vninspect.asia/api';

export const instance = axios.create({
  baseURL: BASE_API_URL,
});

export const instanceImage = axios.create({
  baseURL: BASE_API_IMAGE_URL,
});