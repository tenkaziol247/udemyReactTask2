import React from 'react';
import './CharComponent.css';

function charComponent(props){
    return (
        <div className="char" onClick={props.click}>{props.char}</div>
    )
}

export default charComponent;