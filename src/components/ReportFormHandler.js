import React, {useState} from 'react';
import StyledReportFormHandler from "../styled/StyledReportFormHandler";
import UserInfoForm from './UserInfoForm';
import Symptoms from './Symptoms';
import TravelHistory from './TravelHistory';
import MedicalHistory from './MedicalHistory';
import General from './General';
import SymptomsTwo from './SymptomsTwo';
import _ from 'lodash';

const ReportFormHandler = ()=>{
    const [slideIndex,setSlideState] = useState(0)

    const length = 6;

    const increment = () => setSlideState(_.clamp(slideIndex+1,0,length));

    const decrement = () => setSlideState(_.clamp(slideIndex-1,0,length));

    return (
        <StyledReportFormHandler>
            <Component next = {increment} previous = {decrement}  index = {slideIndex}/>
        </StyledReportFormHandler>
    );
}


let Component = ({index,props,next,previous})=>{
    return ( 
            <>
            {
                index === 0?
                <UserInfoForm index = {index} next = {next} previous = {previous} style = {props}/>:
                index === 1 ?
                <Symptoms index = {index} next = {next} previous = {previous} style = {props}/>:
                index === 2 ?
                <SymptomsTwo index = {index} next = {next} previous = {previous} style = {props}/>:
                index === 3 ?
                <MedicalHistory index = {index} next = {next} previous = {previous} style = {props}/>:
                index === 4 ?
                <TravelHistory index = {index} next = {next} previous = {previous} style = {props}/>:
                index === 5 ?
                <General index = {index} next = {next} previous = {previous} style = {props}/>:
                null
            }
            </>
    )
}
export default ReportFormHandler;