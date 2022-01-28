import React, { useState } from 'react';
import Button from '../../../../components/Buttons/ConfirmSendButton';
import Input from '../../../../components/Inputs/LoginInputs';

//Styles
import * as S from './style'

//Images
import confirmed from '../../../../assets/icons/confirmed.png'

const ChangePassword = () => {
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [canShowBlueBox, setShowBlueBox] = useState(false);
    const [sent, setSent]= useState(false);
    const [typePassword, setTypePassoword] = useState('password');
    const [typePasswordTwo, setTypePassowordTwo] = useState('password');
    const [isHide, setHide] = useState(true);
    const [isHideTwo, setHideTwo] = useState(true)

    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const canSend = (((confirmedPassword && password) && confirmedPassword === password) && password.match(re));

    const handleClickConfirm = (ev) => {
        ev.preventDefault();
        if(canSend) {
            setSent(true)
        }
    }

    const handleFocus = () => {
        setShowBlueBox(true)
      
    }

    const handleBlur = () => {
        setShowBlueBox(false)
    }

    
    const handleClickDisplay = (ev, type) => {
        ev.preventDefault()

        switch (type){
            case 'password':
                setTypePassoword('text');
                break;
            case 'text':
                setTypePassoword('password');
                break;
        }

        setHide(!isHide);
    }

    const handleClickDisplayTwo = (ev, type) => {
        ev.preventDefault()

        switch (type){
            case 'password':
                setTypePassowordTwo('text');
                break;
            case 'text':
                setTypePassowordTwo('password');
                break;
        }

        setHideTwo(!isHideTwo);
    }

    return (
        <S.Container id='form'>
            <Input
                id='password'
                label='Nova senha'
                type={typePassword}
                setValue={setPassword}
                value={password}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                haveAutoFocus={true}
                marginBottom='23px'
                handleClick={handleClickDisplay}
                isHide={isHide}
            />
            <Input
                id='password'
                label='Confirmar nova senha'
                type={typePasswordTwo}
                setValue={setConfirmedPassword}
                value={confirmedPassword}
                error={confirmedPassword !== password? error: null}
                handleBlur={() => confirmedPassword !== password? setError(true): null}
                handleClick={handleClickDisplayTwo}
                isHide={isHideTwo}
            />
            <S.RedText isVisible={error && (confirmedPassword !== password)} >As senhas estão diferentes</S.RedText>
            <Button
                canSend={canSend}
                buttonName={sent? "Confirmada!": 'Confirmar'}
                background={sent? 'transparent':canSend ? '#001E64' : "#828282"}
                sent={sent}
                handleClick={handleClickConfirm}
                marginTop='32px'
            />
            <S.BackBtn onClick={ev => ev.preventDefault()} sent={sent} >Voltar para o login</S.BackBtn>
            {canShowBlueBox && (
                <S.BlueBox>
                    <S.TrianguleBox />
                    <S.Text>A senha deve conter:</S.Text>
                    <S.Text isMatch={password.length >= 8} >
                        ● Comprimento mínimo de oito caracteres. <S.ConfirmedLogo src={confirmed} isMatch={password.length >= 8} alt='confirmado' /> 
                    </S.Text>
                    <S.Text isMatch={password.match(/\d/)} >
                        ● Caracteres numéricos: mínimo de um número.  <S.ConfirmedLogo src={confirmed} isMatch={password.match(/\d/)} alt='confirmado' />
                    </S.Text>
                    <S.Text isMatch={password.match(/\W/)} >
                        ● Caracteres especiais: mínimo de um caractere especial.  <S.ConfirmedLogo src={confirmed} isMatch={password.match(/\W/)} alt='confirmado' />
                    </S.Text>
                    <S.Text isMatch={password.match(/[A-Z]/)} >
                        ● Letras maiúsculas: mínimo de uma letra maiúscula.  <S.ConfirmedLogo src={confirmed} isMatch={password.match(/[A-Z]/)} alt='confirmado' />
                    </S.Text>
                    <S.Text isMatch={password.match(/[a-z]/)} >
                        ● Letras minúsculas: mínimo de uma letra minúscula.  <S.ConfirmedLogo src={confirmed} isMatch={password.match(/[a-z]/)} alt='confirmado' />
                    </S.Text>
            </S.BlueBox>
            )}
        </S.Container>
    )
}

export default ChangePassword