import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Style
import * as S from '../style'
import { Input } from '../../../../../components/Inputs/InputRegistration';

export const Contact = () => {

	return (
      <S.Fieldset>
         <S.Legend>Contato</S.Legend>
         <S.Row>
            <Input
               type="text"
               width="30%"
               label="Telefone 1"
            />
            <Input
               type="text"
               width="30%"
               label="Telefone 2 (opcional)"
            />
         </S.Row>
      </S.Fieldset>
	)
}