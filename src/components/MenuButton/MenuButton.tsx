import React from 'react';
import { Container, Icon, Title } from './styles';

type MenuButtonType = {
    title: string;
    icon: any;
    onClick?: () => void;
} 

export const MenuButton = (props: MenuButtonType) => {
    
    return (
        <Container onClick={props.onClick}>
            <Icon>{props.icon}</Icon>
            <Title>{props.title}</Title>
        </Container>
    );
}