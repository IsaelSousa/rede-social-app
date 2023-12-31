import { CookiesEnum } from '@/models/types';
import axios from 'axios';
import { Observable } from 'rxjs';
import Cookies from 'js-cookie';

export const createAxiosInstance = () => {
    return axios.create({
        baseURL: "http://localhost:5281",
        timeout: 3000
    });
}

export const registerUser = (data: string) => {
    return new Observable((subscriber) => {
        const axiosInstance = createAxiosInstance();
        axiosInstance.post("/Account/Register", data, {
            headers: {
                'Content-Type': 'text/plain'
            }
        })
        .then((resp) => {
            subscriber.next(resp.data);
            subscriber.complete();
        })
        .catch((err) => subscriber.error(err));
    });
}

export const loginUser = (data: string) => {
    return new Observable((subscriber) => {
        const axiosInstance = createAxiosInstance();
        axiosInstance.post("/Account/Login", data, {
            headers: {
                'Content-Type': 'text/plain',
            }
        })
        .then((resp) => {
            subscriber.next(resp.data);
            subscriber.complete();
        })
        .catch((err) => subscriber.error(err));
    });
}

export const sendPost = (data: string) => {
    return new Observable((subscriber) => {
        const axiosInstance = createAxiosInstance();
        axiosInstance.post("/Post/InsertPost", data, {
            headers: {
                'Content-Type': 'text/plain',
                Authorization: Cookies.get(CookiesEnum.Auth)
            }
        })
        .then((resp) => {
            subscriber.next(resp.data);
            subscriber.complete();
        })
        .catch((err) => subscriber.error(err));
    });
}

export const getPost = (data?: string) => {
    return new Observable((subscriber) => {
        const axiosInstance = createAxiosInstance();
        axiosInstance.get("/Post/GetPost", {
            headers: {
                'Authorization': Cookies.get(CookiesEnum.Auth)
            }
        })
        .then((resp) => {
            subscriber.next(resp.data);
            subscriber.complete();
        })
        .catch((err) => subscriber.error(err));
    });
}

export const validationToken = () => {
    return new Observable((subscriber) => {
        const axiosInstance = createAxiosInstance();
        axiosInstance.get("/Account/ValidationToken", {
            headers: {
                'Authorization': Cookies.get(CookiesEnum.Auth)
            }
        })
        .then((resp) => {
            subscriber.next(resp.status);
            subscriber.complete();
        })
        .catch((err) => subscriber.error(err));
    });
}