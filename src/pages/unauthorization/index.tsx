import React from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/router';

export const Unauthorization = () => {

    const router = useRouter();

    return (
        <main className={styles.main}>
            <h2 className={styles.title}>Unauthorization</h2>
            <p className={styles.msg}>You cannot access the page.</p>
            <button onClick={() => router.push("/")} className={styles.button}>Back to LoginPage</button>
        </main>
    )
}