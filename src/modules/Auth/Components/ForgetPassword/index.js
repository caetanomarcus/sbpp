import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setEmail } from '../../Dataflow/reducers-and-actions/auth'

//Utils
import { handleInputChange } from '../../../../utils';

//Style
import * as S from './style';

//Images
import logo from '../../../../assets/icons/back-button.png'
import Input from '../../../../components/Inputs/LoginInputs';
import Button from '../../../../components/Buttons/ConfirmSendButton';



const ForgetPassword = ({ setScreen}) => {

    const [sent, setSent]= useState(false);

    //Redux State and actions

    const email = useSelector(state => state.auth.email)
    const dispatch = useDispatch()


    const validateEmail = (email) => {
        const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
        return expression.test(String(email).toLowerCase());
    };

    const handleSendMail = () => {
        // try {} catch {}
        if(validateEmail(email)){
            setSent(true)
        }
    }

    return(
        <S.Container>
            <S.Box>
                <S.BackButton src={logo} onClick={() => setScreen('login')} />
                <S.TextBold>Esqueci minha senha</S.TextBold>
            </S.Box>
            <S.Text>Coloque seu email no campo abaixo para o envio do link de recuperação!</S.Text>
            <Input 
            type='email' 
            label='Email' 
            value={email} 
            handleChange={(ev) => handleInputChange(ev, dispatch, setEmail)}
            haveAutoFocus={true}
            />
            <S.RedText isVisible={(email.length > 0 && !validateEmail(email))} >Email inválido</S.RedText>
            <Button buttonName={sent? 'Enviado!': 'Enviar'}
                background={sent? 'transparent': validateEmail(email)? '#001E64' : "#828282"}
                marginTop='24px'
                sent={sent}
                handleClick={handleSendMail}
            />
            <S.SentMgsBox sent={sent} >
                <S.SentMsg>Por favor, checar sua caixa de entrada.</S.SentMsg>
                <S.SentMsg> Não recebeu? <S.ResendBtn onClick={handleSendMail} >Clique aqui para reenviar</S.ResendBtn> </S.SentMsg>
            </S.SentMgsBox>
        </S.Container>
    )
}

export default ForgetPassword