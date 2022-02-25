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

	return (
		<S.Container id='form' onSubmit={handleLogin} >
			<Button
				buttonName='Entrar'
				background='#001E64'
				handleClick={() => navigate('/beneficiary')}
				marginTop='32px'
			/>
		</S.Container>
	)
}

export default Login