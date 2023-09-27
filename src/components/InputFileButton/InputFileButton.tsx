import React, { useRef } from 'react';
import { Container, Icon, Input, Title } from './styles';

type InputFileButtonType = {
    title: string;
    icon: any;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
} 

export const InputFileButton = (props: InputFileButtonType) => {
    const initialRef: any = null;
    const fileRef = useRef(initialRef);

    return (
        <main>
            <Input type="file" ref={fileRef} onChange={props.onChange} />
            <Container onClick={() => fileRef.current ? fileRef.current.click() : null}>
                <Icon>{props.icon}</Icon>
                <Title>{props.title}</Title>
            </Container>
        </main>
    );
}