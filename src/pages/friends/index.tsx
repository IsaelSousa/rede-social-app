import { HeadLinksComponent } from '@/components/shared/HeadLinksComponent/HeadLinksComponent';
import React, { useState } from 'react';
import styles from './styles.module.css';
import { AsideMenu } from '@/components/AsideMenu/AsideMenu';
import TextInput from '@/components/TextInput/TextInput';
import { MenuButton } from '@/components/MenuButton/MenuButton';
import { BiSolidUser } from 'react-icons/bi';
import { inviteFriend } from '@/services/api';
import { Utils } from '@/shared/utils/utils';
import { HeaderNavBar } from '@/components/HeaderNavBar/HeaderNavBar';

export default function Friends() {

    const [input, setInput] = useState<string>('');

    const sendInvite = () => {
        const data = {
            UserId: "",
            FriendUserName: input
        };
        const hash = Utils.EncryptData(data);
        inviteFriend(hash)
            .subscribe({
                complete: () => {},
                next: (data: any) => {},
                error: () => {}
            });
    }

    return (
        <main>
            <HeadLinksComponent title='HomePage' />
            <HeaderNavBar />

            <div className={styles.content}>
                <aside className={styles.asideContent}>
                    <AsideMenu />
                </aside>
                <div className={styles.mainContent}>
                    <div style={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
                        <TextInput
                            text={input}
                            setText={(e) => setInput(e)}
                            placeholder="Friend 'UserName'"
                            label='Add Friend'
                        />
                        <MenuButton
                            title='Send Request'
                            icon={<BiSolidUser size={25} />}
                            onClick={() => sendInvite()}
                        />
                    </div>
                </div>
                <div className={styles.asideRight}></div>
            </div>
        </main>
    );
}