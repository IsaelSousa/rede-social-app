import Head from 'next/head';
import styles from './styles.module.css';
import { useState } from 'react';
import { User } from '../../models/types';
import CryptoJS from 'crypto-js';
import { registerUser } from '../../services/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

type Response = {
    message: any;
    status: boolean;
}

export default function Register() {
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

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleRegister = () => {
        const key = process.env.NEXT_PUBLIC_APP_ENCRYPTED_KEY;
        if (key) {
            const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(user), CryptoJS.enc.Utf8.parse(key), {
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.ECB
            });
            const hash = encryptedData.toString();
            registerUser(hash.toString())
                .subscribe({
                    complete: () => {

                    },
                    error: (err) => console.log(err),
                    next(value) {
                        const data = value as Response;
                        if (data.status == false) {
                            toast.error('Error to register user.', {
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
                            toast.success('Registered with sucess!', {
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

                    },
                });
        }
    }

    const handleCancel = () => {
        router.push("/");
    }

    return (
        <main className={styles.main}>
            <Head>
                <title>RedeSocial</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <h1 className={styles.title}>Register</h1>

            <div className={styles.directionColumn}>
                <div className={styles.directionRow}>
                    <div className={styles.directionCenter}>
                        <label className={styles.label} htmlFor="user">Usuário</label>
                        <input id="user" type="text" placeholder="Informe seu usuário" name="userName" value={user.userName} onChange={(e) => handleInputChange(e)} className={styles.input} />
                    </div>

                    <div className={styles.directionCenter}>
                        <label className={styles.label} htmlFor="password">Senha</label>
                        <input id="password" type="password" placeholder="Digite sua senha" name="password" value={user.password} onChange={(e) => handleInputChange(e)} className={styles.input} />
                    </div>
                </div>

                <div className={styles.directionRow}>
                    <div className={styles.directionCenter}>
                        <label className={styles.label} htmlFor="firstname">Nome</label>
                        <input id="firstname" type="text" placeholder="Digite seu nome" name="firstName" value={user.firstName} onChange={(e) => handleInputChange(e)} className={styles.input} />
                    </div>

                    <div className={styles.directionCenter}>
                        <label className={styles.label} htmlFor="lastname">Sobrenome</label>
                        <input id="lastname" type="text" placeholder="Digite seu sobrenome" name="lastName" value={user.lastName} onChange={(e) => handleInputChange(e)} className={styles.input} />
                    </div>
                </div>

                <div className={styles.directionRow}>
                    <div className={styles.directionCenter}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input id="email" type="text" placeholder="Digite seu e-mail" name="email" value={user.email} onChange={(e) => handleInputChange(e)} className={styles.input} />
                    </div>

                    <div className={styles.directionCenter}>
                        <label className={styles.label} htmlFor="cellnumber">Número Telefone</label>
                        <input id="cellnumber" type="tel" placeholder="Digite seu número" name="phoneNumber" value={user.phoneNumber} onChange={(e) => handleInputChange(e)} className={styles.input} />
                    </div>
                </div>
            </div>

            <button onClick={() => handleRegister()} className={styles.button}>Concluir Registro</button>
            <button onClick={handleCancel} className={styles.button}>Cancelar</button>
        </main>
    );
}