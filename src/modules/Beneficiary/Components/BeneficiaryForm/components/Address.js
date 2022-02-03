import React from 'react';
import { useSelector } from 'react-redux';

// Style
import * as S from '../style'
import { Input, Select } from '../../../../../components/Inputs/InputRegistration';
import grayArrow from '../../../../../assets/icons/gray-arrow.svg';

// mocks
import { ufs } from '../mocks';

// actions
import { 
	setCepDefault,
	setAddressDefault,
	setNumberDefault,
	setComplementDefault,
	setDistrictDefault,
	setCountyDefault,
	setUfDefault,
   // Optional
	setCepOptional,
	setAddressOptional,
	setNumberOptional,
	setComplementOptional,
	setReferencePointOptional,
	setDistrictOptional,
	setCountyOptional,
	setUfOptional,
} from '../../../Dataflow/reducers-and-actions/beneficiary';

// handles
import { handleOpenSelect } from '../handles'

export const Address = ({
   openUfDefault,
   setOpenUfDefault,
   openUfOptional,
   setOpenUfOptional,
}) => {


   //Redux State and dispatch
   const addressDefault = useSelector(state => state.beneficiary.beneficiaryData.addressDefault);
   const addressOptional = useSelector(state => state.beneficiary.beneficiaryData.addressDefault);


	return (
      <S.Fieldset>
         <S.Legend>Endereço </S.Legend>

         {/* Endereco normal */}
         <S.Row>
            <Input
               type="text"
               width="12%"
               label="CEP"
               value={addressDefault.cep}
               action={setCepDefault}
            />

            <Input
               type="text"
               width="80%"
               label="Logradouro"
               isDetailed
               value={addressDefault.address}
               action={setAddressDefault}
            />            
         </S.Row>
         
         <S.Row>
            <Input
               type="text"
               width="12%"
               label="Número"
               value={addressDefault.number}
               action={setNumberDefault}
            />

            <Input
               type="text"
               width="36%"
               label="Complemento (opcional)"
               value={addressDefault.complement}
               action={setComplementDefault}
               optional
            />
         </S.Row>

         <S.Row>
            <Input
               type="text"
               width="49%"
               label="Bairro"
               isDetailed
               value={addressDefault.district}
               action={setDistrictDefault}
            />

            <Input
               type="text"
               width="41%"
               label="Município"
               isDetailed
               value={addressDefault.county}
               action={setCountyDefault}
            />
            
            <Select
               width="12%"
               label="UF"
               isDetailed
               options={ufs}
               source={grayArrow}
               value={addressDefault.uf}
               action={setUfDefault}
               toogle={setOpenUfDefault}
               state={openUfDefault}
               isOpened={openUfDefault}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenUfDefault, openUfDefault ) }
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
               value={addressOptional.cep}
               action={setCepOptional}
            />

            <Input
               type="text"
               width="80%"
               label="Logradouro"
               isDetailed
               optional
               value={addressOptional.address}
               action={setAddressOptional}
            >
            </Input>
         </S.Row>
         
         <S.Row>
            <Input
               type="text"
               width="12%"
               label="Número"
               optional
               value={addressOptional.number}
               action={setNumberOptional}
            />

            <Input
               type="text"
               width="36%"
               label="Complemento (opcional)"
               optional
               value={addressOptional.complement}
               action={setComplementOptional}
            />

            <Input
               type="text"
               width="40%"
               label="Ponto de Referência (opcional)"
               optional
               value={addressOptional.referencePoint}
               action={setReferencePointOptional}
            />
         </S.Row>

         <S.Row>
            <Input
               type="text"
               width="49%"
               label="Bairro"
               isDetailed
               optional
               value={addressOptional.district}
               action={setDistrictOptional}
            />

            <Input
               type="text"
               width="41%"
               label="Município"
               isDetailed
               optional
               value={addressOptional.county}
               action={setCountyOptional}
            />
            
            <Select
               width="12%"
               label="UF"
               isDetailed
               optional
               options={ufs}
               source={grayArrow}
               value={addressOptional.uf}
               action={setUfOptional}
               toogle={setOpenUfOptional}
               state={openUfOptional}
               isOpened={openUfOptional}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenUfOptional, openUfOptional ) }
            />
         </S.Row>

      </S.Fieldset>
	)
}