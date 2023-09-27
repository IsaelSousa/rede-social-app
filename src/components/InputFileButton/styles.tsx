import styled from 'styled-components';

export const Container = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: 5px;
    padding-right: 5px;
    margin: 5px;

    height: 40px;

    border-width: 2px;
    border-style: solid;
    border-color: #000000;

    box-shadow: -3px 3px 0px black;
    border-radius: 10px;
`;

export const Input = styled.input`
    display: none;

    :hover {
        cursor: pointer;
        background-color: rgb(182, 182, 182);
    }
`;

export const Icon = styled.div`
    margin-right: 15px;
    margin-left: 10px;
`;

export const Title = styled.div`
    font-size: 12pt;
    font-family: 'Kanit';
`;