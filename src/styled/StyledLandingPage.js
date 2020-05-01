import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

const StyledLandingPage = styled.div`
    width:100%;
`;

const Navigation = styled.nav`
    position:fixed;
    padding: 0 24px;
    height: 70px;
    left: 0px;
    right:0;
    z-index: 100;
    top: 0px;
    transition: box-shadow 0.3s cubic-bezier(0.35, 0, 0.65, 1) 0s;

    &.Show{
        box-shadow: 0px 1px 4px rgba(0,0,0,.08);
        background:white;
    }

    .MobileNav{
        position:absolute;
        background:rgba(255,255,255,0.95);
        top:100%;
        width:100%;
        left:0;
        padding:10px 0;

        .NavLists{
            li{
                padding: 20px 24px;

                & > a,div{
                    color: ${props=>props.theme.primaryText};
                    font-size:16px;
                    border:none;
                    display:grid;
                    grid-template-columns:30px 1fr;

                    span{
                        margin-left: 25px;
                    }
                }

                button{
                    background-image: ${props=>`linear-gradient(45deg, ${props.theme.lnGrad1} 0%, ${props.theme.lnGrad2} 100%);`};
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    padding: 0 20px;
                    height:50px;
                    width:100%;
                    border:none;
                    
                    border-radius: 5px;
                    transition: all .2 ease-in;

                    a{
                        font-size: 16px;
                        color:white;
                        display:flex;
                        align-items:center;
                        span{
                            margin-right:15px;
                        }
                    }
                    :hover{
                        background: ${props=>`linear-gradient(45deg, ${props.theme.lnGrad3} 0%, ${props.theme.lnGrad2} 100%);`};
                    }
                }
            }
        }
    }

    .NavigationContainer{
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        height:100%;
        
        
        .NavigationItems{
            align-items:center;
            display:none;
            height:100%;

            &.Account{
                display:none;
                align-items:center;
            }
            ul{
                list-style-type:none;
                display:flex;
                height:100%;

                .DropdownItem{
                    margin: 0px 25px;
                    position:relative;
                    height:100%;
                    display:flex;
                    align-items:center;

                    :hover .Dropdown{
                        opacity: 1;
                        visibility: visible;
                        transform: translate(-50%,0px);
                    }

                    .DropdownView{
                        display:flex;
                        align-items:center;
                        padding: 5px 10px;
                        border-radius:40px;
                        transition: background-color .2s ease-out;

                        :hover{
                            background-color:rgba(0,0,0,.04);
                        }
                    }

                    

                    .Dropdown{
                        position:absolute;
                        width: 250px;
                        top: 95%;
                        height:auto;
                        left: 50%;
                        will-change: transform opacity;
                        transform: translate(-50%,10px);
                        visibility: hidden;
                        transition: transform .3s, opacity .5s;
                        background:white;
                        opacity:0;
                        padding: 10px 0;
                        display:flex;
                        flex-direction:column;
                        border: solid 1px rgba(0,0,0,0.04);
                        box-shadow: 0 8px 16px 0 rgba(3,49,86,0.08);
                        border-radius: 6px;

                        .Dropdown-Item{
                            padding: 15px 20px;
                         }
                         
                         .Share{
                            button{
                                display:flex;
                                align-items:center;

                                span{
                                    margin-left:20px;
                                    color: ${props=>props.theme.primaryText}
                                }
                             }
                             
                         }
                    }


                    .Account-Dropdown{
                        width:300px;
                        li{
                            padding: 15px 20px;

                            .Dropdown-Item-Title{
                                display:flex;
                                align-items:center;
                                margin-bottom:15px;
                                color: ${props=>props.theme.primaryText};

                                a{
                                    margin-left:10px;
                                    color: ${props=>props.theme.primaryText}
                                }
                            }

                            p{
                                font-size:14px;
                                
                            }
                        }
                    }
                }
            }
        }
    }

    ${devices.mobileXL`
        .NavigationContainer{
            .MenuBar{
                display:none;
            }

            .NavigationItems{
                display:flex;

                .ReportNow-Hide{
                    display:none;
                }

                .DropdownList{
                    .DropdownItem{
                        margin:0px 0px 0px 25px;
                    }
                }

                &.Account{
                    display:flex;
                }
            }
        }
    `}

    ${devices.tablet`
        padding: 0 40px;
        .NavigationContainer{
            .NavigationItems{
                .ReportNow-Hide{
                    display:flex;
                }
            }
        }
    `}


    ${devices.laptop`
        padding: 0 80px;
        .NavigationContainer{
            .NavigationItems{
                display:flex;

                &.Account{
                    display:flex;
                }
            }
        }
    `}
`;

