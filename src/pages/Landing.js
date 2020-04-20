import React, {useState, useEffect, useRef} from 'react';
import StyledLandingPage, {Navigation,Header,HelpBox,ContactBox,ChartBox,TrackBox,FooterBox,PopUpBox,ShareBox,AppleBox} from '../styled/StyledLandingPage';
import MapSvg from '../components/MapSvg';
import imap from '../images/imap.png';
import gmap from '../images/gmap.png';
import medical from '../images/medical.svg';
import doctor from '../images/doctor.png';
import stayathome from '../images/stayathome.jpg';
import socialdist from '../images/socialdist.jpg';
import sanitize from '../images/sanitize.jpg';
import isolate from '../images/isolate.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../constants/theme';
import { useTransition,animated } from 'react-spring';
import TabView from '../components/TabView';
import { TotalStatistics, World, SurvivalInfo } from '../components/InfoCards';
import CustomAreaChart from '../components/CustomAreaChart';
import _ from 'lodash';
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
import moment from 'moment';



const URL = 'cfd-covid.netlify.com';
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
    const dispatch = useDispatch();
    const casesSelector = useSelector(state=>state.liveCases);
    const {cumulativeDeath,dailyNewCases} = casesSelector.nigeriaTimeStamp;
    const [mobileMenuOpen,setMobileMenuOpen] = useState(false);
    const [showShare,setShowShare] = useState(false);
    const [showAppleHelp,setShowAppleHelp] = useState(false);

    const toggleMenu = ()=>{
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const toggleShowShare = ()=>{
        setShowShare(!showShare);
        mobileMenuOpen && setMobileMenuOpen(false);
    }
    useEffect(()=>{
        dispatch(getLiveCases())
    },[])


    const transitions = useTransition(mobileMenuOpen, null, {
        from: {opacity: 0, height: 0 },
        enter: { opacity: 1, height: 'auto' },
        leave: {  opacity: 0, height:0 },
    })

    return(
        <StyledLandingPage>
            <Navigation className = 'Show'>
                <div className="NavigationContainer">
                    <div className="Logo">

                    </div>
                    <div className="MenuBar">
                        <I classNames = {['md-30']} onClick = {toggleMenu} icon = {mobileMenuOpen ? 'close':'menu'}/>
                    </div>
                    <div className="NavigationItems Account">
                        <ul className = "DropdownList">
                            <li className="DropdownItem">
                                <div className="DropdownView Account">
                                    <span>Share</span>
                                    <I icon = 'arrow_drop_down'/>
                                </div>
                                <ul className="Dropdown">
                                    <li className = "Dropdown-Item Share">
                                        <WhatsappShareButton separator = '|' url = {URL}>
                                            <WhatsappIcon round = {true} size = {30}/>
                                            <span>Whatsapp</span>
                                        </WhatsappShareButton>
                                    </li>
                                    <li className = "Dropdown-Item Share">
                                        <FacebookShareButton hashtag = {HASHTAG} quote = {SHARE_QUOTE} url = {URL}>
                                            <FacebookIcon round = {true} size = {30}/>
                                            <span>Facebook</span>
                                        </FacebookShareButton>
                                    </li>
                                    <li className = "Dropdown-Item Share">
                                        <TwitterShareButton hashtag = {[HASHTAG,'FLATTEN_THE_CURVE']} quote = {SHARE_QUOTE} url = {URL}>
                                            <TwitterIcon title = {TITLE} round = {true} size = {30}/>
                                            <span>Twitter</span>
                                        </TwitterShareButton>
                                    </li>
                                    <li className = "Dropdown-Item Share">
                                        <LinkedinShareButton title = {TITLE} description = {SHARE_QUOTE} url = {URL}>
                                            <LinkedinIcon round = {true} size = {30}/>
                                            <span>Linkedin</span>
                                        </LinkedinShareButton>
                                    </li>
                                    <li className = "Dropdown-Item Share">
                                        <TelegramShareButton title = {TITLE} url = {URL}>
                                            <TelegramIcon round = {true} size = {30}/>
                                            <span>Telegram</span>
                                        </TelegramShareButton>
                                    </li>
                                </ul>
                            </li>
                            <li className="DropdownItem">
                                <div className="DropdownView Account">
                                    <I classNames = {['md-24']} icon = 'person'/>
                                    <I icon = 'arrow_drop_down'/>
                                </div>
                                <ul className="Dropdown Account-Dropdown">
                                    <li>
                                        <div className="Dropdown-Item-Title">
                                            <I icon = 'create'/>
                                            <a href="/signup">Create a new account</a>
                                        </div>
                                        <p>
                                            A new account is needed to submit a report to relevant authorities
                                        </p>
                                    </li>
                                    <li>
                                        <div className="Dropdown-Item-Title">
                                            <I icon = 'account_circle'/>
                                            <a href="/login">Sign in</a>
                                        </div>
                                        <p>
                                            Login into an exisiting account to review you information
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <Button className = "ReportNow-Hide">
                            <p>Report a case now</p>
                            <I outlined = {false} icon = 'arrow_forward'/>
                        </Button>
                    </div>
                </div>
                {
                    transitions.map(({ item, key, props }) =>
                     item && (
                        <animated.div style = {props} key = {key} className="MobileNav">
                        <ul className = "NavLists">
                            <li>
                                <a href="">
                                    <I classNames = {['md-30']} icon = 'info'/>
                                    <span>
                                        COVID-19 Info
                                    </span>
                                </a>
                            </li>
                            <li>
                                <div onClick = {toggleShowShare}> 
                                <I classNames = {['md-30']} icon = 'share'/>
                                <span>Share</span>
                                </div>
                            </li>
                            <li>
                                <a classNames = {['md-50']} href="/searchPage">
                                    <I icon = 'call'/>
                                    <span>NCDC HelpDesk</span>
                                </a>
                            </li>
    
                            <li>
                                <button>
                                    <a href="/report">
                                        <span>Report a case</span>
                                        <I icon = 'insert_drive_file'/>
                                    </a>
                                </button>
                            </li>
                        </ul>
                    </animated.div>
                    ))
                }
            </Navigation>
            <Header>
                <div className="Container">
                    <div className="Contents">
                        <div className="HeaderContent">
                            <h1>Showing symptoms of COVID-19?
                            </h1>
                            <p>Help the NCDC reach you by providing neccessary information on our report page</p>
                            <div className="Button">
                            <Button>
                                <a href="/report">
                                    <span>Report a case now</span>
                                    <I icon = 'arrow_forward'/>
                                </a>
                            </Button>
                            </div>
                        </div>
                        <div className="Illustration">
                            <img src={medical} alt=""/>
                        </div>
                    </div>
                </div>
            </Header>
            <HelpBox>
                <div className="Container">
                    <div className="ItemContent">
                        <div className="Header">
                            <div className="Title">
                                <h1>
                                    Saving the World, One Step at a time
                                </h1>
                                <p>
                                    These simple steps can help stop the spread of covid-19, you too can contribute in your own little way to heal the world
                                </p>
                            </div>
                            <div className="SeeMore">
                                <a href="">
                                    <span>
                                        See all tips
                                    </span>
                                    <I icon = 'arrow_forward'/>
                                </a>
                            </div>
                        </div>
                        <div className="Content">
                            <div className = 'ContentContainer ScrollbarHide'>
                                <div className="ImageBox">
                                    <div className="ImageContainer">
                                        <div className="Image">
                                        <img src={stayathome} alt=""/>
                                        </div>
                                        <div className="TextContent">
                                            <div className="Text">
                                                <p>Stay At Home! <br/> Fight Corona by staying at home and avoiding crowded spaces </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ImageBox">
                                    <div className="ImageContainer">
                                        <div className="Image">
                                        <img src={sanitize} alt=""/>
                                        </div>
                                        <div className="TextContent">
                                            <div className="Text">
                                                <p>Wash your hand frequently with an alcohol based sanitizer, avoid touching your face often</p>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="ImageBox">
                                    <div className="ImageContainer">
                                        <div className="Image">
                                        <img src={isolate} alt=""/>
                                        </div>
                                        <div className="TextContent">
                                            <div className="Text">
                                                <p>Showing Symptoms? <br/>
                                                    Keep yourself in isolation while you await neccessary officials. 
                                                    Keep your family and friends out of risk
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="ImageBox">
                                    <div className="ImageContainer">
                                        <div className="Image">
                                            <img src={socialdist} alt=""/>
                                        </div>
                                        <div className="TextContent">
                                            <div className="Text">
                                                <p>When in public, maintain adequate space between people</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="SeeMore">
                            <a href="">
                                <span>
                                    See all tips
                                </span>
                                <I icon = 'arrow_forward'/>
                            </a>
                        </div>
                    </div>
                </div>
            </HelpBox>
            <ContactBox>
                <div className="Container">
                    <div className="Contents">
                        <div className="Content Title">
                            <h1>Get access to all NCDC's helpdesk line for all states of the country</h1>
                            <div className="Explore">
                                <Button>
                                    <a href="/searchpage">
                                        <span>
                                            Explore
                                        </span>
                                        <I icon = 'arrow_forward'/>
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <div className="Content Details">
                            <p>
                                NCDC wants you to reach them when you feel you have symptoms of COVID-19.
                                We provide a simple tool to help you search through and get the contact of NCDC in any particular state
                            </p>
                            <div className="Explore">
                                <Button>
                                    <a href="/searchpage">
                                        <span>
                                            Explore
                                        </span>
                                        <I icon = 'arrow_forward'/>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </ContactBox>
            <TrackBox>
                <div className="Container">
                    <div className="Header">
                        <h1>Need help remebering where you've been to?</h1>
                        <p>Use your device navigation stystem to track where you've been to. This information can help you make decisions on what to do</p>
                    </div>
                    <div className="Body">
                        <div className="Title">
                            <h3>Try it now</h3>
                        </div>
                        <div className="Buttons">
                        <button className="TButton">
                        <a href="https://www.google.com/maps/timeline">
                            <span>
                                <img src={gmap} alt=""/>
                            </span>
                            <span>Android Devices</span>
                        </a>
                    </button>
                    <button onClick = {()=>setShowAppleHelp(true)} className="TButton">
                        <a onClick = {(e)=>e.preventDefault()} href="#">
                            <span>
                                <img src={imap} alt=""/>
                            </span>
                            <span>Apple Devices</span>
                        </a>
                    </button>
                        </div>
                    </div>
                </div>
                <div className="Underlay">
                    <I icon = 'my_location' classNames = {['md-70']}/>
                </div>
            </TrackBox>
            <ChartBox>
                <div className="Container">
                    <div className="Header">
                        <h1>
                            Keep up with daily Statistics on COVID-19
                        </h1>
                        <p>Be aware of what's happening</p>
                    </div>
                    <div className="ChartsContainer ScrollbarHide">
                        <div className="Chart">
                            <div className="Title">
                                <h1>Cases per day</h1>
                                {
                                    dailyNewCases[0] && 
                                    <p>{`${moment(dailyNewCases[0].date).format('MMMM, YYYY')} - ${moment().format('MMMM, YYYY')}`}</p>
                                }
                                {
                                    dailyNewCases[0] &&
                                    <p>Daily Average <span className = 'Tag'>(over duration)</span>
                                        {
                                            Number(_.sumBy(dailyNewCases,(elem)=>elem.data)/dailyNewCases.length).toFixed(2)
                                        }
                                    </p>
                                }
                            </div>
                            <CustomAreaChart cases = {true} data = {dailyNewCases}/>
                        </div>
                        <div className="Chart">
                            <div className="Title">
                                <h1>Cummulative Death</h1>
                                {
                                    cumulativeDeath[0] &&
                                    <p>{`${moment(cumulativeDeath[0].date).format('MMMM, YYYY')} - ${moment().format('MMMM, YYYY')}`}</p>
                                }
                                {
                                    cumulativeDeath[0] &&
                                    <p>Daily Average <span className = 'Tag'>(over duration)</span>
                                        {
                                            Number(_.sumBy(cumulativeDeath,(elem)=>elem.data)/cumulativeDeath.length).toFixed(2)
                                        }
                                    </p>
                                }
                            </div>
                            <CustomAreaChart cases = {false} data = {cumulativeDeath}/>
                        </div>
                    </div>
                </div>
            </ChartBox>
            <FooterBox>
                    <div className="Container">
                            <div className="Content">
                                <div className="Contact">
                                    <p>Contact</p>
                                        <div className="SocialMedia">
                                        <p>Center for disease reporting</p>
                                        <div className="Icons">
                                            <a href="">
                                            <FontAwesomeIcon icon = {['fab','facebook-square']}/>
                                            </a>
                                            <a href="">
                                            <FontAwesomeIcon icon = {['fab','twitter']}/>
                                            </a>
                                            <a href="">
                                            <FontAwesomeIcon icon = {['fab','instagram']} />
                                            </a>
                                            <a href = "">
                                            <FontAwesomeIcon icon = {['fab','linkedin']} />
                                            </a>
                                            <a href="">
                                            <FontAwesomeIcon icon = {['fab','youtube']} />
                                            </a>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="Location">
                                    <I icon = 'place' classNames = {['md-30']}/>
                                    <p>Ibadan,</p>
                                    <p>Oyo State, Nigeria</p>
                                </div>
                            </div>
                    </div>
            </FooterBox>
            {
                showShare &&
                <Share close = {()=>setShowShare(false)}/>
            }
            {
                showAppleHelp &&
                <Apple close = {()=>setShowAppleHelp(false)}/>
            }
        </StyledLandingPage>
    );
}

