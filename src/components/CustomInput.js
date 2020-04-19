import React, {useState} from 'react';
import StyledCustomInput from '../styled/StyledCustomInput';
import theme from '../constants/theme';
import LinLoader from './LinLoader';
import I from './i';


const CustomInput = ({handleChange,success = false, successMessage,loading = false, preValue,error = false,icon, type = 'text',errorMessage,info,placeHolder})=>{
    const [value, setValue] = useState(preValue ? preValue : '');

    const handleInputChange = (e)=>{
        let typed = e.target.value;
        setValue(typed)
        handleChange && handleChange(typed)
    }

    return (
        <StyledCustomInput error = {error}>
                <div className="InputField">
                    <div className = "InputContainer">
                        <input value = {value} hasinput = {`${value.length > 0}`} onChange = {handleInputChange} type = {type}/>
                        <div>
                            {placeHolder}
                        </div>
                    </div>
                    {
                       loading ?
                       <LinLoader color = {theme.lnGrad2}/> : 
                       icon &&
                        <div className="Icon">
                            <I icon = {icon}/>
                        </div>
                    }
                </div>
                <div className="InfoField">
                    {
                        success ? 
                        <p className = 'Item Success'><I classNames = {['md-16']} icon = "check_circle_outline"/><span>{successMessage}</span></p>:
                        error ? 
                        <p className = 'Item Error'><I classNames = {['md-16']} icon = "error_outline"/><span>{errorMessage}</span></p>:
                        info ? 
                        <p className = 'Item Info'>{info}</p>:
                        null
                    }
                </div>
        </StyledCustomInput>
    );
}

export default CustomInput;