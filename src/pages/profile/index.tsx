import { HeadLinksComponent } from '@/components/shared/HeadLinksComponent/HeadLinksComponent';
import React from 'react';
import styles from './styles.module.css';
import { AsideMenu } from '@/components/AsideMenu/AsideMenu';
import router from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';
import { CookiesEnum } from '@/models/types';

export default function Profile() {

    const handleHomePage = () => {
        if (router.asPath != "/homepage") {
          router.push('/homepage'); 
        }
      }

      const handleLogout = () => {
        router.push('/');
        axios.defaults.headers.common['Authorization'] = undefined;
        Cookies.remove(CookiesEnum.Auth);
      }

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
            </div>
        </main>
    );
}