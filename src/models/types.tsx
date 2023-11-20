
export type ResponseData = {
    message: string;
    status: boolean;
    data: any;
}

export type User = {
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    emailConfirmed: boolean;
    phoneNumberConfirmed: boolean;
    twoFactorEnabled: boolean;
}

export type ActualUser = {
    userName: string;
}

export type Post = {
    id: string;
    firstName: string;
    postMessage: string;
    image: string;
    createdAt: Date;
    lastUpdated: Date;
}

export enum CookiesEnum {
    Auth = 'Authorization',
}