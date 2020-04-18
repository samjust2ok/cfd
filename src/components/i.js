import React from 'react';

const I = ({icon,classNames = [], outlined = true})=>{
    const clN = `material-icons${outlined ? '-outlined':''} ${classNames.join(' ')}`
    return (
        <i className = {clN}>{icon}</i>
    )
}

export default I;