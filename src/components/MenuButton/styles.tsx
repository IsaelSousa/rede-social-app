import styled from 'styled-components';

const Container = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 5px;

    border: none;
    border-radius: 5px;
    background-color: #F1F1F1;

    height: 40px;

    border-width: 2px;
    border-style: solid;
    border-color: #000000;

    box-shadow: -3px 3px 0px black;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        background-color: rgb(182, 182, 182);
    }
`;

const Icon = styled.div`
    margin-right: 15px;
    margin-left: 10px;
`;

const Title = styled.div`
    font-size: 12pt;
    font-family: 'Kanit';
`;

export { 
    Container,
    Icon,
    Title
 };