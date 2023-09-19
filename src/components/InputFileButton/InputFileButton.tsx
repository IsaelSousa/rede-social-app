import React, { useRef } from 'react';
import { Container, Icon, Input, Title } from './styles';

type InputFileButtonType = {
    title: string;
    icon: any;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
} 

export const InputFileButton = (props: InputFileButtonType) => {
    const fileRef = useRef(null);
    
    return (
        <main>
            <Input type="file" ref={fileRef} onChange={props.onChange} />
            <Container onClick={() => fileRef.current.click()}>
                <Icon>{props.icon}</Icon>
                <Title>{props.title}</Title>
            </Container>
        </main>
    );
}