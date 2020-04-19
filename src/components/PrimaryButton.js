import React from 'react';
import StyledButton from "../styled/StyledButton";
import styled from 'styled-components';
import theme from '../constants/theme';


const PrimaryButton = ({onClick,children, className})=>{
    return (
        <StyledPrimaryButton className = {className} onClick = {onClick}>
            {children}
        </StyledPrimaryButton>
    );
}

const StyledPrimaryButton = styled(StyledButton)`
    border-radius:5px;
    background-color: ${theme.mainBlue};
    background-image:none;

    :hover{
        background-image:none;
    }
`;
export default PrimaryButton;