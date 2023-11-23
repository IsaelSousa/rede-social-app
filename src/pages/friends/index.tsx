import { HeadLinksComponent } from '@/components/shared/HeadLinksComponent/HeadLinksComponent';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { AsideMenu } from '@/components/AsideMenu/AsideMenu';
import router from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';
import { CookiesEnum, ResponseData } from '@/models/types';
import TextInput from '@/components/TextInput/TextInput';
import { MenuButton } from '@/components/MenuButton/MenuButton';
import { BiSolidUser } from 'react-icons/bi';
import { Container } from './styles';
import { getRequestInvite, inviteFriend } from '@/services/api';
import { Utils } from '@/shared/utils/utils';

export default function Friends() {

    const [input, setInput] = useState<string>('');
    const [requestsInvite, setRequestsInvite] = useState<string>('');

    const handleHomePage = () => {
        if (router.asPath != '/homepage') {
            router.push('/homepage');
        }
    }

    const handleLogout = () => {
        router.push('/');
        axios.defaults.headers.common['Authorization'] = undefined;
        Cookies.remove(CookiesEnum.Auth);
    }

    const sendInvite = () => {
        const data = {
            UserId: "",
            FriendUserName: input
        };
        const hash = Utils.EncryptData(data);
        inviteFriend(hash)
            .subscribe({
                complete: () => { },
                next: (data: any) => {
                    console.log(data)
                },
                error: () => { }
            });
    }

    const listRequest = () => {
        getRequestInvite()
            .subscribe({
                complete: () => { },
                next: (resp) => {
                    console.log('a', resp as ResponseData);
                }
            })
    }

    useEffect(() => {
        listRequest();
    }, []);

    return (
        <main>
            <HeadLinksComponent title='HomePage' />
            <nav className={styles.nav}>
                <div className={styles.navDivA}>
                    <button
                        className={styles.mainButton}
                        onClick={handleHomePage}>
                        Social Network
                    </button>
                </div>
                <div className={styles.navDivB}></div>
                <div className={styles.navDivC}></div>
                <div className={styles.navDivD}>
                    <button
                        className={styles.logoutButton}
                        onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </nav>

            <div className={styles.content}>
                <aside className={styles.asideContent}>
                    <AsideMenu />
                </aside>
                <div className={styles.mainContent}>
                    <div style={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
                        <TextInput
                            text={input}
                            setText={(e) => setInput(e)}
                            placeholder="Friend 'UserName'"
                            label='Add Friend'
                        />
                        <MenuButton
                            title='Send Request'
                            icon={<BiSolidUser size={25} />}
                            onClick={() => sendInvite()}
                        />
                    </div>
                </div>
                {/* <div className={styles.mainContent}>
                    <div style={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
                        <TextInput
                            text={input}
                            setText={(e) => setInput(e)}
                            placeholder="Friend 'UserName'"
                            label='Add Friend'
                        />
                        <MenuButton
                            title='Send Request'
                            icon={<BiSolidUser size={25} />}
                            onClick={() => sendInvite()}
                        />
                    </div>
                </div> */}
                <div className={styles.asideRight}></div>
            </div>
        </main>
    );
}