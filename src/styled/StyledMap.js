import styled from 'styled-components';

const StyledMap = styled.div`
    height:100vh;
    width:100vw;
    position:relative;

    & > div{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
    
`;

export default StyledMap;