import React from 'react';

function validationComponent(props){

    
    return (
        <div>
            {props.length < 5 ? <p>Text too short</p> : <p>Text long enough</p>}
        </div>
    )
}

export default validationComponent;