const Share = ({close})=>{
    return (
        <PopUp close = {close}>
            <ShareBox>
                <li className = "Dropdown-Item Share">
                    <WhatsappShareButton onShareWindowClose = {close} separator = '|' url = {URL}>
                        <WhatsappIcon round = {true} size = {30}/>
                        <span>Whatsapp</span>
                    </WhatsappShareButton>
                </li>
                <li className = "Dropdown-Item Share">
                    <FacebookShareButton onShareWindowClose = {close} hashtag = {HASHTAG} quote = {SHARE_QUOTE} url = {URL}>
                        <FacebookIcon round = {true} size = {30}/>
                        <span>Facebook</span>
                    </FacebookShareButton>
                </li>
                <li className = "Dropdown-Item Share">
                    <TwitterShareButton onShareWindowClose = {close} hashtag = {[HASHTAG,'FLATTEN_THE_CURVE']} quote = {SHARE_QUOTE} url = {URL}>
                        <TwitterIcon title = {TITLE} round = {true} size = {30}/>
                        <span>Twitter</span>
                    </TwitterShareButton>
                </li>
                <li className = "Dropdown-Item Share">
                    <LinkedinShareButton onShareWindowClose = {close} title = {TITLE} description = {SHARE_QUOTE} url = {URL}>
                        <LinkedinIcon round = {true} size = {30}/>
                        <span>Linkedin</span>
                    </LinkedinShareButton>
                </li>
                <li className = "Dropdown-Item Share">
                    <TelegramShareButton onShareWindowClose = {close} title = {TITLE} url = {URL}>
                        <TelegramIcon round = {true} size = {30}/>
                        <span>Telegram</span>
                    </TelegramShareButton>
                </li>
            </ShareBox>
        </PopUp>
    );
}

const Apple = ({close})=>{
    return (
        <PopUp close = {close}>
            <AppleBox>
            <div className="Header">
                <h4>Simply follow the steps</h4>
            </div>
            <ol className = "HelpContent Scrollbar">
                <li>Open the Settings app and tap on “Privacy.”</li>
                <li>From here, select “Location Services.”</li>
                <li>Scroll down in this screen and tap on “System Services.”</li>
                <li>From the next screen, tap on “Significant Locations.”</li>
                <li>Locate the History section, which collects and groups places based on how often you’ve visited
                    them.</li>
                <li>When you tap on a location collection from the “History” section, it will show you a visual
                    breakdown in the next screen.</li>
                <li>You’ll see the map of all locations at the top of the display.</li>
            </ol>
            </AppleBox>
        </PopUp>
    );
}
const PopUp = ({children,close})=>{
    return (
        <PopUpBox onClick = {close}>
            <div className="ContentContainer">
                <div onClick = {(e)=>e.stopPropagation()} className="Content">
                    <div className="Header">
                        <I onClick = {close} icon = 'close'/>
                    </div>
                    <div className="MainContent">
                        {children}
                    </div>
                </div>
            </div>
        </PopUpBox>
    )
}
export default Landing;