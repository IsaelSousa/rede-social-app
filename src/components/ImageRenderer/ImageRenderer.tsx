import React from 'react';
import { Button, Img } from './styles';

type ImageRendererType = {
    src: string;
    onClick?: () => void;
}

export const ImageRenderer = (props: ImageRendererType) => {
    return (
        <main>
            <Button onClick={props.onClick}>
                X
            </Button>
            <Img src={props.src} />
        </main>
    );
}