const Header = styled.div`
    width:100%;
    height:800px;
    background:white;

    .Container{
        display:flex;
        align-items:center;
        width:100%;
        height:100%;

        .Contents{
            padding: 0 24px;
            height:540px;
            width:100%;
            display:flex;
            flex-direction:column-reverse;
            justify-content:space-between;
            margin-top:70px;

            .HeaderContent{
                
                h1{
                    font-size:180%;
                }

                p{
                    margin-top:30px;
                }

                .Button{
                    margin-top:25px;
                    a{
                        color:white;
                        font-size:16px;
                        display:flex;
                        align-items:center;

                        span{
                            margin-right:10px;
                        }
                    }
                }
            }

            .Illustration{
                margin-bottom:30px;
                display:flex;
                align-items:center;
                height:100%;
                width:100%;

                img{
                    height: 100%;
                    width:100%;
                }
            }
        }
    }

    ${devices.mobileXL`
        height:800px;
        .Container{
            .Contents{
                height:630px;
                display:grid;
                padding: 0 40px;
                grid-template-columns:1fr 3fr;
                grid-template-rows:1fr 2fr;
                grid-gap:30px;
                .HeaderContent{
                    grid-column: 1 / span 2;
                    grid-row: 2 / span 1;
                    max-width:600px;
                    margin-top:20px;
                    h1{
                        font-size:2.5rem;
                    }
                }

                .Illustration{
                    margin:0px;
                    grid-column: 2 / -1;
                    grid-row: 1 / span 1;
                }
            }
        }
    `}



    ${devices.tablet`
        height:850px;
        .Container{
            .Contents{
                height:700px;
                .HeaderContent{
                    h1{
                        font-size:2.6rem;
                    }
                }

                .Illustration{
                    grid-column: 2 / -1;
                    grid-row: 1 / span 1;
                }
            }
        }
    `}


    ${devices.tabletL`
        height: 900px;
        .Container{
            .Contents{
                height:780px;
                
            }
        }
    `}


    ${devices.laptop`
        height:650px;
        .Container{
            .Contents{
                height:400px;
                padding: 0 80px;
                grid-template-columns:1fr 1fr;
                grid-template-rows:1fr;
                .HeaderContent{
                    grid-column: 1 / 2;
                    grid-row: 1 / span 1;
                    h1{
                        font-size:3rem;
                    }
                }

                .Illustration{
                    grid-column: 2 / span 1;
                    grid-row: 1 / auto;
                }
            }
        }
    `}
`;

