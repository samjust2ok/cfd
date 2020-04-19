import React, { useState } from 'react';
import FormCategory from './FormCategory'
import Button from './Button';
import Option from './Option';
import { isES, isNull} from '../utils/appUtils';
import { useDispatch, useSelector } from 'react-redux';
import { storeGeneralQuestions } from '../actions/storeActions';
import options from '../constants/options'
import { Overlay } from '../styled/StyledLoader';
import StyledNotification from '../styled/StyledNotification';
import Loader from './Loader';
import { useTransition } from 'react-spring';
import { createReport } from '../actions/serverRequestActions';
import { REPORT_CREATION_LOADING, SHOW_REPORT_CREATION_SUCCESS, SHOW_REPORT_CREATION_FAILURE } from '../constants/labels'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../constants/theme';
import { setAppState } from '../actions/appActions';
import PrimaryButton from './PrimaryButton';
import I from './i';


const General = ({style,previous,index})=>{
    const selector = useSelector(state=>state.reportForm.generalQuestions);
    const reportForm = useSelector(state=>state.reportForm);
    const showLoader = useSelector(state=>state.appState[REPORT_CREATION_LOADING]);
    const showSuccess = useSelector(state=>state.appState[SHOW_REPORT_CREATION_SUCCESS]);
    const showFailure = useSelector(state=>state.appState[SHOW_REPORT_CREATION_FAILURE]);
    

    const {ncdcContacted, contactTested, symptomsSeverity} = selector;


    const [errorFields, setErrorFields] = useState({
        ncdcContacted: false,
        contactTested: false,
        symptomExperienced: false,
    })


    const transitions = useTransition(showLoader, null, {
        from: { transform: 'translateY(50%)', opacity: 0 },
        enter: { transform: 'translateY(0px)', opacity: 1 },
        leave: { transform: 'translateY(-100%)', opacity: 0 },
    })

    const transitions2 = useTransition(showSuccess, null, {
        from: { bottom: '-70%' },
        enter: { bottom: '0%'},
        leave: { bottom: '-70%' },
    })

    const transitions3 = useTransition(showFailure, null, {
        from: { bottom: '-70%' },
        enter: { bottom: '0%'},
        leave: { bottom: '-70%' },
    })

    const [fieldValues,setFieldValues] = useState({
        ncdcContacted: ncdcContacted,
        contactTested: contactTested,
        symptomExperienced: symptomsSeverity,
    })

    const closeSuccessNotification = ()=>{
        dispatch(setAppState({
            appState: SHOW_REPORT_CREATION_SUCCESS,
            value:false
        }))
        window.location = '/'
    }

    const closeFailureNotification = ()=>{
        dispatch(setAppState({
            appState: SHOW_REPORT_CREATION_FAILURE,
            value:false
        }))
    }

    const ncdcContactedHandler = (v)=>setFieldValue('ncdcContacted',v);
    const contactTestedHandler = (v)=>setFieldValue('contactTested',v);
    const symptomExperiencedHandler = (v)=>setFieldValue('symptomExperienced',v);


    const setErrorOnNonFilledFields = ()=>{
        let { ncdcContacted,contactTested,symptomExperienced} = fieldValues;
        let error = {
            ncdcContacted: isNull(ncdcContacted),
            contactTested: isNull(contactTested),
            symptomExperienced: isES(symptomExperienced),
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
        const { ncdcContacted, contactTested, symptomExperienced} = fieldValues
        const generalQuestions = {
            ncdcContacted,
            contactTested,
            symptomsSeverity: symptomExperienced
        }
        dispatch(storeGeneralQuestions(generalQuestions))
    }

    const handleSubmit = ()=>{
        const { ncdcContacted, contactTested, symptomExperienced} = fieldValues
        const generalQuestions = {
            ncdcContacted,
            contactTested,
            symptomsSeverity: symptomExperienced
        }
       let error = setErrorOnNonFilledFields();
       if(checkForAnyError(error)) return;
       storeValues();
       //dispatch submit action to create data in database
       dispatch(createReport({
           report: {
               ...reportForm,
               generalQuestions:{
                   ...generalQuestions
               }
           }
       }))
    }

    const handlePrevious = ()=>{
        storeValues();
        previous()
    }

    return (
        <FormCategory icon = 'add' index = {index} style = {style} header = 'General Questions'>
            <div className="Content">
                <div className="Fields ScrollbarHide">
                        <div className="FieldInputs">
                            <Option preValue = {ncdcContacted} error = {errorFields.ncdcContacted} handleChange = {ncdcContactedHandler} label = 'Have you been contacted by NCDC before?' options = {options.yesNo}/>
                            <Option preValue = {contactTested} error = {errorFields.contactTested} handleChange = {contactTestedHandler} label = 'Within the last two weeks, have you had contact with someone who tested positive' options = {options.yesNoNotSure}/>
                            <Option preValue = {symptomsSeverity} error = {errorFields.symptomExperienced} handleChange = {symptomExperiencedHandler} label = 'Kindly qualify the symptoms you have had' options = {options.symptomsSeverity}/>
                        </div>
                        <div className = 'ActionButtons'>
                            <PrimaryButton onClick = {handlePrevious}>
                                Back
                            </PrimaryButton>
                            <PrimaryButton onClick = {handleSubmit}>
                                Report Condition
                            </PrimaryButton>
                        </div>
                </div>
                {
                     transitions.map(({ item, key, props }) =>
                     item && 
                        (   <Overlay style = {props}>
                                <Loader/>
                            </Overlay>
                        ))
                }
                {
                    transitions2.map(({ item, key, props }) =>
                    item && 
                       (   <StyledNotification onClick = {closeFailureNotification} style = {props}>
                                <div className = "Content">
                                        <I classNames = {['md-80']} icon = 'done_all'/>
                                        <p>
                                            Your report has been successfully <span>Submitted</span>
                                        </p>
                                        <button onClick = {closeSuccessNotification}> 
                                            OK
                                        </button>
                                </div>
                           </StyledNotification>
                       ))
                }
                {
                    transitions3.map(({ item, key, props }) =>
                    item && 
                       (   <StyledNotification onClick = {closeFailureNotification} style = {props}>
                                <div className = 'Content'>
                                    <I icon = 'error' classNames = {['md-80','error']} />
                                    <p>
                                        We are sorry, We couldn't save the report
                                        <span> <br/> Ensure you have an active data connection and try again</span>
                                    </p>
                                    <button onClick = {closeFailureNotification}>
                                        OK
                                    </button>
                                </div>
                           </StyledNotification>
                       ))
                }
            </div>
        </FormCategory>
    );
}

export default General;