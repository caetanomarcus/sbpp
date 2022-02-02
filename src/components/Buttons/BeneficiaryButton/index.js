import React from "react";
import * as S from './style'

const Button = ({handleClick, source, alt, text, width}) => {
    return (
        <S.RegisterBtn onClick={handleClick} width={width} >{text}<S.RightIcon src={source} alt={alt} /></S.RegisterBtn>
    )
}

export default Button