const HelpBox = styled.div`
    width:100%;
    display: block;

    .Container{
        background-color:black;
        padding: 32px 0px 40px !important;

        .ItemContent{
            padding: 0 24px;
            background-color:transparent;

            .Header{
                display:flex;
                justify-content:space-between;
                margin-bottom:40px;
                .Title{
                    h1{
                        font-weight:600;
                        color:white;
                    }

                    p{
                        color:white;
                        font-size:16px;
                    }
                }

                .SeeMore{
                    display:none;
                    padding:0;
                    align-items:center;
                    margin-right:24px;
                }
            }

            .Content{
                width:100%;
                .ContentContainer{
                    display: flex;
                    width:100%;
                    overflow-x: auto;
                    overflow-y: hidden;
                    scroll-snap-type: x mandatory;
                    

                    .ImageBox{
                        scroll-snap-align: center;
                        width: 90%;
                        flex: 0 0 auto;
                        margin-right:12px;
                        height:360px;

                        .ImageContainer{
                            position:relative;
                            width:100%;
                            height:100%;

                            .Image{
                                width:100%;
                                position: absolute;
                                top: 0px;
                                bottom: 0px;
                                left: 0px;
                                right: 0px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-radius: 16px 16px;
                                overflow:hidden;

                                img{
                                    object-fit:cover;
                                    height:100%;
                                    width:100%;
                                }
                            }

                            .TextContent{
                                bottom: 0px;
                                left: 0px;
                                position: absolute;
                                right: 0px;

                                .Text{
                                    width:100%;
                                    font-size: 14px;
                                    line-height: 20px;
                                    color: rgb(255, 255, 255);
                                    min-height: 76px;
                                    border-radius: 0px 0px 16px 16px;
                                    padding: 16px;
                                    background-color: ${props=>props.theme.darkShade2};
                                }
                            }
                        }
                        :nth-child(1){
                            grid-area: 1 / 4 / auto / auto;
                        }

                        :nth-child(2){
                            grid-area: 1 / 4 / auto / auto;
                        }

                        :nth-child(3){
                            grid-area: 1 / 4 / auto / auto;
                        }

                        :nth-child(4){
                            grid-area: 1 / 4 / auto / auto;
                        }
                    }
                }
            }

            .SeeMore{
                padding-top: 32px;
                a{
                    border: 2px solid white;
                    background-color: transparent;
                    color:white;

                    height: 45px;
                    padding: 0 20px;
                    border-radius:5px;
                    display:flex;
                    align-items:center;
                    width:fit-content;

                    span{
                        margin-right:15px;
                    }
                }


            }
        }
    }

    ${devices.tablet`
        .Container{
            padding: 48px 0px 64px;

        .ItemContent{
            padding: 40px;

            .Header{
                
                .Title{
                    width:70%;
                    h1{
                        
                    }

                    p{
                        
                    }
                }

                .SeeMore{
                    
                }
            }

            .Content{
                margin: 0px;
                overflow: visible;
                padding: 0px;
                
                .ContentContainer{
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    grid-template-rows: 300px 300px;
                    margin: -8px;
                    

                    .ImageBox{
                        width:100%;
                        padding: 8px;
                        height:auto;

                        :nth-child(1) {
                            grid-column: 1 / auto;
                            grid-row: span 2 / 3;
                        }

                        :nth-child(2) {
                            grid-column: 2 / auto;
                            grid-row: 1 / auto;
                        }

                        :nth-child(3) {
                            grid-column: 2 / auto;
                            grid-row: 2 / auto;
                        }

                        :nth-child(4){
                            display:none;
                        }

                        .ImageContainer{
                            

                            .Image{
                                
                            }

                            .TextContent{
                                

                                .Text{
                                    
                                }
                            }
                        }
                        
                    }
                }
            }

            .SeeMore{
                display:flex;
                a{
                    
                }
            }
        }
    }
    
    `}




${devices.tabletL`
        .Container{
            padding: 32px 0px 40px;

        .ItemContent{
            .Header{
                .SeeMore{
                    display:flex;
                }
            }
        

            .SeeMore{
                display:none;
            }
        }
    }
    
    `}


${devices.laptopL`
        .Container{
            padding: 32px 0px 40px;

        .ItemContent{
            padding: 80px;

            .Header{
                
                .Title{
                    h1{
                        
                    }

                    p{
                        width: 60%;
                    }
                }

                .SeeMore{
                    
                }
            }

            .Content{
                
                .ContentContainer{
                    grid-template-columns: 2fr 1fr 1fr;
                    grid-template-rows: 300px 300px;
                    
                    .ImageBox{

                        :nth-child(1) {
                            grid-column: 1 / auto;
                            grid-row: 1 / span 2;
                        }

                        :nth-child(2) {
                            grid-column: 2 / auto;
                            grid-row: 1 / auto;
                        }

                        :nth-child(3) {
                            grid-column: 3 / auto;
                            grid-row: 1 / auto;
                        }

                        :nth-child(4){
                            display:block;
                            grid-column: 2 / span 2;
                            grid-row: 2 / auto;
                        }
                        
                        
                        .ImageContainer{
                            

                            .Image{
                                
                            }

                            .TextContent{
                                

                                .Text{
                                    
                                }
                            }
                        }
                        
                    }
                }
            }

            .SeeMore{
                

                a{
                    
                }
            }
        }
    }
    
    `}
`;

