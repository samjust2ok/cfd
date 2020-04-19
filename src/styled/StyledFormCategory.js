import styled from 'styled-components';
import { devices } from '../utils/styledUtils';
import { animated } from 'react-spring';

let StyledFormCategory = styled.div`
    height: 100%;
    width:100%;
    flex-shrink:0;
    position:relative;
    display:grid;
    grid-template-rows: 70px 1fr;
    grid-template-columns:1fr;
    overflow:hidden;

    .FormHeader{
        display:flex;
        align-items:center;
        justify-content:space-between;
        height:100%;
        box-shadow: 0px 2px 6px rgba(0,0,0,.05);
        padding:0 24px;

        h1{
            font-weight:600;
            font-size:20px;
        }
    }

    .FormContent{

        width:100%;
        height:100%;
        padding:20px 24px;
    
        .Indicator{
                display:flex;
                justify-content:flex-end;
            .Ind{
                background-color: ${props=>props.theme.lnGrad2};
                box-shadow:0px 2px 2px rgba(0,0,0,.1);
                padding:3px 10px;
                font-size:14px;
                border-radius:4px;
                color:white;
                p{
                    b{
                        flex-shrink:0;
                    }
                }
            }
        }
        .MainContent{
            margin-top:20px;
            .Content{
            width:100%;

            .Fields{
                width: 100%;
                overflow-y:scroll;


                .Two-Field-Phone{
                        display:grid;
                        width:100%;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 1fr;
                        grid-column-gap:15px;

                        .Selector{
                            margin:20px 0 10px 0;
                        }
                }

                .Icon-Side-Field{
                    display:grid;
                    grid-template-columns:90% 10%;
                    grid-template-rows:1fr;
                    grid-column-gap:15px;
                }

                .ActionButtons{
                    width:100%;
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    margin-top:60px;
                }
            }
        }
        }
    }

    ${devices.mobileXL`
        grid-template-rows: 60px 1fr;

        .FormHeader{
            h1{
                font-size:25px;
            }
        }
        .FormContent{
            padding:0;
                .Content{
                display: flex;

                .Fields{
                    width:100%;

                    .Field-Layout{
                        margin:20px 0;
                    }
                    .Two-Field{
                        display:grid;
                        width:100%;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 1fr;
                        grid-column-gap:15px;
                    }
                    .Two-Field-Phone{
                        .Selector{
                            margin:10px 0;
                        }
                }


                }
            }
        }
    `}

    ${devices.laptop`
        .FormContent{
                .Content{
                display:block;
            } 
        }
    `}

`;

StyledFormCategory = animated(StyledFormCategory);

export default StyledFormCategory;