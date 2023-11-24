import { HeadLinksComponent } from '@/components/shared/HeadLinksComponent/HeadLinksComponent';
import React from 'react';
import styles from './styles.module.css';
import { AsideMenu } from '@/components/AsideMenu/AsideMenu';
import { HeaderNavBar } from '@/components/HeaderNavBar/HeaderNavBar';

export default function Profile() {
    return (
        <main>
            <HeadLinksComponent title='HomePage' />
            <HeaderNavBar />
            <div className={styles.content}>
                <aside className={styles.asideContent}>
                    <AsideMenu />
                </aside>
            </div>
        </main>
    );
}