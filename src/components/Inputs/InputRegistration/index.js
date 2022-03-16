import React, {useState} from 'react';
import * as S from './style'
import { useSelector, useDispatch } from "react-redux";
import {setAllAdress , setAllAdressOptional} from '../../../modules/Beneficiary/Dataflow/reducers-and-actions/beneficiary';
import { cepMask, rgMask, cpfMask, dateMask, phoneMask, agencyMask, accountMask, cidMask } from './masks';
import cross from '../../../assets/icons/cross.svg';


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
	marginBottom,
	marginRight,
	cleanButton

}) => {

	const dispatch = useDispatch();


	const handleChange = (e, setFunction) => {
		e.preventDefault();

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
		<S.Label width={width} row={row} optional={optional} marginBottom={marginBottom} marginRight={marginRight} > {label}
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
			{(cleanButton && value) && (
				<S.Cross src={cross} alt="cross" onClick={() => dispatch(action(''))}/>
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

	const [opcoes, setOpcoes] = useState(options)

	const dispatch = useDispatch();

	function removerSpecials(texto) {
        // eliminando acentuação
    texto = texto.replace(/[ÀÁÂÃÄÅ]/,"A");
    texto = texto.replace(/[àáâãäå]/,"a");
    texto = texto.replace(/[ÈÉÊË]/,"E");
	texto = texto.replace(/[èéêë]/,"e");
    texto = texto.replace(/[Ç]/,"C");
    texto = texto.replace(/[ç]/,"c");
	texto = texto.replace(/[ÌÍÎÏ]/,"I");
	texto = texto.replace(/[ìíîï]/,"i");
	texto = texto.replace(/[ÒÓÔÕÖ]/,"O");
	texto = texto.replace(/[òóôõö]/,"o");
	texto = texto.replace(/[ÙÚÛÜ]/,"U");
	texto = texto.replace(/[ùúûü]/,"u");
	texto = texto.replace(/[ÿ]/,"y");
	texto = texto.replace(/[Ñ]/,"N");
	texto = texto.replace(/[ñ]/,"n");
    return texto.replace(/[^a-z0-9]/gi,''); 
}

	const handleClick = (e, option) => {
		e.preventDefault();
		if (typeState === 'localState') {
			action(option);
			toogle(!state);
			return
		}
		dispatch(action(option))
		setOpcoes(options)
		toogle(!state)
	}

	const handleChange = (e, setFunction) => {
		if(options.length > 10){
			e.preventDefault();
		dispatch(setFunction(e.target.value))
		if(e.target.value !== '') {
			const newOptions = options.filter(option => removerSpecials(option).toLowerCase().includes(removerSpecials(e.target.value).toLowerCase()))
			setOpcoes(newOptions)
		}
		}
	}

	const calcHeight = options.length > 3 ? (options.length * 32) + .5: 'fit-content'


	return (
		<>
			<S.Label 
			width={width}
			optional={optional} 
			noLabel={noLabel}
			> {label}
				<S.Select onClick={handleClickSelect} disabled={disabled} outline={state} >
					{/* {value} */}
				<S.SearchInput 
				value={value}
				onChange={(e) => handleChange(e, action)} 
				readOnly={(options.length < 10) || !state}
				// onBlur={handleBlur}
				// onFocus={handleFocus}
				/>
					<S.Arrow
						src={source}
						isOpened={state}
						alt='seta'
					/>
				</S.Select>

				{state && (
					<S.Options height={calcHeight} initialModal={initialModal} width={width} >
						{opcoes.map((option, index) => {
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