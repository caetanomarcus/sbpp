import React, { useState } from 'react';
import { useSelector } from "react-redux";

// Style
import * as S from '../style'
import { Input, Select } from '../../../../../components/Inputs/InputRegistration';
import grayArrow from '../../../../../assets/icons/gray-arrow.svg';

// mocks
import { ufs } from '../mocks';

// reducers
import { 
	setUfRG
} from '../../../Dataflow/reducers-and-actions/beneficiary';

// handles
import { handleOpenSelect } from '../handles'

export const Document = ({
   openUfRG,
   setOpenUfRG,
}) => {

   //Redux State and dispatch
   const ufRG = useSelector(state => state.beneficiary.beneficiaryData.ufRG);

	return (
      <S.Fieldset>
         <S.Legend>Documento</S.Legend>
         <S.Row>
            <Input
               type="text"
               width="20%"
               label="RG"
            />
            <Input
               type="text"
               width="20%"
               label="Órgão Emissor"
            />
            <Select
               width="12%"
               label="UF"
               value={ufRG}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenUfRG, openUfRG ) }
               options={ufs}
               toogle={setOpenUfRG}
               state={openUfRG}
               source={grayArrow}
               action={setUfRG}
               isOpened={openUfRG}
               isDetailed
            />
            <Input
               type="text"
               width="18%"
               label="Data de Expedição"
               placeholder="DD/MM/AAAA"
               widthInput="70%"
            />
         </S.Row>
      </S.Fieldset>
	)
}