import React from 'react';

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

	return (
      <S.Fieldset id='participant'>
         <S.Legend>Participante</S.Legend>

         <S.Row last>
            <Input
               type="text"
               width="20%"
               label="Matrícula"
               value={client.registration}
               disabled
               noPadding
               action={setRegistration}
            />

            <Input
               type="text"
               width="20%"
               label="CPF/CNPJ"
               value={client.cpfOrCnpj}
               disabled
               noPadding
               action={setCpfOrCnpj}
            />
         </S.Row>

      </S.Fieldset>	
	)
}