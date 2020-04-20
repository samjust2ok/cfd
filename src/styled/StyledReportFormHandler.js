import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

const StyledReportFormHandler = styled.div`
    width: 100%;
    transition: .2s;
    position:relative;
    transition: width .2s;
    box-shadow: 0px 0px 13px 2px rgba(0,0,0,.05);
    
    ${devices.mobileXL`
        background-color: white;
        border-radius :5px;
        height:100%;
        width: 450px;
        height:90%;
        display:flex;
        align-items:flex-start;
        max-height:800px;
    `}

    ${devices.tabletL`
        align-items:center;
        background-color: white;
        border-radius :5px;
        width: 100%;
        height:100%;
    `}
`;

export default StyledReportFormHandler;