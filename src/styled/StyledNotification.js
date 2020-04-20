import styled, { keyframes} from 'styled-components';
import { animated } from 'react-spring';
import { devices } from '../utils/styledUtils';

const up =  keyframes`
    0% {
      transform: translateY(-25px)
    }
    100% {
        transform: translateY(0px)
    }
`

const StyledNotification = styled.div`

    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    align-items:center;
    justify-content:center;
    z-index: 999;
    background-color: #03203e94;

    .Content{
        position:absolute;
        box-shadow: 0px 0px 1000px 1000px ${props=>props.theme.overlay};
        border-radius: 15px 15px 0 0;
        display:flex;
        align-items:center;
        justify-content:center;
        padding: 30px;
        z-index:1000;
        width:100%;
        height:60%;
        bottom:0;
        left:0;
        background-color:white;
        flex-direction:column;

        i{
            animation: ${up} .4s ease-out;
            animation-delay:1s;
            background: ${props=>`-webkit-linear-gradient(45deg,${props.theme.lnGrad1},${props.theme.lnGrad2})`};
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
        }

        .error{
            background: -webkit-linear-gradient(45deg,#ff0808,#ff000000);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        p{
            font-size:20px;
            margin: 50px 0;
            text-align:center;
            line-height:30px;

            span{
                font-weight:bolder;
                border-bottom: 2px solid ${props=>props.theme.dscBlue}
            }
        }

        button{
            height: 60px;
            width:60px;
            border-radius:50%;
            box-shadow: -3px 3px 10px rgba(0,0,0,.07);
            background: ${props=>props.theme.lnGrad3};
            border:none;
            color:white; 
            font-weight:600;
            font-size:14px;
        }
    }

    ${devices.mobileXL`
        .Content{
            max-width:500px;
            width:80%;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            border-radius:15px;
        }
    `}
`;

export default animated(StyledNotification);