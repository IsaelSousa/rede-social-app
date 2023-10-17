import styled from 'styled-components';

const Container = styled.main`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 0.5rem;

    border-width: 2px;
    border-style: solid;
    border-color: #000000;

    box-shadow: -2px 2px 0px black;
    border-radius: 10px;

    font-family: 'Kanit';
`;

const PostDateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const PostP = styled.p`
    margin-left: 5px;
    font-weight: bold;
    color: #000;
    font-family: 'Kanit';
`;

const Content = styled.div`
    width: 70%;
    align-items: center;
    justify-content: space-between;

    display: flex;
    flex-direction: row;
`;

const PostMsg = styled.p`
    margin-top: 0.5rem;
    font-family: 'kanit';  
    color: #000;
    padding-right: 1rem;
    padding-left: 1rem;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    border-radius: 10px;
`;

const Button = styled.button`
    border: none;
    background-color: inherit;
    padding: 1.5%;
    margin: 0.1%;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease;

    &:hover {
        cursor: pointer;
        border-radius: 50px;
        background-color: rgba(0, 0, 0, 0.1);
    }

    &:active {
        transform: translateY(-10px);
    }
`;

export {
    Container,
    PostDateContainer,
    PostP,
    Content,
    PostMsg,
    ImageContainer,
    ButtonsContainer,
    Button
};