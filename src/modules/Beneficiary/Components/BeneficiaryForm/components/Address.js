import React from 'react';
import { useSelector } from 'react-redux';

// Style
import * as S from '../style'
import { Input, Select } from '../../../../../components/Inputs/InputRegistration';
import grayArrow from '../../../../../assets/icons/gray-arrow.svg';

// mocks
import { ufs } from '../mocks';

// reducers
import { 
	setAddressDefault,
	setAddressOptional,
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
               action={setAddressDefault.cep}
            />

            <Input
               type="text"
               width="80%"
               label="Logradouro"
               isDetailed
               value={addressDefault.address}
               action={setAddressDefault.address}
            />            
         </S.Row>
         
         <S.Row>
            <Input
               type="text"
               width="12%"
               label="Número"
               value={addressDefault.number}
               action={setAddressDefault.number}
            />

            <Input
               type="text"
               width="36%"
               label="Complemento (opcional)"
               value={addressDefault.complement}
               action={setAddressDefault.complement}
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
               action={setAddressDefault.district}
            />

            <Input
               type="text"
               width="41%"
               label="Município"
               isDetailed
               value={addressDefault.county}
               action={setAddressDefault.county}
            />
            
            <Select
               width="12%"
               label="UF"
               isDetailed
               options={ufs}
               source={grayArrow}
               value={addressDefault.uf}
               action={setAddressDefault.uf}
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
               value={addressDefault.cep}
               action={setAddressDefault.cep}
            />

            <Input
               type="text"
               width="80%"
               label="Logradouro"
               isDetailed
               optional
               value={addressDefault.address}
               action={setAddressDefault.address}
            >
            </Input>
         </S.Row>
         
         <S.Row>
            <Input
               type="text"
               width="12%"
               label="Número"
               optional
               value={addressDefault.number}
               action={setAddressDefault.number}
            />

            <Input
               type="text"
               width="36%"
               label="Complemento (opcional)"
               optional
               value={addressDefault.complement}
               action={setAddressDefault.complement}
            />

            <Input
               type="text"
               width="40%"
               label="Ponto de Referência (opcional)"
               optional
               value={addressDefault.referencePoint}
               action={setAddressDefault.referencePoint}
            />
         </S.Row>

         <S.Row>
            <Input
               type="text"
               width="49%"
               label="Bairro"
               isDetailed
               optional
               value={addressDefault.district}
               action={setAddressDefault.district}
            />

            <Input
               type="text"
               width="41%"
               label="Município"
               isDetailed
               optional
               value={addressDefault.county}
               action={setAddressDefault.county}
            />
            
            <Select
               width="12%"
               label="UF"
               isDetailed
               optional
               options={ufs}
               source={grayArrow}
               value={addressOptional.uf}
               action={setAddressOptional.uf}
               toogle={setOpenUfOptional}
               state={openUfOptional}
               isOpened={openUfOptional}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenUfOptional, openUfOptional ) }
            />
         </S.Row>

      </S.Fieldset>
	)
}