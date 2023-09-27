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
    postId: string;
    postImage: string;
    postMsg: string;
    postCreatedAt: Date;
    postCreatedBy: string;
}

export enum CookiesEnum {
    Auth = 'Authorization',
}