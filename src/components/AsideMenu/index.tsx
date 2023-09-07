import React from 'react';
import { MenuButton } from '../MenuButton';
import styles from './styles.module.css';
import { MdFeed } from 'react-icons/Md';
import { BsFillChatTextFill, BsWrenchAdjustableCircleFill } from 'react-icons/Bs';
import { CgProfile } from 'react-icons/Cg';
import { useSelector } from '@/context/provider';
import router from 'next/router';

export const AsideMenu = () => {

    const { userName } = useSelector((store) => { return store });

    return (
        <main className={styles.container}>
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
        </main>
    );
}
