import axios from 'axios';
import { getToken } from './Common';
const API_ROOT = process.env.REACT_APP_API_LINK || 'inventorylumen.test/api';

const http = axios.create ({
  baseURL: API_ROOT,
  timeout: 60000,
  headers: {'Content-Type': 'application/json'},
});

http.interceptors.request.use (
  function (config) {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);

http.interceptors.response.use((response) => {
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
          // alert('Authorization is invalid. Redirecting to login page.');
          // window.location.reload();
      }
      return Promise.reject(error.response);
    }
    
});

export default http;