const ContactBox = styled.div`
    width:100%;

    .Container{
        padding: 30px 0;

        .Contents{
            padding: 0 24px;
            
            .Content{
                margin-bottom: 24px;

                .Explore{
                    margin-top:24px;

                    a{
                        display:flex;
                        align-items:center;
                        color: white;
                    }
                }

                &.Title{
                    color: ${props=>props.theme.primaryText};
                    h1{
                        font-size: 22px;
                    }
                    .Explore{
                        display:none;

                    }
                }

                &.Details{

                }
            }

        }
    }

    ${devices.mobileXL`
            .Container{
                padding: 50px 0;

                .Contents{
                    padding: 0 50px;
                    display:grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap:30px;
                    
                    .Content{
                        margin:0;
                        max-width:450px;

                        .Explore{
                            margin-top:24px;
                        }

                        &.Title{
                            color: ${props=>props.theme.primaryText};
                            h1{
                                font-size: 22px;
                                font-weight:600;
                            }
                            .Explore{
                                display:block;
                                
                            }
                        }

                        &.Details{
                            .Explore{
                                display:none; 
                            }
                        }
                    }

                }
        }
    `}

${devices.laptop`
            .Container{
                padding: 80px 0;

                .Contents{
                    padding: 0 80px;
                    grid-gap:50px;
                    
                    .Content{
                        &.Title{
                            h1{
                                font-size: 30px;
                            }
                        }

                        &.Details{
                            p{
                                font-size:16px;
                            }
                        }
                    }

                }
        }
    `}
`;

const ChartBox = styled.div`
    width:100%;

    .Container{
        width:100%;
        padding: 80px 0;
        padding-bottom: 0px;
        background-color:${props=>props.theme.darkShade1};

        .Header{
            padding: 0 24px;
            color:#C6D3E7;
            margin-bottom:40px;
            h1{
                font-size:20px;
            }
        }

        .ChartsContainer{
            display:flex;
            flex-direction:column;
            width:100%;
            padding: 0 10px;
            
            .Chart{
                flex: 0 0 auto;
                width:calc(100% + 24px);
                margin:70px 0px;
                position:relative;

                .Title{
                        position:absolute;
                        top:-90px;
                        left:30px;
                        color:#C6D3E7;

                        h1{
                            font-size: 18px;
                        }

                        p{
                            color:white;
                            font-size:14px;

                                .Tag{
                                    font-size: 12px;
                                    margin-right:10px;
                                }
                        }
                    
                    }
                
                .recharts-responsive-container{
                    margin-left:-24px;
                }
            }
        }
    }

    ${devices.mobileXL`
        .Container{
            padding-bottom: 20px;
            .Header{
                padding: 0 40px;
                margin-bottom:40px;
                p{
                    font-size: 16px;
                }
            }
        }
    `}

    ${devices.tabletL`
        .Container{
            width:100%;
            padding: 80px 0;
            padding-bottom:150px;
            .Header{
                padding: 0 80px;
                margin-bottom:40px;

                h1{
                    font-size: 32px;
                }

                p{
                    font-size:18px;
                }
            }

            .ChartsContainer{
                display:grid;
                grid-gap:50px;
                padding: 0 40px;
                grid-template-columns: 1fr 2fr;
                grid-template-rows: 200px 200px;


                .Chart{
                    width:100%;

                    .Title{
                        position:absolute;
                        top:0;
                        left:-300px;
                        color:#C6D3E7;

                        h1{
                            font-size: 20px;
                        }

                        p{
                            color:white;
                            font-size:16px;
                            line-height:28px;

                                .Tag{
                                    font-size: 12px;
                                }
                        }
                    
                    }
                    :nth-child(1) {
                            grid-column: 2 / span 1;
                            grid-row: span 1 / span 1;
                        }

                    :nth-child(2) {
                        grid-column: 2 / span 1;
                        grid-row: 2 / span 1;
                    }
                }
            }
        }
    `}
`;

const TrackBox = styled.div`
    width:100%;
    position:relative;

    .Underlay{
        position:absolute;
        right:70px;
        top:50%;
        opacity:.2;
        display:none;
        transform: translateY(-50%);
        .md-70{
            font-size:170px;
            color: rgba(0,0,0,.2);
        }
    }
    .Container{
        width:100%;
        background-color: ${props=>props.theme.greyBG};
        padding:  40px 0;

            .Header{
                padding: 0 24px;

                h1{
                    background: ${props=>`-webkit-linear-gradient(45deg,${props.theme.lnGrad1},${props.theme.lnGrad2})`};
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                p{
                    margin-top:15px;
                }
            }

            .Body{
                padding:0 24px;
                margin-top:30px;

                .Buttons{
                    margin-top:20px;
                    width: 450px;
                    display:flex;
                    flex-direction:column;

                    
                    .TButton{
                        padding: 10px 20px;
                        border:none;
                        border-radius:5px;
                        width: 220px;
                        flex: 0 0 auto;
                        margin-bottom:15px;
                        
                        img{
                            height:30px;
                            margin-right: 10px;
                        }

                        a{
                            font-size:16px;
                            color: black;
                            display:flex;
                            align-items:center;
                        }
                    }
                }
            }
    }

    ${devices.mobileXL`
        
        .Container{
            

            .Header{
                padding:0 40px;

                p{
                    max-width: 500px;
                    margin-top:24px;
                }
            }

            .Body{
                padding:0 40px;

                .Buttons{
                    flex-direction:row;
                    justify-content:space-between;
                    .TButton{
                        img{
                            height:30px;
                            margin-right: 20px;
                        }
                    }
                }
            }
        }
    `}
    ${devices.tablet`
        .Underlay{
            display:block;
        }
        .Container{
            padding: 80px 0;

            .Header{
                padding:0 80px;

                h1{
                    
                }

                p{
                    max-width: 500px;
                    margin-top:24px;
                }
            }

            .Body{
                padding:0 80px;
            }
        }

    `}
`;

