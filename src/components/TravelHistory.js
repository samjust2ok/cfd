import React, { useState } from 'react';
import FormCategory from './FormCategory'
import Option from './Option';
import { animated, useTransition } from 'react-spring';
import CustomInput from './CustomInput';
import { CustomDatePicker } from './Input';
import theme from '../constants/theme';
import { isES, isNull } from '../utils/appUtils';
import { useDispatch, useSelector } from 'react-redux';
import { storeTravelHistory } from '../actions/storeActions';
import options from '../constants/options';
import PrimaryButton from './PrimaryButton';
import I from './i';

const iconStyle  = {display:'flex',alignItems:'center', color: theme.lnGrad2}


const TravelHistory = ({style,next,previous,index})=>{
    

    const selector = useSelector(state=>state.reportForm.travelHistory);
    const {hasTravelled, dateArrived, countryVisited} = selector;
    
    const [showCompliments, setShowCompliments] = useState(Boolean(hasTravelled));
    

    const transitions = useTransition(showCompliments, null, {
        from: { transform: 'translateX(20px)', opacity: 0 },
        enter: { transform: 'translateY(0px)', opacity: 1 },
        leave: { transform: 'translateY(20px)', opacity: 0 },
     })


     const [errorFields, setErrorFields] = useState({
        hasTravelled: false,
        countryVisited: false,
        dateArrived: false,
    })

    const [fieldValues,setFieldValues] = useState({
        hasTravelled: hasTravelled,
        countryVisited: countryVisited,
        dateArrived: dateArrived,
    })

    const hasTravelledHandler = (v)=>{
        setFieldValue('hasTravelled',v)
        setShowCompliments(v);
    }
    const dateArrivedHandler = (v)=>{
        setFieldValue('dateArrived',v._d)
    };
    const countryVisitedHandler = (v)=>setFieldValue('countryVisited',v)


    const setErrorOnNonFilledFields = ()=>{
        let { hasTravelled,countryVisited,dateArrived} = fieldValues;
        let error = {
            hasTravelled: isNull(hasTravelled),
            countryVisited: hasTravelled ? isES(countryVisited):false,
            dateArrived: hasTravelled ? isNull(dateArrived):false
        }
        setErrorFields(error);
        return error;
    }

    const checkForAnyError = (errorFields)=>{
        return Object.values(errorFields).includes(true);
    }

    const setFieldValue = (field,value)=>{
        setFieldValues(fields=>({
            ...fields,
            [field]: value
        }));
    }

    const dispatch = useDispatch();

    const storeValues = ()=>{
        const { hasTravelled, countryVisited, dateArrived } = fieldValues
        const travelHistory = {
            hasTravelled,
            countryVisited,
            dateArrived : hasTravelled ? dateArrived ? dateArrived:new Date():null
        }
        dispatch(storeTravelHistory(travelHistory))
    }

    const handleNext = ()=>{
       let error = setErrorOnNonFilledFields();
       if(checkForAnyError(error)) return;
        storeValues();
        next();
    }

    const handlePrevious = ()=>{
        storeValues();
        previous();
    }


    
    return (
        <FormCategory icon = 'flight' index = {index} style = {style} header = 'Travel History'>
            <div className="Content">
                <div className="Fields ScrollbarHide">
                <div className="FieldInputs">
                    <Option preValue = {hasTravelled} error = {errorFields.hasTravelled} handleChange = {hasTravelledHandler} label = 'Have you been out of the country within the last three months?' options = {options.yesNo}/>
                    {
                        transitions.map(({ item, key, props }) =>
                        item && (
                            <animated.div style = {props} className="Compliment">
                                <div className="Field-Layout One-Field">
                                    <CustomInput preValue = {countryVisited} errorMessage = 'Input the country you visited during your last visit' error = {errorFields.countryVisited} handleChange = {countryVisitedHandler} icon = 'flag' placeHolder = 'Country visited' info = "Enter a valid country name"/>
                                </div>
                                <div style = {{marginTop:'20px'}} className = 'Field-Layout Icon-Side-Field'>
                                    <CustomDatePicker preValue = {dateArrived} handleChange = {dateArrivedHandler} label = 'When did you arrive Nigeria?'/>
                                    <div style = {iconStyle}>
                                        <I icon = 'flight_land'/>
                                    </div>
                                </div>
                            </animated.div>
                        )     
                        )
                    }
                </div>
                        <div className = 'ActionButtons'>
                            <PrimaryButton onClick = {handlePrevious}>
                                Back
                            </PrimaryButton>
                            <PrimaryButton onClick = {handleNext}>
                                Next
                            </PrimaryButton>
                        </div>
                </div>
            </div>
        </FormCategory>
    );
}

export default TravelHistory;

