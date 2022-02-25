import React from 'react';
import * as S from './style'
import { useSelector, useDispatch } from "react-redux";
import {setAllAdress , setAllAdressOptional} from '../../../modules/Beneficiary/Dataflow/reducers-and-actions/beneficiary';
import { cepMask, rgMask, cpfMask, dateMask, phoneMask, agencyMask, accountMask, cidMask } from './masks';




export const Input = ({
	type,
	width,
	widthInput,
	HeightInput,
	label,
	value,
	row,
	optional,
	disabled,
	isDisabled,
	placeholder,
	noPadding,
	isDetailed,
	action,
	id,
	adressState,
	maxLength,

}) => {

	const dispatch = useDispatch();


	const handleChange = (e, setFunction) => {
		e.preventDefault();

		console.log(id)

		switch(id) {
			case 'cep':
				dispatch(setFunction(cepMask(e.target.value)))
				return
			case 'rg':
				dispatch(setFunction(rgMask(e.target.value)))
				return
			case 'cpf':
				dispatch(setFunction(cpfMask(e.target.value)))
				return
			case 'date':
				dispatch(setFunction(dateMask(e.target.value)))
				return
			case 'phone':
				dispatch(setFunction(phoneMask(e.target.value)))
				return
			case 'agency':
				dispatch(setFunction(agencyMask(e.target.value)))
				return
			case 'account':
				dispatch(setFunction(accountMask(e.target.value)))
				return
			case 'cid':
				dispatch(setFunction(cidMask(e.target.value)))
				return
			default:
				dispatch(setFunction(e.target.value))
				return
		}
			
	}

	const handleFocus = () => {
		if(id === 'cep') {

		}
	}

	const handleBlur = () => {

			if((id === 'cep') && value !== ''){
				fetch(`https://viacep.com.br/ws/${value}/json/`)
				.then(res => res.json())
				.then(data => {
					console.log(data)
					const newData ={
					cep: value,
					address: data.logradouro,
					number: adressState.number,
					complement: adressState.complement,
					district: data.bairro,
					city: data.localidade,
					uf: data.uf,
					hasMailAddress: adressState.hasMailAddress,
					}
	
					dispatch(setAllAdress(newData))
				}
				)
				.catch( err => {
					console.log(err)
				})
			
			}

			if((id === 'cep2') && value !== ''){
				fetch(`https://viacep.com.br/ws/${value}/json/`)
				.then(res => res.json())
				.then(data => {
					console.log(data)
					const newData ={
					cep: value,
					address: data.logradouro,
					number: adressState.number,
					complement: adressState.complement,
					district: data.bairro,
					city: data.localidade,
					uf: data.uf,
					hasMailAddress: adressState.hasMailAddress,
					}
	
					dispatch(setAllAdressOptional(newData))
				}
				)
				.catch( err => {
					console.log(err)
				})
			
			}


		
		
	}

	return (
		<S.Label width={width} row={row} optional={optional}> {label}
			<S.Input
				type={type}
				widthInput={widthInput}
				HeightInput={HeightInput}
				value={value}
				isDisabled={isDisabled}
				disabled={disabled}
				onChange={(e) => handleChange(e, action)}
				noPadding={noPadding}
				row={row}
				placeholder={placeholder}
				onBlur={handleBlur}
				maxLength={maxLength}
			/>
			{isDetailed && (
				<S.AddressDetails>
					Campo controlado pelo CEP
				</S.AddressDetails>
			)}
		</S.Label>
	)
}


export const Select = ({
	width,
	label,
	value,
	handleClickSelect,
	options = [],
	source,
	action,
	toogle,
	state,
	optional,
	disabled,
	noLabel,
	initialModal,
	typeState
}) => {

	const dispatch = useDispatch();

	const handleClick = (e, option) => {
		e.preventDefault();
		if (typeState === 'localState') {
			action(option);
			toogle(!state);
			return
		}
		dispatch(action(option))
		toogle(!state)
	}


	const calcHeight = options.length > 3 ? (options.length * 32) + .5: 'fit-content'

	return (
		<>
			<S.Label 
			width={width}
			optional={optional} 
			noLabel={noLabel}
			> {label}
				<S.Select onClick={handleClickSelect} disabled={disabled} >
					{value}
					<S.Arrow
						src={source}
						isOpened={state}
						alt='seta'
					/>
				</S.Select>

				{state && (
					<S.Options height={calcHeight} initialModal={initialModal} width={width} >
						{options.map((option, index) => {
							return (
								<S.Button
									key={index}
									onClick={(ev) => handleClick(ev, option)}
								>
									{option.name || option}
								</S.Button>
							)
						})}

					</S.Options>
				)}
			</S.Label>

		</>
	)
}