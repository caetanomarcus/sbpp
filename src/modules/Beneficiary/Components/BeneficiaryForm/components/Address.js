import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Style
import * as S from '../style'
import { Input, Select } from '../../../../../components/Inputs/InputRegistration';
import grayArrow from '../../../../../assets/icons/gray-arrow.svg';

// mocks
import { ufs } from '../mocks';

// reducers
import { 
	setUfDefault,
   setUfOptional
} from '../../../Dataflow/reducers-and-actions/beneficiary';

// handles
import { handleOpenSelect } from '../handles'

export const Address = () => {

   // Local State
   const [openUfDefault, setOpenUfDefault] = useState(false);
   const [openUfOptional, setOpenUfOptional] = useState(false);

   //Redux State and dispatch
   const ufDefault = useSelector(state => state.beneficiary.beneficiaryData.ufDefault);
   const ufOptional = useSelector(state => state.beneficiary.beneficiaryData.ufOptional);

	return (
      <S.Fieldset>
         <S.Legend>Endereço </S.Legend>

         {/* Endereco normal */}
         <S.Row>
            <Input
               type="text"
               width="12%"
               label="CEP"
            />

            <Input
               type="text"
               width="80%"
               label="Logradouro"
               isDetailed
            >
            </Input>
            
            
         </S.Row>
         
         <S.Row>
            <Input
               type="text"
               width="12%"
               label="Número"
            />

            <Input
               type="text"
               width="36%"
               label="Complemento (opcional)"
               optional
            />
         </S.Row>

         <S.Row>
            <Input
               type="text"
               width="49%"
               label="Bairro"
               isDetailed
            />

            <Input
               type="text"
               width="41%"
               label="Município"
               isDetailed
            />
            
            <Select
               width="12%"
               label="UF"
               value={ufDefault}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenUfDefault, openUfDefault ) }
               options={ufs}
               toogle={setOpenUfDefault}
               state={openUfDefault}
               source={grayArrow}
               action={setUfDefault}
               isOpened={openUfDefault}
               isDetailed
            />
         </S.Row>

         <S.Row>
            <Input
               type="checkbox"
               width="95%"
               widthInput="20px"
               HeightInput="20px"
               label="Possui endereço de correspondência?"
               row
            />
         </S.Row>

         {/* Endereco de correspondência */}
         <S.Row>
            <Input
               type="text"
               width="12%"
               label="CEP"
               optional
            />

            <Input
               type="text"
               width="80%"
               label="Logradouro"
               isDetailed
               optional
            >
            </Input>
         </S.Row>
         
         <S.Row>
            <Input
               type="text"
               width="12%"
               label="Número"
               optional
            />

            <Input
               type="text"
               width="36%"
               label="Complemento (opcional)"
               optional
            />

            <Input
               type="text"
               width="40%"
               label="Ponto de Referência (opcional)"
               optional
            />
         </S.Row>

         <S.Row>
            <Input
               type="text"
               width="49%"
               label="Bairro"
               isDetailed
               optional
            />

            <Input
               type="text"
               width="41%"
               label="Município"
               isDetailed
               optional
            />
            
            <Select
               width="12%"
               label="UF"
               value={ufOptional}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenUfOptional, openUfOptional ) }
               options={ufs}
               toogle={setOpenUfOptional}
               state={openUfOptional}
               source={grayArrow}
               action={setUfOptional}
               isOpened={openUfOptional}
               isDetailed
               optional
            />
         </S.Row>

      </S.Fieldset>
	)
}