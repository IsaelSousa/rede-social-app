import axios from 'axios';
import { Observable } from 'rxjs';

export const createAxiosInstance = () => {
    return axios.create({
        baseURL: "http://192.168.0.121:5281",
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

export const sendPost = (data: string) => {
    return new Observable((subscriber) => {
        const axiosInstance = createAxiosInstance();
        axiosInstance.post("/Post/InsertPost", data, {
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

export const getPost = (data: string) => {
    return new Observable((subscriber) => {
        const axiosInstance = createAxiosInstance();
        axiosInstance.post("/Post/GetPost", data, {
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

export const validationToken = () => {
    return new Observable((subscriber) => {
        const axiosInstance = createAxiosInstance();
        axiosInstance.get("/Account/ValidationToken")
        .then((resp) => {
            subscriber.next(resp.status);
            subscriber.complete();
        })
        .catch((err) => subscriber.error(err));
    });
}