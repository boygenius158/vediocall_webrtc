import axios from 'axios';
import { authState } from '../components/Auth/recoil/authState';
import { getRecoil } from 'recoil-nexus'; // To retrieve Recoil state outside React components

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
});

// Add an interceptor to attach the token to the request headers
axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = getRecoil(authState); // Safely access the Recoil state
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add an interceptor to handle errors globally
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
