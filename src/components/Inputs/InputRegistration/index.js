import React from 'react';
import * as S from './style'

export const Input = ({
	type,
	width,
	label,
	value,
	row,
	disabled,
	handleChange,
	noPadding
}) => {

	return (
		<S.Label width={width} row={row}> {label}
			<S.Input 
				type={type}
				value={value} 
				disabled={disabled} 
				onChange={handleChange}
				noPadding={noPadding}
			/>
		</S.Label>
	)
}


export const Select = ({
	width,
	label,
	value,
	handleClick,
	handleClickSelect,
	options = [],
	source,
	isOpened
}) => {

	const handleClickOption = (e, value) => {
		e.preventDefault();
		handleClick(value);
		console.log(value);
		console.log(handleClick);
	}
	return (
		<>
			<S.Label width={width} > {label}
				<S.Select onClick={handleClickSelect}>
					{value}
					<S.Arrow
						src={source} 
						isOpened={isOpened} 
						alt='seta' 
					/> 
				</S.Select>

				{isOpened && (
				<S.Options >
					{options.map((option, index) => {
						return (
							<S.Button 
								key={index} 
								onClick={(e) => handleClickOption(e, option)} 
							>
								{option}
							</S.Button>
						)
					})}
					
				</S.Options>
			)}
			</S.Label>
			
		</>
	)
}