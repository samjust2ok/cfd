import React, {useState} from 'react';
import StyledCustomSelect from '../styled/StyledCustomSelect';
import I from './i';


const CustomSelect = ({handleChange, preValue, options, error = false,icon, type = 'text',errorMessage,info,placeHolder})=>{
    const [showOpt, setShowOpt] = useState(false);
    const [selected,setSelected] = useState({
        display: preValue
    });


    const showOptions = ()=> setShowOpt(true);
    const hideOptions = ()=> setShowOpt(false);

    const handleOptionsVisibility = (e)=>{
        e.stopPropagation();
        showOpt ? hideOptions():showOptions();
    }

    const handleSelect = (e)=>{
        let index = Number(e.target.dataset.id);
        setSelected(options[index])
        let  { value } = options[index];
        handleChange && handleChange(value)
    }

    window.addEventListener('click',hideOptions)

    return (
        <StyledCustomSelect error = {error}>
                <div onClick = {handleOptionsVisibility} className="Selector">
                    <div focused = {`${showOpt}`} className = "SelectorDisplay">
                        <div optionselected = {`${!selected.display}`} className = 'PlaceHolder'>
                            {placeHolder}
                        </div>
                        {
                            selected &&
                            <div className = 'Value'>
                                {selected.display}
                            </div>
                        }
                    </div>
                    <div className="Icon">
                            <I icon  = 'arrow_drop_down'/>
                    </div>
                </div>
                <div className="InfoField">
                    {
                        error ? 
                        <p className = 'Error'><span><I classNames = {['md-16']} icon = "error_outline"/></span>{errorMessage}</p>:
                        info ? 
                        <p className = 'Info'>{info}</p>:
                        null
                    }
                </div>
                {
                    showOpt && 
                    <ul className = "Options">
                        {
                            options.map((option,index)=>{
                                return <li onClick = {handleSelect} key = {index} data-id = {index}>{option.display}</li>
                            })
                        }
                    </ul>
                }
        </StyledCustomSelect>
    );
}

export default CustomSelect;