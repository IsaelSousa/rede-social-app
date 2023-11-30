import React from 'react';
import { MenuButton } from '../MenuButton/MenuButton';
import { MdFeed } from 'react-icons/Md';
import { BsFillChatTextFill, BsWrenchAdjustableCircleFill } from 'react-icons/Bs';
import { FaUserFriends } from 'react-icons/fa';
import { CgProfile } from 'react-icons/Cg';
import router from 'next/router';
import { Container } from './styles';

enum AsideMenuEnum {
    HomePage = 'homepage',
    Friends = 'friends',
    Chat = 'chat',
    Profile = 'profile',
    Configuration = 'configuration'
}

type AsideMenuProps = 'homepage' | 'chat' | 'profile' | 'configuration';

export const AsideMenu = () => {

    const handleNavigate = (data: AsideMenuProps) => {
        switch (data) {
            case AsideMenuEnum.HomePage:
                if (router.asPath != '/homepage') {
                    router.push('/homepage');
                }
                break;
            case AsideMenuEnum.Chat:
                break;
            case AsideMenuEnum.Profile:
                if (router.asPath != '/profile') {
                    router.push('/profile');
                }
                break;
            case AsideMenuEnum.Configuration:
                break;
        }
    }

    return (
        <Container>
            <MenuButton title="Feed" icon={<MdFeed size={30} />} onClick={() => handleNavigate('homepage')} />
            <MenuButton title="Chat" icon={<BsFillChatTextFill size={25} />} />
            <MenuButton title="Profile" icon={<CgProfile size={25} />} onClick={() => handleNavigate('profile')} />
            <MenuButton title="Configuration" icon={<BsWrenchAdjustableCircleFill size={25} />} />
        </Container>
    );
}
