import axios from 'axios';
import { getToken } from '../helpers/globals';
const API_ROOT = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const httpWithFile = axios.create ({
    baseURL: API_ROOT,
    timeout: 259200,
    responseType: 'blob', // important
});

httpWithFile.interceptors.request.use (
  function (config) {
    const token = getToken();
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    if (token) config.headers.common['x-auth-token'] = token;
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);

httpWithFile.interceptors.response.use((response) => {
    return response;
}, function (error) {
    console.log(error.response);
    if(error.response)
    {
      if (error.response.status === 401) {

          let appState = {
            isLoggedIn: false,
            user: {}
          };

          localStorage["appState"] = JSON.stringify(appState);
      }
      return Promise.reject(error.response);
    }
    
});

export default httpWithFile;