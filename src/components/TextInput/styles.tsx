import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Label = styled.label`
    font-size: 16pt;
    font-family: 'Kanit';
    color: #010101;
`;

const Input = styled.input`
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 10%;
    padding-right: 10%;
    margin: 0.5rem;
    text-align: center;

    border-width: 2px;
    border-style: solid;
    border-color: #000000;

    box-shadow: -3px 3px 0px black;
    border-radius: 20px;

    font-family: 'Kanit';
    font-weight: bold;
    font-size: 14pt;
`;

export {
    Container,
    Label,
    Input
};