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

export {
    Container,
    PostDateContainer,
    PostP,
    Content,
    PostMsg,
    ImageContainer
};