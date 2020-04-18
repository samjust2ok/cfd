import styled from 'styled-components';

const StyledLandingPage = styled.div`
    width:100%;
`;

const Navigation = styled.nav`
    width:100%;
    height:70px;
    
    position:fixed;

    &.Show{
        box-shadow: 0px 1px 4px rgba(0,0,0,.08);
        background:white;
    }
`;

const Header = styled.nav`
    width:100%;
    height:100vh;
    background:white;
`;


export {StyledLandingPage as default, Navigation, Header}