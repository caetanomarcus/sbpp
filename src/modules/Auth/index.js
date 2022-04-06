import React from 'react';
import { useNavigate } from 'react-router-dom'

//Components

import Button from './../../components/Buttons/ConfirmSendButton';

//Styles 
import * as S from './style';

//Images 
import logoSbpp from '../../assets/images/sbpp-logo.png';
import logoSula from '../../assets/images/sulamerica-logo.png';



const LoginScreen = () => {

    const navigate = useNavigate();

    return (
        <S.Wrapper>
            <S.LoginContainer>
                <S.Header>
                    <S.Logo src={logoSbpp} alt='logo sbpp' />
                    <S.Line />
                </S.Header>
                <S.ButtonContainer id='form' >
                    <Button
                        buttonName='Entrar'
                        background='#001E64'
                        handleClick={() => navigate('/beneficiario')}
                        marginTop='32px'
                    />
                </S.ButtonContainer>
                <S.loginFooter>
                    <S.Logo src={logoSula} width='138px' alt='logo sulamerica' />
                </S.loginFooter>
            </S.LoginContainer>
        </S.Wrapper>
    )
}

export default LoginScreen