const FooterBox = styled.div`
    width:100%;

    .Container{
        width:100%;
        background-color: ${props=>props.theme.greyBG};
        padding:  40px 0;

        .Content{
            padding: 0 24px;
            .Contact{
                padding-bottom:30px;
                p{
                    font-weight: 600;
                    margin: 14px 0;
                    font-size:18px;
                    color: ${props=>props.theme.dscText};
                    font-family: 'Poppins', sans-serif;
                }

                .SocialMedia{
                    
                    p{
                        margin:0;
                        font-size: 16px;
                        color: ${props=>props.theme.dscLightBlue};
                        font-family: 'Montserrat', sans-serif;
                    }
                    .Icons{
                        margin-top:30px;
                        a{
                            
                            margin-right: 20px;

                            svg:not(:root).svg-inline--fa{
                                font-size:24px;
                                color: ${props=>props.theme.dscText};
                            }

                            :active{
                                color: ${props=>props.theme.dscPink};
                            }
                        }
                    }
                }
            }

            .Location{
                border-top: 1px solid #ccc;
                padding: 20px 0;
            }
        }
            
    }

    ${devices.mobileXL`
        
        .Container{
            .Content{
                padding:0 40px;
            }
        }
    `}
    ${devices.tablet`
        .Container{
            padding: 80px 0;

            .Content{
                padding: 0 80px;
            }

        }

    `}
`;

const PopUpBox = styled.div`
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
    

    .ContentContainer{
        position: relative;
        overflow:hidden;
        background: rgb(255, 255, 255);
        border: none;
        border-radius: 4px;
        width: 360px;
        max-width: 80%;
        padding: 20px;
        max-height:70%;

        .Content{
            width:100%;
            height:100%;

            .MainContent{
                width:100%;
                height:100%;
            }
        }
    }

    ${devices.laptop`
        .ContentContainer{
            width: 896px!important;
            max-width: 80%!important;
            padding: 32px 40px!important;
        }
    `}
`;

const ShareBox = styled.ul`
    background:white;
    padding-bottom: 20px;
    display:flex;
    flex-direction:column;

    .Share{
        font-weight:500;
        color:#03162d;
        padding: 15px 0px;
        list-style-type:none;
        :hover{
            color: ${props=>props.theme.dscLightBlue};
        }
        button{
            display:flex;
            align-items:center;
        span{
            margin-left:30px;
        }
    }
    }
`;

const AppleBox = styled.ul`
    background:white;
    padding-bottom: 20px;
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;

    .Header{
        height:50px;
        display:flex;
        align-items:center;
    }

    .HelpContent{
        list-style-type:none;
        list-style-position:inside;
        width:100%;
        height: 450px;
        overflow-y:scroll;
        
        li{
            width:95%;
            margin-bottom:15px;
            text-align:justify;
        }
    }

    ${devices.mobileXL`
        .HelpContent{
            height: 320px;
        }
    `}

    ${devices.laptop`
        .HelpContent{
            display:grid;
            grid-gap:0px 40px;
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
            overflow:hidden !important;
            list-style-type:decimal;

            li{
                width:100%;
            }
        }
    `}
`;

const HeatMap = styled.div`
    width: 100%;
    height:700px;

    .Container{
        height:100%;
        .Content{
            padding: 0 40px;
            height:100%;
        }
    }
`;

export {StyledLandingPage as default, Navigation, Header,HelpBox,ContactBox,HeatMap,ChartBox, TrackBox,FooterBox,PopUpBox,ShareBox,AppleBox}