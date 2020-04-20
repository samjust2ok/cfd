import React from 'react';
import StyledFormCategory from "../styled/StyledFormCategory";
import I from './i';


const FormCategory = ({children,header,icon,index})=>{
    const TOTAL = 6;
    return (
        <StyledFormCategory className = "Scrollbar">
            <div className="FormHeader">
                <div className = 'Content'>
                    <h1>{header}</h1>
                    {
                        icon && 
                        <I classNames = {['md-30']} icon = {icon}/>
                    }
                </div>
                <div className = "Indicator">
                    <div className = "Ind">
                        <p><b>{index+1}</b> / <span>{TOTAL}</span></p>
                    </div>
                </div>

            </div>
            <div className="FormContent Scrollbar">
                <div className = "Indicator">
                    <div className = "Ind">
                        <p><b>{index+1}</b> / <span>{TOTAL}</span></p>
                    </div>
                </div>
                <div className = "MainContent">
                    {children}
                </div>
            </div>    
        </StyledFormCategory>
    )
}

export default FormCategory;