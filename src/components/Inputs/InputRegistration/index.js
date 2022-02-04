import React from 'react';
import * as S from './style'
import { useSelector, useDispatch } from "react-redux";
import { setNationality } from '../../../modules/Beneficiary/Dataflow/reducers-and-actions/beneficiary';


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
	handleChange,
	placeholder,
	noPadding,
	isDetailed
}) => {

	return (
		<S.Label width={width} row={row} optional={optional}> {label}
			<S.Input
				type={type}
				widthInput={widthInput}
				HeightInput={HeightInput}
				value={value}
				isDisabled={isDisabled}
				disabled={disabled}
				isDisabled={isDisabled}
				onChange={handleChange}
				noPadding={noPadding}
				row={row}
				placeholder={placeholder}
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
	isOpened,
	action,
	toogle,
	state,
	optional,
	disabled
}) => {

	const dispatch = useDispatch();

	const handleClick = (e, option) => {
		e.preventDefault();
		dispatch(action(option))
		toogle(!state)
	}

	console.log(options)

	const calcHeight = options.length > 3 ? (options.length * 32) + .5: 'fit-content'

	return (
		<>
			<S.Label 
			width={width}
			optional={optional} 
			> {label}
				<S.Select onClick={handleClickSelect} disabled={disabled} >
					{value}
					<S.Arrow
						src={source}
						isOpened={isOpened}
						alt='seta'
					/>
				</S.Select>

				{isOpened && (
					<S.Options height={calcHeight} >
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