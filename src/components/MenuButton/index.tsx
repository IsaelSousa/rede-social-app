import React from 'react';
import styles from './styles.module.css';

type MenuButtonType = {
    title: string;
    icon: any;
} 

export const MenuButton = (props: MenuButtonType) => {
    
    return (
        <button className={styles.container}>
            <div className={styles.icon}>{props.icon}</div>
            <div className={styles.title}>{props.title}</div>
        </button>
    );
}