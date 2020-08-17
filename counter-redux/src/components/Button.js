import React from 'react';

const Button = (props) => (
    <div>
        <button onClick={props.action} >{props.buttonTitle}</button>
    </div>
)

export default Button;