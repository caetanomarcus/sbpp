import React from 'react';
import { useSelector } from 'react-redux';

// Style
import * as S from '../style'
import { Input } from '../../../../../components/Inputs/InputRegistration';

// actions
import { 
	setPhone1,
	setPhone2
} from '../../../Dataflow/reducers-and-actions';

export const Contact = () => {

   //Redux State and dispatch
   const contact = useSelector(state => state.beneficiary.beneficiaryData.beneficiaryStep.contact);

	return (
      <S.Fieldset id='contact' >
         <S.Legend>Contato</S.Legend>
         <S.Row>
            <Input
               type="text"
               width="30%"
               label="Telefone 1"
               value={contact.phone1}
               action={setPhone1}
               id='phone'
               placeholder={'(00) 0000-0000'}
              
            />
            <Input
               type="text"
               width="30%"
               label="Telefone 2 (opcional)"
               value={contact.phone2}
               action={setPhone2}
               id='phone'
               placeholder={'(00) 0000-0000'}
              
            />
         </S.Row>
      </S.Fieldset>
	)
}