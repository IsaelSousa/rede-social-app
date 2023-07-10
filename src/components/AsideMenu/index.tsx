import React from 'react';
import { MenuButton } from '../MenuButton';
import styles from './styles.module.css';
import { MdFeed } from 'react-icons/Md';
import { BsFillChatTextFill, BsWrenchAdjustableCircleFill } from 'react-icons/Bs';
import { CgProfile } from 'react-icons/Cg';

export const AsideMenu = () => {
    
    return (
        <main className={styles.container}>
            <MenuButton title="Feed" icon={<MdFeed size={30} />} />
            <MenuButton title="Chat" icon={<BsFillChatTextFill size={25} />} />
            <MenuButton title="Profile" icon={<CgProfile size={25} />} />
            <MenuButton title="Configuration" icon={<BsWrenchAdjustableCircleFill size={25} />} />
        </main>
    );
}
