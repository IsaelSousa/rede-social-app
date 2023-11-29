import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import router from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';
import { CookiesEnum, FriendList, ResponseData } from '@/models/types';
import Modal from 'react-modal';
import { RowItems } from './components/RowItems';
import { getRequestInvite, inviteFriend } from '@/services/api';
import TextInput from '../TextInput/TextInput';
import { MenuButton } from '../MenuButton/MenuButton';
import { BiSolidUser } from 'react-icons/bi';
import { Utils } from '@/shared/utils/utils';
import { Notification } from '@/shared/utils/notification';
import { FaUserFriends } from 'react-icons/fa';
import { FaPersonCirclePlus } from 'react-icons/fa6';
import Tooltip from '@mui/material/Tooltip';

type HeaderNavBarProps = {
    initialButton?: () => void;
}

export const HeaderNavBar: React.FC<HeaderNavBarProps> = ({ initialButton }) => {

    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [data, setData] = useState<Array<FriendList>>([]);
    const [input, setInput] = useState<string>('');
    const [changeStatus, setChangeStatus] = useState<boolean>(false);

    const onClose = () => setIsOpen(false);

    const onComplete = () => setIsOpen(true);

    const handleLogout = () => {
        router.push('/');
        axios.defaults.headers.common['Authorization'] = undefined;
        Cookies.remove(CookiesEnum.Auth);
    }

    const handleHomePage = () => {
        if (router.asPath != '/homepage') {
            router.push('/homepage');
        }

        if (initialButton) {
            initialButton();
        }
    }

    const sendInvite = () => {
        const data = {
            UserId: "",
            FriendUserName: input
        };
        const hash = Utils.EncryptData(data);
        inviteFriend(hash)
            .subscribe({
                complete: () => { },
                next: (data: any) => {
                    Notification.Success(data['message']);
                },
                error: () => Notification.Error('Error to send invite')
            });
    }

    const handleGetRequest = () => {
        getRequestInvite()
            .subscribe({
                next: (value: ResponseData<Array<FriendList>>) => value.data ? setData(value.data) : []
            });
    }

    useEffect(() => {
        if (changeStatus) handleGetRequest();
    }, [changeStatus]);

    useEffect(() => {
        if (modalIsOpen) handleGetRequest();
        if (!modalIsOpen) setData([]);
    }, [modalIsOpen]);

    return (
        <nav className={styles.nav}>
            <div className={styles.navDivA}>
                <button
                    className={styles.mainButton}
                    onClick={handleHomePage}>
                    Social Network
                </button>
            </div>j
            <div className={styles.navDivB}></div>
            <div className={styles.navDivC}>
            </div>
            <div className={styles.navDivD}>
                <Tooltip title='Add Friend'>
                    <button
                        onClick={onComplete}
                        className={styles.buttonIcon}
                    >
                        <FaPersonCirclePlus size={20} />
                    </button>
                </Tooltip>

                <Tooltip title='List Users'>
                    <button
                        className={styles.buttonIcon}
                    >
                        <FaUserFriends size={20} />
                    </button>
                </Tooltip>

                <button
                    className={styles.logoutButton}
                    onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={onClose}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                    }
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <TextInput
                        text={input}
                        setText={(e) => setInput(e)}
                        placeholder="Friend 'UserName'"
                    />
                    <MenuButton
                        title='Send Request'
                        icon={<BiSolidUser size={25} />}
                        onClick={() => sendInvite()}
                    />
                </div>
                <RowItems data={data} />

            </Modal>
        </nav>
    );
}