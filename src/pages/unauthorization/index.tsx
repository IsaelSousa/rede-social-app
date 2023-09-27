import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/router';

export const Unauthorization = () => {

    const router = useRouter();
    const [counter, setCounter] = useState<number>(5);
    const [intervalFn, setIntervalFn] = useState<any>(null);

    const handleCountDown = setInterval(() => {
            if (counter > 0) {
                setCounter(counter - 1);
            }
    }, 1000);

    useEffect(() => {
        setIntervalFn(handleCountDown);

        if (counter == 0) {
            router.push("/");
        }

        return () => {
            if (intervalFn) {
                clearInterval(intervalFn);
            }
        }
    }, [counter]);

    return (
        <main className={styles.main}>
            <h2 className={styles.title}>Unauthorization</h2>
            <p className={styles.msg}>You cannot access the page without authentication</p>
            <p className={styles.msg}>{counter}</p>
        </main>
    )
}