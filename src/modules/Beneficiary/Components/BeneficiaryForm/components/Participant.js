import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Style
import * as S from '../style'
import { Input } from '../../../../../components/Inputs/InputRegistration';

export const Participant = ({client}) => {

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
            />

            <Input
               type="text"
               width="20%"
               label="CPF/CNPJ"
               value={client.cpfOrCnpj}
               disabled
               isDisabled
               noPadding
            />
         </S.Row>

      </S.Fieldset>	
	)
}