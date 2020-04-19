import styled from 'styled-components';

const buttonHeight = 50;

const StyledButton = styled.button`
    background-image: ${props=>`linear-gradient(45deg, ${props.theme.lnGrad1} 0%, ${props.theme.lnGrad2} 100%);`};
    display:flex;
    align-items:center;
    padding: 0 20px;
    height:${buttonHeight+ 'px'};
    border:none;
    font-size: 16px;
    border-radius: ${buttonHeight/2 + 'px'};
    transition: all .2 ease-in;
    color:white;

    :hover{
        background-image: ${props=>`linear-gradient(45deg, ${props.theme.lnGrad3} 0%, ${props.theme.lnGrad2} 100%);`};
    }
`;

export default StyledButton;