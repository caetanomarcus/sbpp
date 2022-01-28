import React, { useState } from 'react';
import Button from '../../../../components/Buttons/ConfirmSendButton';
import Input from '../../../../components/Inputs/LoginInputs';

//Styles
import * as S from './style'


const Login = ( {setScreen} ) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [typePassword, setTypePassoword] = useState('password');
    const [isHide, setHide] = useState(true);

    const canSend = userName && password

    const handleLogin = (ev) => {
        ev.preventDefault();

        if(canSend){
            if (userName === 'abc' && password === '123') {
                console.log('logou')
            } else {
                setError(true)
            }
        }

    }


    const handleFocus = () => {
        
        if(error){
            setUserName('');
            setPassword('');
            setError(false);
        }
    }

    const handleClick = (ev) => {
        ev.preventDefault();
        setScreen('forgetPassword')

    }

    const handleClickDisplay = (ev,type) => {
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

    return (
        <S.Container id='form'>
            <Input
                label='Login'
                type='text'
                setValue={setUserName}
                value={userName}
                error={error}
                handleFocus={handleFocus}
                haveAutoFocus={true}
                marginBottom='23px'
            />
            <Input
                id='password'
                label='Senha'
                type={typePassword}
                setValue={setPassword}
                value={password}
                error={error}
                handleFocus={handleFocus}
                handleClick={handleClickDisplay}
                isHide={isHide}
            />
            <Button
                buttonName='Entrar'
                background={canSend ? '#001E64' : "#828282"}
                handleClick={handleLogin}
                marginTop='32px'
            />
            {error && (
                <S.ErroBox>
                    <S.TrianguleErroBox />
                    <S.ErrorMsg>Login ou senha incorreta. Favor inserir novamente!</S.ErrorMsg>
                </S.ErroBox>
            )}
            <S.ButtonWrapper>
                <S.ForgotPassword onClick={handleClick} >Esqueci minha senha</S.ForgotPassword>
            </S.ButtonWrapper>
        </S.Container>
    )
}

export default Login