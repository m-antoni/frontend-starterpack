import http from './api.http';
import httpWithFile from './api.httpWithFile';

export const AuthService =  {
    authLogin: (params) => http.post('/auth/login', params),
    authRegister: (params) => http.post('/auth/register', params),
    authVerify: () => http.get('/auth/verify'),
}