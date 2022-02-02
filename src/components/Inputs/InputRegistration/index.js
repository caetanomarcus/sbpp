import React from 'react';
import * as S from './style'
import { useSelector , useDispatch} from "react-redux";
import { setNationality } from '../../../modules/Beneficiary/Dataflow/reducers-and-actions/beneficiary';


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
	handleClickSelect,
	options = [],
	source,
	isOpened,
	action,
	toogle,
	state
}) => {

	const dispatch = useDispatch();

	const handleClick = (e, option)=> {
		e.preventDefault();
		dispatch(action(option))
		toogle(!state)
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
				<S.Options height={options * 36} >
					{options.map((option, index) => {
						return (
							<S.Button 
								key={index} 
								onClick={(ev) => handleClick(ev,option)} 
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