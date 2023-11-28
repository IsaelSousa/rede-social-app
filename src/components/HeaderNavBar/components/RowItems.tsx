import { FriendList } from '@/models/types';
import { acceptRequest } from '@/services/api';
import { Utils } from '@/shared/utils/utils';
import React from 'react';
import styled from 'styled-components';
import { Notification } from '@/shared/utils/notification';

type RowItemsProps = {
    data: Array<FriendList>;
}

export const RowItems: React.FC<RowItemsProps> = ({ data }) => {

    const handleOnClick = (data: string) => {
        acceptRequest(Utils.EncryptData(data))
        .subscribe({
            complete: () => {},
            error: () => Notification.Error('Error to accept request.'),
            next: () => {}
        })
    }

    return (
        <Container>
            <h1 style={{ fontFamily: 'Kanit' }}>Friends</h1>
            {data.map((vl, idx) => (
              <HeaderComponent key={idx}>
                {vl.userName}
                <ButtonAccept onClick={() => {}}>
                    Accept
                </ButtonAccept>
              </HeaderComponent>  
            ))}
        </Container>
    );
};

const Container = styled.main`
    width: 100%;
    height: auto;
    display: flex;
    overflow-y: auto;
    align-items: center;
    flex-direction: column;
`;

const HeaderComponent = styled.div`
    width: 95%;
    height: 30px;
    background-color: #646464;
    color: #FFF;
    font-size: 18pt;
    margin: 5px;
    padding: 5px;
    border-radius: 4px;
    font-family: 'Kanit';
    display: flex;
    justify-content: space-between;
`;

const ButtonAccept = styled.button`
    padding-left: 15px;
    padding-right: 15px;
    border-style: none;
    border-radius: 5px;
    background-color: #1d1d1d;
    color: #FFF;

    &:hover {
        cursor: pointer;
    }
`;