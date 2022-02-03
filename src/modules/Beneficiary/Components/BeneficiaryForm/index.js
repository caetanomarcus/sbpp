import React, { useState } from 'react';
import { useSelector } from "react-redux";

// Style
import * as S from './style';

// Components
import { Address, Contact, Document, PersonalData, Participant } from './components'

const Form = () => {
	// Client
	const client = useSelector(state => state.beneficiary.selectedClient);

	// Data local status
	const [openGender, setOpenGender] = useState(false);
	const [openNaturalness, setOpenNaturalness] = useState(false);
	const [openNationality, setOpenNationality] = useState(false);

	// Documents local status
   const [openUfRG, setOpenUfRG] = useState(false);

	// Address local status

	// Address Default
   const [openUfDefault, setOpenUfDefault] = useState(false);

	// Address Optional
   const [openUfOptional, setOpenUfOptional] = useState(false);

	// Contact local status

	return (
		
		<S.Form>
			<Participant 
				client={client}
			/>		
			
			<PersonalData 
				client={client}
				openGender = {openGender}
				setOpenGender = {setOpenGender}
				openNaturalness = {openNaturalness}
				setOpenNaturalness = {setOpenNaturalness}
				openNationality = {openNationality}
				setOpenNationality = {setOpenNationality}
			/>

			<Document 
				openUfRG = {openUfRG}
				setOpenUfRG = {setOpenUfRG}
			/>

			<Address
				// Address Default
				openUfDefault = {openUfDefault}
				setOpenUfDefault = {setOpenUfDefault}

				// Address Optional
				openUfOptional = {openUfOptional}
				setOpenUfOptional = {setOpenUfOptional}
			/>

			<Contact />

		</S.Form>
	)
}

export default Form