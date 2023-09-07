import { Post } from '@/models/types';
import React, { useEffect, useState } from 'react';
import { Base64Image } from '../Base64Image';
import styles from './styles.module.css';
import Television from '../../assets/television.png';

type PostComponentProps = {
    post: Post;
}

export const PostComponent = (props: PostComponentProps) => {

    const [width, setWidth] = useState<string>('');
    const [height, setHeight] = useState<string>('');

    const handleDate = (date: Date) => {
        const d = new Date(date);
        const dateSplited = d.toISOString().split('T');
        const fullDate = dateSplited[0];
        const time = dateSplited[1].replace('Z', '').substring(0, 8);
        return `${fullDate} ${time}`;
    }

    useEffect(() => {

        setWidth(window.innerWidth.toString());
        setHeight(window.innerHeight.toString());

    }, [window.innerWidth, window.innerHeight]);

    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <div className={styles.postDateContainer}>
                    <h2 style={{ color: '#000' }}>{props.post.postCreatedBy}</h2>
                </div>
                <div>
                    <p className={styles.postP}>{handleDate(props.post.postCreatedAt)}</p>
                </div>
            </div>
            <p className={styles.postMsg}>{props.post.postMsg}</p>

            {
                props.post.postImage && <div className={styles.televisionContainer}>
                    <Base64Image
                        base64String={props.post.postImage}
                        height={height}
                        width={width}
                    />
                </div>
            }
        </main>
    )
}