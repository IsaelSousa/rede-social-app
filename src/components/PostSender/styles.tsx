import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 22pt;
    font-family: 'Kanit';
    color: #010101;
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 75%;

    flex-direction: row;
    align-items: center;
    justify-content:end;
    margin-top: 0.5rem;
`;

const TextAreaStyled = styled.textarea`
    width: inherit;
    padding: 5px;
    border-radius: 10px;
    resize: none;

    border-width: 2px;
    border-style: solid;
    border-color: #000000;

    box-shadow: -2px 2px 0px black;
    border-radius: 10px;
`;

const Divider = styled.div`
    height: 1px;
    width: 80%;
    background: rgb(95, 95, 95);
    margin: 20px;
`;

export {
    Container,
    Title,
    ButtonContainer,
    TextAreaStyled,
    Divider
};