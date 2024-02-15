import axios, { AxiosError, AxiosResponse } from 'axios';
import ResponseInterface from '../../interface/response.interface';
import { clearStorageWhenLogOut } from '../../helpers/utils/clearStorageWhenLogOut.ts';
import CookieService from '../cookie/cookie.service.ts';

const accessToken = import.meta.env.VITE_USER_ACCESS_TOKEN;
if (!accessToken) throw Error('Access token not found in process env!');

// ## handle http request response
const responseBody = (response: AxiosResponse) => {
    return response.data;
};

// ## handle http request error
const errorResponseBody = (error: AxiosError) => {
    if (error.response?.data?.message === 'Unauthenticated.') {
        clearStorageWhenLogOut();
        window.location.href = 'http://localhost:5000/login';
        return error.response?.data;
    }
    if (error.response) {
        return error?.response?.data;
    }

    return error.request;
};

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL_BASE,
    timeout: 10000,
});

// Set up an Axios interceptor to add the Bearer token to each request
axiosInstance.interceptors.request.use(async (config) => {
    // Retrieve the token dynamically before each request
    const accessToken = CookieService.getCookie(import.meta.env.VITE_USER_ACCESS_TOKEN);
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});

const httpRequest = {
    get: <T>(url = '', params = {}) =>
        axiosInstance
            .get<ResponseInterface<T>>(url, {
                params: params,
            })
            .then(responseBody)
            .catch(errorResponseBody),

    post: <T>(url = '', body = {}) => axiosInstance.post<ResponseInterface<T>>(url, body).then(responseBody).catch(errorResponseBody),

    put: <T>(url = '', body = {}) => axiosInstance.put<ResponseInterface<T>>(url, body).then(responseBody).catch(errorResponseBody),

    delete: <T>(url = '', params = {}, body = {}) =>
        axiosInstance
            .delete<ResponseInterface<T>>(url, {
                data: body,
                params: params,
            })
            .then(responseBody)
            .catch(errorResponseBody),
};

export default httpRequest;
