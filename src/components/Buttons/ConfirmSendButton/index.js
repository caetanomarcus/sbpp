import React from 'react';
import { Buttons } from './style';

const Button = ( {buttonName, background, canSend, handleClick, marginTop, sent} ) => {
    return (
        <Buttons 
        background={background} 
        onClick={handleClick}
        marginTop={marginTop}
        sent={sent}
        >
            {buttonName} 
        </Buttons>
    )
}

export default Button