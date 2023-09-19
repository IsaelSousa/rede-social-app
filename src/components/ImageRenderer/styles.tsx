import styled from 'styled-components';

export const Img = styled.img`
    width: 300px;
    height: 200px;
    margin: 1rem;
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

    font-size: 15pt;
    font-weight: bold;

    position: absolute;
    z-index: 998;

    :hover {
        cursor: pointer;
    }
`;