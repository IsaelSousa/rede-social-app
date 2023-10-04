import styled from 'styled-components';

const NavContainer = styled.nav`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
`;

const NavDivA = styled.nav`
    display: flex;
    width: 25%;
    justify-content: flex-start;
`;

const NavDivB = styled.nav`
    width: 25%;
`;

const NavDivC = styled.nav`
    width: 25%;
`;

const NavDivD = styled.nav`
    display: flex;
    width: 25%;
    justify-content: flex-end;
`;

const MainButton = styled.button`
    display: flex;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    font-size: 22pt;
    font-family: 'Kanit';
    font-weight: bold;
    background-color: inherit;
    color: #010101;
    border: none;
    background-color: none;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        text-shadow: 0px 0px 6px #919191;  
    }
`;

const LogoutButton = styled.button`
    padding-left: 10%;
    padding-right: 10%;
    font-size: 12pt;
    font-family: 'Kanit';
    font-weight: 500;
    background-color: #F1F1F1;
    color: #010101;
    border: none;
    border-radius: 5px;
    margin: 0.3rem;
    border-width: 2px;
    border-style: solid;
    border-color: #000000;
    box-shadow: -3px 3px 0px black;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        background-color: #696969;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    height: calc(100vh - 50px);
`;

const AsideContent = styled.aside`
    width: 250px;
`;

export {
    NavContainer,
    NavDivA,
    NavDivB,
    NavDivC,
    NavDivD,
    MainButton,
    LogoutButton,
    Content,
    AsideContent
}
