import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Style
import * as S from '../style'
import { Input } from '../../../../../components/Inputs/InputRegistration';

// actions
import { 
   setRegistration,
	setCpfOrCnpj,
} from '../../../Dataflow/reducers-and-actions/beneficiary';

export const Participant = ({
   client
}) => {

   //Redux State and dispatch
   const registration = useSelector(state => state.beneficiary.beneficiaryData.registration);
   const cpfOrCnpj = useSelector(state => state.beneficiary.beneficiaryData.cpfOrCnpj);


	return (
      <S.Fieldset>
         <S.Legend>Participante</S.Legend>

         <S.Row>
            <Input
               type="text"
               width="20%"
               label="Matrícula"
               value={client.registration}
               disabled
               isDisabled
               noPadding
               // value={registration}
               action={setRegistration}
            />

            <Input
               type="text"
               width="20%"
               label="CPF/CNPJ"
               value={client.cpfOrCnpj}
               disabled
               isDisabled
               noPadding
                // value={cpfOrCnpj}
               action={setCpfOrCnpj}
            />
         </S.Row>

      </S.Fieldset>	
	)
}