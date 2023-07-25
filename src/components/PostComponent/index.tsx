import { Post } from '@/models/types';
import React from 'react';
import { Base64Image } from '../Base64Image';
import styles from './styles.module.css';
import Television from '../../assets/television.png';

type PostComponentProps = {
    post: Post;
}

export const PostComponent = (props: PostComponentProps) => {

    const handleDate = (date: Date) => {
        const d = new Date(date);
        const dateSplited = d.toISOString().split('T');
        const fullDate = dateSplited[0];
        const time = dateSplited[1].replace('Z', '').substring(0, 8);
        return `${fullDate} ${time}`;
    }

    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <div className={styles.postDateContainer}>
                    <h2>{props.post.postCreatedBy}</h2>
                    <p className={styles.postP}>- {handleDate(props.post.postCreatedAt)}</p>
                </div>
                <p className={styles.postMsg}>{props.post.postMsg}</p>
            </div>

            {
                props.post.postImage && <div className={styles.televisionContainer}>
                    <img className={styles.television} src={Television.src} alt="" />
                    <Base64Image base64String={props.post.postImage} />
                </div>
            }

            <div className={styles.divider}></div>
        </main>
    )
}