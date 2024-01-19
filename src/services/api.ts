import { CookiesEnum, ResponseData } from '@/models/types';
import axios from 'axios';
import { Observable } from 'rxjs';
import Cookies from 'js-cookie';

export const createAxiosInstance = () => {
    return axios.create({
        baseURL: "http://localhost:5281",
        timeout: 30000
    });
};

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
};

export const loginUser = (data: string) => {
    return new Observable((subscriber) => {
        const axiosInstance = createAxiosInstance();
        axiosInstance.post("/Account/Login", data, {
            headers: {
                'Content-Type': 'text/plain',
            }
        })
            .then((resp) => {
                const data = resp.data;
                subscriber.next(data);
                subscriber.complete();
            })
            .catch((err) => subscriber.error(err));
    });
};

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
                subscriber.next(resp.data["data"]);
                subscriber.complete();
            })
            .catch((err) => subscriber.error(err));
    });
};

export const getPost = (data?: string) => {
    return new Observable((subscriber) => {
        const axiosInstance = createAxiosInstance();
        axiosInstance.get("/Post/GetPost", {
            headers: {
                'Authorization': Cookies.get(CookiesEnum.Auth)
            }
        })
            .then((resp) => {
                subscriber.next(resp.data["data"]);
                subscriber.complete();
            })
            .catch((err) => subscriber.error(err));
    });
};

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
};

export const inviteFriend = (data: string): Observable<ResponseData> => {
    return new Observable((subscriber) => {
        const axiosInstance = createAxiosInstance();
        axiosInstance.post('Friend/SendInvite', data, {
            headers: {
                'Content-Type': 'text/plain',
                Authorization: Cookies.get(CookiesEnum.Auth)
            }
        })
            .then((resp) => {
                subscriber.next(resp.data as ResponseData);
                subscriber.complete();
            })
            .catch((err) => subscriber.error(err));
    });
};

export const acceptRequest = (data: string): Observable<ResponseData> => {
    return new Observable((subscriber) => {
        const axiosInstance = createAxiosInstance();
        axiosInstance.post('Friend/FriendRequestStatus', data, {
            headers: {
                'Content-Type': 'text/plain',
                Authorization: Cookies.get(CookiesEnum.Auth)
            }
        })
            .then((resp) => {
                subscriber.next(resp.data as ResponseData);
                subscriber.complete();
            })
            .catch((err) => subscriber.error(err));
    });
};

export const getAllInvites = (): Observable<ResponseData> => {
    return new Observable((subscriber) => {
        const axiosInstance = createAxiosInstance();
        axiosInstance.get('Friend/GetAllFriends', {
            headers: {
                'Content-Type': 'text/plain',
                Authorization: Cookies.get(CookiesEnum.Auth)
            }
        })
            .then((resp) => {
                subscriber.next(resp.data as ResponseData);
                subscriber.complete();
            })
            .catch((err) => subscriber.error(err));
    });
};

export const getRequestInvite = (data: string) => {
    return new Observable<ResponseData>((subscriber) => {
        const axiosInstance = createAxiosInstance();
        axiosInstance.post('Friend/PendentInvite', data, {
            headers: {
                'Content-Type': 'text/plain',
                Authorization: Cookies.get(CookiesEnum.Auth)
            }
        })
            .then((resp) => {
                subscriber.next(resp.data as ResponseData);
                subscriber.complete();
            })
            .catch((err) => subscriber.error(err));
    });
};