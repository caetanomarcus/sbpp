import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Style
import * as S from '../style'
import { Input } from '../../../../../components/Inputs/InputRegistration';

// actions
import { 
	setPhone1,
	setPhone2
} from '../../../Dataflow/reducers-and-actions/beneficiary';

export const Contact = () => {

   //Redux State and dispatch
   const contact = useSelector(state => state.beneficiary.beneficiaryData.contact);

	return (
      <S.Fieldset>
         <S.Legend>Contato</S.Legend>
         <S.Row>
            <Input
               type="text"
               width="30%"
               label="Telefone 1"
               value={contact.phone1}
               action={setPhone1}
            />
            <Input
               type="text"
               width="30%"
               label="Telefone 2 (opcional)"
               value={contact.phone2}
               action={setPhone2}
            />
         </S.Row>
      </S.Fieldset>
	)
}