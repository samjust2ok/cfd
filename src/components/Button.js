import React from 'react';
import StyledButton from "../styled/StyledButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Button = ({onClick,children, className})=>{
    return (
        <StyledButton className = {className} onClick = {onClick}>
            {children}
        </StyledButton>
    );
}

export default Button;