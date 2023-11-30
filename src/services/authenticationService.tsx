import { ActualUser, CookiesEnum, ResponseData, User } from '@/models/types';
import { loginUser } from './api';
import { toast } from 'react-toastify';
import axios from 'axios';
import { NextRouter } from 'next/router';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

type DataResult = {
  token: string;
  expiration: string;
}

export const authentication = (user: User, router: NextRouter, dispatch: any) => {
  return new Promise((resolve, reject) => {
    const key = process.env.NEXT_PUBLIC_APP_ENCRYPTED_KEY;
    if (user.userName.length != 0 && user.password.length != 0) {
      if (key) {
        const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(user), CryptoJS.enc.Utf8.parse(key), {
          padding: CryptoJS.pad.Pkcs7,
          mode: CryptoJS.mode.ECB
        });
        const hash = encryptedData.toString();
        loginUser(hash.toString())
          .subscribe({
            complete: () => { },
            error: (err) => {
              toast.error('Network error.', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              });
              reject(err);
            },
            next(value) {
              const result = value as ResponseData;

              if (result.status == false) {
                toast.error(result.message, {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'light',
                });
                reject();
              } else {
                const payload: ActualUser = {
                  userName: user.userName
                }
  
                dispatch({ type: 'ACTUAL_USER', payload });
  
                toast.success(`Welcome, ${user.userName}`, {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'light',
                });
  
                const token = 'Bearer ' + result.data.token
                axios.defaults.headers.common['Authorization'] = token;
                Cookies.set(CookiesEnum.Auth, token, { expires: 1 });

                router.push({
                  pathname: '/homepage',
                  auth: token
                });
  
                resolve(true);
              }
            },
          });
      }
    } else {
      if (user.userName.length != 0) {
        toast.error('UserName cannot empty.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        reject();
      }
      if (user.password.length != 0) {
        toast.error('Password cannot empty.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        reject();
      }
    }
  })
}