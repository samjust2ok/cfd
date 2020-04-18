import React, {useState, useEffect, useRef} from 'react';
import StyledLandingPage, {Navigation,Header} from '../styled/StyledLandingPage';
import MapSvg from '../components/MapSvg';
import imap from '../images/imap.png';
import gmap from '../images/gmap.png';
import h1 from '../images/h1.jpg';
import h2 from '../images/h2.jpg';
import h3 from '../images/h3.jpg';
import h4 from '../images/h4.jpg';
import h5 from '../images/h5.jpg';
import h6 from '../images/h6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../constants/theme';
import { useTransition,animated } from 'react-spring';
import TabView from '../components/TabView';
import { TotalStatistics, World, SurvivalInfo } from '../components/InfoCards';

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon,
} from 'react-share';
import { useDispatch, useSelector } from 'react-redux';
import { getLiveCases } from '../actions/apiActions';
import I from '../components/i';
import Button from '../components/Button';


const imagesArr = [h1,h2,h3,h4,h5,h6];

const URL = 'report-covid.netlify.com';
const SHARE_QUOTE = 'Report suspected cases of COVID-19 to help the NCDC combat the spread. | Help flatten the curve';
const HASHTAG = '#ReportCovid';
const TITLE = 'REPORT COVID';

const tabs = [
    {
        title: 'Survival Tips'
    },
    {
        title: 'Notification'
    }
]

const bgs = ['white',theme.dscBGFull]


const Landing  = ()=>{
    return(
        <StyledLandingPage>
            <Navigation>
                <div className="NavigationContainer">
                    <div className="Logo">

                    </div>
                    <div className="NavigationItems">
                        
                    </div>
                </div>
            </Navigation>
            <Header>
                <h1>HELLLLLLLLLLLLLLLO</h1>
            </Header>
        </StyledLandingPage>
    );
}

// const Share = ({onSharePopClose,props})=>{
//     return (
//         <ShareCard style = {props}>
//             <div className="Header">
//                 <h3>Select</h3>
//                 <FontAwesomeIcon onClick = {onSharePopClose} icon = 'times'/>
//             </div>
//             <div className="Dropdown">
//                 <li className = "Dropdown-Item Share">
//                     <WhatsappShareButton onShareWindowClose = {onSharePopClose} separator = '|' url = {URL}>
//                         <WhatsappIcon round = {true} size = {30}/>
//                         <span>Whatsapp</span>
//                     </WhatsappShareButton>
//                 </li>
//                 <li className = "Dropdown-Item Share">
//                     <FacebookShareButton onShareWindowClose = {onSharePopClose} hashtag = {HASHTAG} quote = {SHARE_QUOTE} url = {URL}>
//                         <FacebookIcon round = {true} size = {30}/>
//                         <span>Facebook</span>
//                     </FacebookShareButton>
//                 </li>
//                 <li className = "Dropdown-Item Share">
//                     <TwitterShareButton onShareWindowClose = {onSharePopClose} hashtag = {[HASHTAG,'FLATTEN_THE_CURVE']} quote = {SHARE_QUOTE} url = {URL}>
//                         <TwitterIcon title = {TITLE} round = {true} size = {30}/>
//                         <span>Twitter</span>
//                     </TwitterShareButton>
//                 </li>
//                 <li className = "Dropdown-Item Share">
//                     <LinkedinShareButton onShareWindowClose = {onSharePopClose} title = {TITLE} description = {SHARE_QUOTE} url = {URL}>
//                         <LinkedinIcon round = {true} size = {30}/>
//                         <span>Linkedin</span>
//                     </LinkedinShareButton>
//                 </li>
//                 <li className = "Dropdown-Item Share">
//                     <TelegramShareButton onShareWindowClose = {onSharePopClose} title = {TITLE} url = {URL}>
//                         <TelegramIcon round = {true} size = {30}/>
//                         <span>Telegram</span>
//                     </TelegramShareButton>
//                 </li>
//         </div>
//         </ShareCard>
//     );
// }
export default Landing;