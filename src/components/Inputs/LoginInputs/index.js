import React from 'react';

//Styles
import * as S from '../LoginInputs/style'

const Input = ({
    id,
    label, 
    type, 
    haveAutoFocus, 
    value, 
    setValue, 
    error,
    handleFocus,
    handleClick,
    handleBlur,
    marginBottom,
    isHide }) => {

    const handleChange = (ev) => {
        setValue(ev.target.value)
    }

    return (
        <S.Container marginBottom={marginBottom} >
            <S.Label 
            htmlFor={label}
            >
            {label}
            </S.Label>
            <S.LoginInput 
            id={label} 
            type={type}
            name={label} 
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoFocus={haveAutoFocus}
            value={value}
            error={error}
            />
            {(error && !(id ==='password')) && (
            <S.CrossError>
                <S.CrossOne />
                <S.CrossTwo/>
            </S.CrossError>
            )}
            {id === 'password' && (
                <S.DisplayBtn isHide={!isHide} onClick={(ev) => handleClick(ev, type)} />
            )}
        </S.Container>
    )
}

export default Input