import React, { useRef } from 'react';
import { useSelector } from "react-redux";

// Style
import * as S from '../style'
import { Input, Select } from '../../../../../components/Inputs/InputRegistration';
import grayArrow from '../../../../../assets/icons/gray-arrow.svg';

// mocks
import { ufs as _ufs }  from '../mocks';

// actions
import { 
	setRg,
	setIssuer,
	setUfRg,
	setIssueDate,
} from '../../../Dataflow/reducers-and-actions/beneficiary';

// handles
import { handleOpenSelect } from '../../../utils'

export const Document = ({
   openUfRG,
   setOpenUfRG,
}) => {

   //Redux State and dispatch
   const document = useSelector(state => state.beneficiary.beneficiaryData.document);

   const ufs = _ufs.map(uf => uf.sigla);

   const ufRef = useRef();


	return (
      <S.Fieldset id='document'>
         <S.Legend>Documento</S.Legend>
         <S.Row last>
            <Input
               type="text"
               width="20%"
               label="RG"
               value={document.rg}
               action={setRg}
               id='rg'
               mask="99.999.999-9"
            />
            <Input
               type="text"
               width="20%"
               label="Órgão Emissor"
               value={document.setIssuer}
               action={setIssuer}
            />
            <Select
               width="12%"
               label="UF"
               options={ufs}
               source={grayArrow}
               value={document.ufRG}
               action={setUfRg}
               toogle={setOpenUfRG}
               state={openUfRG}
               isOpened={openUfRG}
               isDetailed
               handleClickSelect={(e) => handleOpenSelect(e, setOpenUfRG, openUfRG, ufRef ) }
               element={ufRef}
               />
            <Input
               type="text"
               width="18%"
               label="Data de Expedição"
               placeholder="DD/MM/AAAA"
               widthInput="70%"
               value={document.issueDate}
               action={setIssueDate}
               id='date'
               mask="99/99/9999"
            />
         </S.Row>
      </S.Fieldset>
	)
}