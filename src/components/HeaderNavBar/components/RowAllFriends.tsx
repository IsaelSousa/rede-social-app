import { FriendList } from "@/models/types";
import { useState } from "react";
import styled from "styled-components";

type RowAllFriendsProps = {
    data: Array<FriendList>;
}


export const RowAllFriends: React.FC<RowAllFriendsProps> = ({ data }) => {

    return (
        <Container>
            <h1 style={{ fontFamily: 'Kanit' }}>Friends List</h1>
            {
                data.map((vl, idx) => (
                    <HeaderComponent key={idx}>
                        {vl.userName}
                    </HeaderComponent>
                ))
            }
        </Container >
    )
}

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