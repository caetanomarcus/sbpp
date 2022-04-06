import React, { useState, useEffect } from 'react';
import * as S from './style'
import { useDispatch } from "react-redux";
import { setAllAdress, setAllAdressOptional } from '../../../modules/Beneficiary/Dataflow/reducers-and-actions';
import {phoneMask} from './masks';
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
	placeholder,
	noPadding,
	isDetailed,
	action,
	id,
	adressState,
	maxLength,
	marginBottom,
	marginRight,
	cleanButton,
	mask,
	complement

}) => {

	const dispatch = useDispatch();


	const handleChange = (e, setFunction) => {
		e.preventDefault();

		switch (id) {
			case 'phone':
				dispatch(setFunction(phoneMask(e.target.value)))
				return
			default:
				dispatch(setFunction(e.target.value))
				return
		}

		// dispatch(setFunction(e.target.value))

	}

	const handleBlur = () => {

		if ((id === 'cep') && value !== '') {
			fetch(`https://viacep.com.br/ws/${value}/json/`)
				.then(res => res.json())
				.then(data => {
					const newData = {
						cep: value,
						address: data.logradouro,
						number: adressState.number,
						complement: adressState.complement,
						district: data.bairro,
						city: data.localidade,
						uf: data.uf,
						correspondenceType: adressState.correspondenceType,
						hasDifferentAddress: adressState.hasDifferentAddress,
					}

					dispatch(setAllAdress(newData))
				}
				)
				.catch(err => {
					console.log(err)
				})

		}

		if ((id === 'cep2') && value !== '') {
			fetch(`https://viacep.com.br/ws/${value}/json/`)
				.then(res => res.json())
				.then(data => {
					const newData = {
						cep: value,
						address: data.logradouro,
						number: adressState.number,
						complement: adressState.complement,
						referencePoint: adressState.referencePoint,
						district: data.bairro,
						city: data.localidade,
						uf: data.uf,
					}

					dispatch(setAllAdressOptional(newData))
				}
				)
				.catch(err => {
					console.log(err)
				})

		}

	}

	return (
		<S.Label width={width} row={row} optional={optional} marginBottom={marginBottom} marginRight={marginRight} complement={complement}> {label}
			<S.Input
				type={type}
				widthInput={widthInput}
				HeightInput={HeightInput}
				value={value}
				disabled={disabled}
				onChange={(e) => handleChange(e, action)}
				noPadding={noPadding}
				row={row}
				placeholder={placeholder}
				onBlur={handleBlur}
				maxLength={maxLength}
				mask={mask}
				maskChar={null}

			/>
			{complement && <S.Complement>{complement}</S.Complement>}
			{isDetailed && (
				<S.AddressDetails>
					Campo controlado pelo CEP
				</S.AddressDetails>
			)}
			{(cleanButton && value) && (
				<S.Cross src={cross} alt="cross" onClick={() => dispatch(action(''))} />
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
	typeState,
	id,
	element,
	placeholder
}) => {

	const [opcoes, setOpcoes] = useState(options)

	const dispatch = useDispatch();


	function removerSpecials(texto) {
		// eliminando acentuação
		texto = texto.replace(/[ÀÁÂÃÄÅ]/, "A");
		texto = texto.replace(/[àáâãäå]/, "a");
		texto = texto.replace(/[ÈÉÊË]/, "E");
		texto = texto.replace(/[èéêë]/, "e");
		texto = texto.replace(/[Ç]/, "C");
		texto = texto.replace(/[ç]/, "c");
		texto = texto.replace(/[ÌÍÎÏ]/, "I");
		texto = texto.replace(/[ìíîï]/, "i");
		texto = texto.replace(/[ÒÓÔÕÖ]/, "O");
		texto = texto.replace(/[òóôõö]/, "o");
		texto = texto.replace(/[ÙÚÛÜ]/, "U");
		texto = texto.replace(/[ùúûü]/, "u");
		texto = texto.replace(/[ÿ]/, "y");
		texto = texto.replace(/[Ñ]/, "N");
		texto = texto.replace(/[ñ]/, "n");
		return texto.replace(/[^a-z0-9]/gi, '');
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
		
			e.preventDefault();
			dispatch(setFunction(e.target.value))
			if (e.target.value) {
				const newOptions = options.filter(option => removerSpecials(option).toLowerCase().includes(removerSpecials(e.target.value).toLowerCase()))
				setOpcoes(newOptions)
			}
			if(e.target.value === ''){
				setOpcoes(options)
			}
		
	}

	const calcHeight = opcoes.length > 3 ? (opcoes.length * 32) + .5 : 'fit-content'

	useEffect(() => {
			if(id === 'naturalness') {
				setOpcoes(options)
			}
		
	}, [options, id])

	const handleBlur = () => {
		setTimeout(() => {
			toogle(!state)
		}, 200)
	}


	return (
		<>
			<S.Label
				width={width}
				optional={optional}
				noLabel={noLabel}
				disabled={disabled}
				
			> {label}
				<div onBlur={handleBlur}>
				<S.Select onClick={!disabled && handleClickSelect} disabled={disabled} outline={state} >
					<S.SearchInput
						value={value}
						onChange={(e) => handleChange(e, action)}
						readOnly={(options.length < 8) }
						ref={element}
						placeholder={placeholder}
						autocomplete="off"
						disabled={disabled}
					/>
					<S.Arrow
						src={source}
						isOpened={state}
						alt='seta'
						disabled={disabled}
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
				</div>
			</S.Label>

		</>
	)
}