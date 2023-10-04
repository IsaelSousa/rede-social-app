import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
`;

export const ImageContainer = styled.div`
    width: 20px;
    z-index: 1;
    display: flex;
    justify-content: center;

`;

export const Button = styled.button`
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
    padding: 10px;
    border-radius: 20px;
    border: none;
    box-shadow: -2px 3px 0px black;
    border: 2px solid black;

    font-size: 15pt;
    font-weight: bold;

    transition: 300ms;

    &:hover {
        width: 40px;
        height: 40px;
        transition: 300ms;
        cursor: pointer;
    }
`;