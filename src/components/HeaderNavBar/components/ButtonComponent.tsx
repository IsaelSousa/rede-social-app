import { Tooltip } from '@mui/material';
import styled from 'styled-components';

type ButtonProps = {
    onClick?: () => void;
    tooltip: string;
    icon: JSX.Element;
}

export const ButtonData: React.FC<ButtonProps> = ({ onClick, tooltip, icon }) => {
    return (
        <Tooltip title={tooltip}>
            <ButtonStyled
                onClick={onClick}
            >
                {icon}
            </ButtonStyled>
        </Tooltip>
    )
}

const ButtonStyled = styled.button`
    padding-left: 5%;
    padding-right: 5%;
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

    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: #696969;
    }

`;

