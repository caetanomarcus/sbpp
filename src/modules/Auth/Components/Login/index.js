//Libs
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setLogin, setPassword, setToken } from '../../Dataflow/reducers-and-actions/auth'

//Components
import Button from '../../../../components/Buttons/ConfirmSendButton';
import Input from '../../../../components/Inputs/LoginInputs';

//Utils
import { handleInputChange } from '../../../../utils';

//Styles
import * as S from './style'


const Login = ({ setScreen }) => {
	//Local State
	const [error, setError] = useState(false);
	const [typePassword, setTypePassoword] = useState('password');
	const [isHide, setHide] = useState(true);

	//Redux State and dispatch
	const login = useSelector(state => state.auth.login);
	const password = useSelector(state => state.auth.password);
	const dispatch = useDispatch();

	let navigate = useNavigate();


	const canSend = login && password

	const handleLogin = (ev) => {
		ev.preventDefault();
		ev.stopPropagation();

		if (canSend) {
			if (login === 'abc' && password === '123') {
				dispatch(setToken())
				navigate('/beneficiary')
			} else {
				setError(true)
			}
		}
	}

	const handleFocus = () => {

		if (error) {
			dispatch(setLogin(''))
			dispatch(setPassword(''))
			setError(false);
		}
	}

	const handleClick = (ev) => {
		ev.preventDefault();
		setScreen('forgetPassword')

	}

	const handleClickDisplay = (ev, type) => {
		ev.preventDefault();
		ev.stopPropagation();

		switch (type) {
			case 'password':
				setTypePassoword('text');
				break;
			case 'text':
				setTypePassoword('password');
				break;
			default:
				return
		}

		setHide(!isHide);
	}

	return (
		<S.Container id='form' onSubmit={handleLogin} >
			<Input
				label='Login'
				type='text'
				value={login}
				error={error}
				handleFocus={handleFocus}
				haveAutoFocus={true}
				marginBottom='23px'
				handleChange={(ev) => handleInputChange(ev, dispatch, setLogin)}
			/>
			<Input
				id='password'
				label='Senha'
				type={typePassword}
				handleChange={(ev) => handleInputChange(ev, dispatch, setPassword)}
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