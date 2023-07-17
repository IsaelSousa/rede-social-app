import React from 'react';
import styles from './styles.module.css';

type ImageRendererType = {
    src: string;
    onClick?: () => void;
}

export const ImageRenderer = (props: ImageRendererType) => {
    return (
        <main>
            <button className={styles.button} onClick={props.onClick}>
                X
            </button>
            <img src={props.src} className={styles.img} />
        </main>
    );
}