import React, { useRef, useState, useEffect } from 'react';
import FormCategory from './FormCategory'
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import { genderOpt,stateOpt} from '../constants/appConst';
import { isES, validators } from '../utils/appUtils';
import { useSelector, useDispatch } from 'react-redux';
import { storePersonalInfo } from '../actions/storeActions'
import { checkUserExists } from '../services/userServices';
import PrimaryButton from './PrimaryButton';

const ERROR_MESSAGE = `A report has already been submitted with this email address`;
const ERROR_MESSAGE2 = 'Enter a valid email address';


const UserInfoForm = ({style,next,index})=>{
    const selector = useSelector(state=>state.reportForm.personalInformation);
    const {phoneNumber,email,state,age,gender,firstName,lastName } = selector;
    const [emailError, setEmailError] = useState('Invalid email address');


    const [errorFields, setErrorFields] = useState({
        email: false,
        gender: false,
        pNumber:false,
        age: false,
        state:false,
        fName: false,
        lName:false,
    })

    const [fieldValues,setFieldValues]= useState({
        email: email,
        gender: gender,
        pNumber:phoneNumber,
        age: age,
        state:state,
        fName: firstName,
        lName: lastName
    })

    const [checkingEmail,setCheckingEmail] = useState(false);
    const [emailCheckSuccess,setEmailCheckSuccess] = useState(false);

    const checkingAndSetEmail = (email)=>{
        email = email.toLowerCase();
        const  emailCheckSuccess = (exists)=>{
            setEmail(!exists,email);
            setCheckingEmail(false)
        }

        const  emailCheckFailure = (error)=>{
            setEmail(false,email)
            setCheckingEmail(false)
        }
        checkUserExists(email,emailCheckSuccess,emailCheckFailure)
    }

    const emailHandler = (v)=>{
        setCheckingEmail(true)
        setFieldValue('email',v)
        checkingAndSetEmail(v);
    }

    const ageHandler = (v)=>setFieldValue('age',v)
    const genderHandler = (v)=>setFieldValue('gender',v)
    const stateHandler = (v)=>setFieldValue('state',v)
    const phoneNumberHandler = (v)=>setFieldValue('pNumber',v)
    const firstNameHandler = (v)=>setFieldValue('fName',v)
    const lastNameHandler = (v)=>setFieldValue('lName',v)

    const setErrorOnNonFilledFields = ()=>{
        let state = {
            pNumber: !validators.phoneNumberValidator(fieldValues.pNumber),
            age: isES(fieldValues.age),
            gender: isES(fieldValues.gender),
            state: isES(fieldValues.state),
            fName: isES(fieldValues.fName),
            lName: isES(fieldValues.lName)
        }
        setErrorFields(state);

        return state;
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

    const setEmail = (value,email)=>{ 
       let isValidEmail =  validators.emailValidator(email);
       value = isValidEmail ? value : !value;
                setEmailCheckSuccess(value);
                setEmailError(isValidEmail ? ERROR_MESSAGE: ERROR_MESSAGE2)
                setErrorFields(errorFields=>({
                    ...errorFields,
                    email: !value
        }))
    }
    
    const handleNext = ()=>{  
        checkUserExists(fieldValues.email.toLowerCase(),exists=>{
            if(exists ){
                console.log('FAILED FIRST')
                setEmail(false,fieldValues.email);
                return
            }else{
                setEmail(true,fieldValues.email);
                let errorFields = setErrorOnNonFilledFields();
                setEmailError(ERROR_MESSAGE2);
                if(checkForAnyError(errorFields)) return;

                const { pNumber, email, age, gender, state,fName,lName } =  fieldValues;
                const personalInfo = {
                    email: email,
                    phoneNumber: pNumber,
                    gender: gender,
                    age: age,
                    state: state,
                    firstName:fName,
                    lastName:lName
                }
                dispatch(storePersonalInfo(personalInfo))
                next();
            }
        },(error)=>{console.log('ERROR',error)})
    }

    return (
        <FormCategory index = {index} style = {style} header = 'Personal Information' icon = 'person_outline'>
            <div className="Content">
                <div className="Fields ScrollbarHide">
                        <div className="FieldInputs">
                        <div className="Field-Layout Two-Field">
                        <CustomInput preValue = {firstName} errorMessage = 'Enter your first name' error = {errorFields.fName} handleChange = {firstNameHandler} placeHolder = 'First name'/>
                        <CustomInput preValue = {lastName} errorMessage = 'Enter your last name' error = {errorFields.lName} handleChange = {lastNameHandler} placeHolder = 'Last name'/>
                        </div>
                        <div className="Field-Layout Two-Field">
                            <CustomInput success = {emailCheckSuccess} successMessage = 'New report' loading = {checkingEmail} preValue = {email} errorMessage = {emailError} error = {errorFields.email} handleChange = {emailHandler} icon = 'alternate_email' placeHolder = 'Email address' info = "Enter the email you created an account with"/>
                            <CustomInput preValue = {phoneNumber} icon = 'call' errorMessage = 'Enter a valid phone number' error = {errorFields.pNumber} handleChange = {phoneNumberHandler}  icon = 'phone' placeHolder = 'Phone number' info = "Enter a valid mobile number"/>
                        </div>
                        <div className="Field-Layout Two-Field-Phone">
                            <CustomSelect preValue = {gender} errorMessage = 'Select gender' error = {errorFields.gender} handleChange = {genderHandler}  options = {genderOpt} placeHolder = 'Gender'/>
                            <CustomInput preValue = {age} errorMessage = 'Input you age' error = {errorFields.age} handleChange = {ageHandler}  placeHolder = 'Age' type = 'number'/>
                        </div>
                        <div className = 'Field-Layout One-Filed'>
                            <CustomSelect preValue = {state} errorMessage = 'Current state of residence is required' error = {errorFields.state} handleChange = {stateHandler}  options = {stateOpt} placeHolder = 'State' info = 'Select your current state of residence'/>
                        </div>
                        </div>
                        <div className = 'ActionButtons'>
                            <PrimaryButton>
                                Already submitted a report
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





export default UserInfoForm;