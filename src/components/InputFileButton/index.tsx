import React, { useRef } from 'react';
import styles from './styles.module.css';

type InputFileButtonType = {
    title: string;
    icon: any;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
} 

export const InputFileButton = (props: InputFileButtonType) => {
    const fileRef = useRef(null);
    
    return (
        <main>
            <input type="file" ref={fileRef} className={styles.input} onChange={props.onChange} />
            <label className={styles.container} onClick={() => fileRef.current.click()}>
                <div className={styles.icon}>{props.icon}</div>
                <div className={styles.title}>{props.title}</div>
            </label>
        </main>
    );
}