import React from 'react';
import { MenuButton } from '../MenuButton/MenuButton';
import { MdFeed } from 'react-icons/Md';
import { BsFillChatTextFill, BsWrenchAdjustableCircleFill } from 'react-icons/Bs';
import { CgProfile } from 'react-icons/Cg';
import { useSelector } from '@/context/provider';
import router from 'next/router';
import { Container } from './styles';

export const AsideMenu = () => {

    const { userName } = useSelector((store) => { return store });

    return (
        <Container>
            <MenuButton title="Feed" icon={<MdFeed size={30} />} onClick={() => {
                if (router.asPath != "/homepage") {
                    router.push('/homepage');
                }
            }} />
            <MenuButton title="Chat" icon={<BsFillChatTextFill size={25} />} />
            <MenuButton title="Profile" icon={<CgProfile size={25} />} onClick={() => {
                if (router.asPath != "/profile") {
                    router.push('/profile');
                }
            }} />
            <MenuButton title="Configuration" icon={<BsWrenchAdjustableCircleFill size={25} />} />
        </Container>
    );
}
