import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import router from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';
import { CookiesEnum, FriendList, ResponseData } from '@/models/types';
import Modal from 'react-modal';
import { RowItems } from './components/RowItems';
import { getRequestInvite } from '@/services/api';

type HeaderNavBarProps = {
    initialButton?: () => void;
}

export const HeaderNavBar: React.FC<HeaderNavBarProps> = ({ initialButton }) => {

    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [data, setData] = useState<Array<FriendList>>([]);

    const onClose = () => setIsOpen(false);

    const onComplete = () => setIsOpen(true);

    const handleLogout = () => {
        router.push('/');
        axios.defaults.headers.common['Authorization'] = undefined;
        Cookies.remove(CookiesEnum.Auth);
    }

    const handleHomePage = () => {
        if (router.asPath != '/homepage') {
            router.push('/homepage');
        }

        if (initialButton) {
            initialButton();
        }
    }

    useEffect(() => {
        getRequestInvite()
        .subscribe({
           next: (value: ResponseData<Array<FriendList>>) => value.data ? setData(value.data) : []
        })
    }, []);

    return (
        <nav className={styles.nav}>
            <div className={styles.navDivA}>
                <button
                    className={styles.mainButton}
                    onClick={handleHomePage}>
                    Social Network
                </button>
            </div>
            <div className={styles.navDivB}></div>
            <div className={styles.navDivC}>
            </div>
            <div className={styles.navDivD}>
                <button 
                onClick={onComplete}
                className={styles.logoutButton}
                >
                    Friends
                </button>
                <button
                    className={styles.logoutButton}
                    onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={onClose}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      },
                      content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                      }
                }}
            >
                <RowItems data={data} />
            </Modal>
        </nav>
    );
}