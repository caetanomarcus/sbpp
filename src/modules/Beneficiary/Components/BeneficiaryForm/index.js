import React, { useState } from 'react';
import { useSelector } from "react-redux";

// Style
import * as S from './style';

// Components
import { Address, Contact, Document, Data, Participant } from './components'

const Form = () => {
	const client = useSelector(state => state.beneficiary.selectedClient);

	return (
		
		<S.Form>
			<Participant client={client} />		
			
			<Data client={client} />

			<Document />

			<Address />

			<Contact />

		</S.Form>
	)
}

export default Form