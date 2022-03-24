import React from 'react';
import { Buttons, Image } from './style';
import whiteRight from './../../../assets/icons/white-right.png';
import orangeLeft from './../../../assets/icons/orange-left.png';

const BackNextButton = ( {text, background, canSend, handleClick, marginTop, sent, back} ) => {
    return (
        <Buttons 
        background={background} 
        onClick={handleClick}
        marginTop={marginTop}
        sent={sent}
        back={back}
        >
            <Image src={back? orangeLeft: whiteRight} alt='botão de avançar' />
            <p>{text}</p>
        </Buttons>
    )
}

export default BackNextButton;