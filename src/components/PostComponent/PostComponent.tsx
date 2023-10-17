import { Post } from '@/models/types';
import React, { useEffect, useState } from 'react';
import { Base64Image } from '../Base64Image/Base64Image';
import { Button, ButtonsContainer, Container, Content, ImageContainer, PostDateContainer, PostMsg, PostP } from './styles';
import { AiFillLike } from 'react-icons/ai';
import { BiSolidCommentDetail, BiShare } from 'react-icons/bi';

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
            return `${fullDate.replaceAll('-', '/')} ${time}`;
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
            <ButtonsContainer>
                <Button>
                    <AiFillLike size={25} />
                </Button>
                <Button>
                    <BiSolidCommentDetail size={25} />
                </Button>
                <Button>
                    <BiShare size={25} />
                </Button>
            </ButtonsContainer>

        </Container>
    )
}