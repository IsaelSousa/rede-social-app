import Head from 'next/head';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import { ActualUser, User } from '@/models/types';
import { useState } from 'react';
import { loginUser } from '@/services/api';
import { toast } from 'react-toastify';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { useDispatch } from '@/context/provider';

type Response = {
  message: any;
  status: boolean;
}

export default function Home() {

  const [user, setUser] = useState<User>({
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    emailConfirmed: true,
    phoneNumberConfirmed: true,
    twoFactorEnabled: true
  });
  const router = useRouter();

  const handleChangeRegister = () => {
    router.push("/register");
  }

  const handleLogged = (token: string) => {
    router.push({
      pathname: "/homepage",
      auth: token
    });
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const dispatch = useDispatch();

  const handleLogin = () => {
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
              toast.error("Network error.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            },
            next(value) {
              const data = value as Response;
              if (data.status == false) {
                toast.error('Login error.', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              } else {
                const payload: ActualUser = {
                  userName: user.userName
                }

                dispatch({ type: 'ACTUAL_USER', payload });

                toast.success(`Welcome, ${user.userName}`, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });

                const token = "Bearer " + data.message['token']
                axios.defaults.headers.common['Authorization'] = token;
                handleLogged(token);
              }
            },
          });
      }
    } else {
      if (user.userName.length != 0) {
        toast.error('UserName cannot empty.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (user.password.length != 0) {
        toast.error('Password cannot empty.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  }

  return (
    <>
      <Head>
        <title>SocialNetwork</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.mainDivisor}>
          <h1 className={styles.title}>Social Network</h1>
        </div>

        <div className={styles.mainDivisor} >
          <div className={styles.directionRow}>
            <div className={styles.directionCenter}>
              <label className={styles.label} htmlFor="user">User</label>
              <input id="user" type="text" placeholder="Informe seu usuário" name="userName" value={user.userName} onChange={(e) => handleInputChange(e)} className={styles.input} />
            </div>

            <div className={styles.directionCenter}>
              <label className={styles.label} htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Digite sua senha" name="password" value={user.password} onChange={(e) => handleInputChange(e)} className={styles.input} />
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={handleLogin}>Login</button>
            <button className={styles.button} onClick={handleChangeRegister}>Register</button>
          </div>
        </div>
      </main>
    </>
  )
}
