import axios from 'axios';
import { authState } from '../components/Auth/recoil/authState';
import { getRecoil } from 'recoil-nexus'; 

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = getRecoil(authState);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access - please log in again.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
