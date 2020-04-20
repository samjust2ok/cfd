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
        box-shadow: 0px 2px 6px rgba(0,0,0,.05);
        .Content{
            display:flex;
            align-items:center;
            justify-content:space-between;
            height:100%;
            padding:0 24px;

            h1{
                font-weight:600;
                font-size:20px;
            }
        }

        .Indicator{
            display:none;
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
                overflow-y:auto;


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

                .One-Field-Phone{
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
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
        grid-template-rows: 80px 1fr;
        max-height: 800px;
        padding-bottom:20px;

        .FormHeader{
            box-shadow:none;
            display:flex;
            justify-content:space-between;
            padding:0 24px;
            align-items:center;
            .Content{
                    flex-direction: row-reverse;
                    justify-content:flex-end;
                    padding:0;
                    h1{
                    font-size:20px;
                    margin-left:15px;
                }
            }

            .Indicator{
                display:flex;
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
        }
        .FormContent{
            padding:0px 24px 20px;
            .Indicator{
                display:none;
            }

            .MainContent{
                margin:0;
                .Content{
                display: flex;

                .Fields{
                    paddin:0;
                    width:100%;

                    .Field-Layout{
                        margin:20px 0 0px;
                    }
                    .Two-Field{
                        display:grid;
                        width:100%;
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr;
                        grid-column-gap:15px;
                    }
                    .Two-Field-Phone{
                        .Selector{
                            margin:10px 0 !important;
                        }
                    }   
                }
                }
            }
        }
    `}

    ${devices.tabletL`
        grid-template-columns: 0.8fr 10px 1fr;
        grid-template-rows: 1fr;
        padding:0;

        .FormHeader{
                display:flex;
                align-items:center;
                box-shadow: none;
                padding-left:30px;
                flex-direction:column;
                align-items:flex-start;
                justify-content:center;
                grid-column: 1 / span 1;
                
                .Content{
                    padding:0px;
                    height:auto;
                    display:flex;
                    align-items:flex-start;
                    flex-direction: column-reverse;

                    i{
                        font-size: 100px !important;
                        background: ${props=>`-webkit-linear-gradient(45deg,${props.theme.lnGrad1},${props.theme.lnGrad2})`};
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        transform: translateX(-13px);
                    }
                    h1{
                        font-weight:600;
                        font-size:3rem;
                        margin:0;
                        
                    }
            }

            .Indicator{
                display:flex;
                margin-top:30px;

                .Ind{
                    background-color: ${props=>props.theme.lnGrad2};
                    box-shadow:0px 2px 2px rgba(0,0,0,.1);
                    width:100px;
                    height:50px;
                    font-size:14px;
                    border-radius:4px;
                    color:white;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    p{
                        font-size:18px;
                        b{
                            flex-shrink:0;
                        }
                    }
                }
            }
        }

        .FormContent{
            padding: 20px 20px;
            display:flex;
            align-items:center;
            grid-column: 3 / span 1;
            .Indicator{
                display:none;
            }
            .MainContent{
                width:1000%;
                .Content{
                    .Fields{

                    .Two-Field{
                        grid-template-columns: 1fr 1fr;
                    }

                    .Two-Field-Phone{
                        .Selector{
                            margin:10px 0;
                        }
                    }
                    }
                }
            }
        }
        
    `}


    ${devices.laptop`
        grid-template-columns: 1fr 10px 1.5fr;
        padding: 40px 0px;
                    

        .FormContent{
            padding: 20px 20px;

            .Indicator{
                display:none;
            }
            .MainContent{
                .Content{
                    .Fields{
                        .One-Field-Phone{
                        grid-template-columns: 1fr 1fr;
                    }
                    }
                }
            }
        }
        
    `}

`;

StyledFormCategory = animated(StyledFormCategory);

export default StyledFormCategory;