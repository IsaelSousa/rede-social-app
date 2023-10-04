import React from 'react';
import { Container, ImageContainer } from './styles';
import { Image } from 'primereact/image';

type ImageRendererType = {
    src: string;
    onClick?: () => void;
}

export const ImageRenderer = (props: ImageRendererType) => {
    return (
        <Container>
            <ImageContainer className="card flex justify-content-center">
                <Image src={props.src} alt="Image" width='100' preview />
            </ImageContainer>
        </Container>
    );
}