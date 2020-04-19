import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

const StyledReportFormHandler = styled.div`
    width: 100%;
    transition: .2s;
    position:relative;
    
    ${devices.mobileXL`
        background-color: white;
        border-radius :5px;
        height:90%;
        width: 450px;
        max-height:1000px;
    `}
`;

export default StyledReportFormHandler;