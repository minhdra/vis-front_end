import axios from 'axios';

const BASE_API_URL = process.env.REACT_APP_IMAGE_URL + 'api';

const instance = axios.create({
  baseURL: BASE_API_URL,
});

export default instance;