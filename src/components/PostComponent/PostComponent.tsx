import { Post } from '@/models/types';
import React, { useEffect, useState } from 'react';
import { Base64Image } from '../Base64Image/Base64Image';
import { Container, Content, ImageContainer, PostDateContainer, PostMsg, PostP } from './styles';

type PostComponentProps = {
    post: Post;
}

export const PostComponent = (props: PostComponentProps) => {

    const [width, setWidth] = useState<string>('');
    const [height, setHeight] = useState<string>('');

    const handleDate = (date: Date) => {
        if (date != null) {
            const d = new Date(date);
            const dateSplited = d.toISOString().split('T');
            const fullDate = dateSplited[0];
            const time = dateSplited[1].replace('Z', '').substring(0, 8);
            return `${fullDate} ${time}`;
        } else {
            return '';
        }
    }

    useEffect(() => {

        setWidth(window.innerWidth.toString());
        setHeight(window.innerHeight.toString());

    }, [window.innerWidth, window.innerHeight]);

    return (
        <Container>
            <Content>
                <PostDateContainer>
                    <h2 style={{ color: '#000' }}>{props.post.firstName}</h2>
                </PostDateContainer>
                <div>
                    <PostP>{handleDate(props.post.createdAt)}</PostP>
                </div>
            </Content>

            {
                props.post.image ? (
                    <>
                        <PostMsg>{props.post.postMessage}</PostMsg>

                        <ImageContainer>
                            <Base64Image
                                base64String={props.post.image}
                                height={height}
                                width={width}
                            />
                        </ImageContainer>
                    </>
                ) : (
                    <div style={{ marginBottom: '3%' }}>
                        <PostMsg>{props.post.postMessage}</PostMsg>
                    </div>
                )
            }
        </Container>
    )
}