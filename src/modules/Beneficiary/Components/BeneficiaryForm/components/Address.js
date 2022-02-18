import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setHasMailAdress } from '../../../Dataflow/reducers-and-actions/beneficiary';

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
   setAdressType,
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
   handleChange
}) => {

   //LocalState
   // const [addressDefault.hasMailAddress, setMailingAdress] = useState(false);

   //Redux State and dispatch
   const addressDefault = useSelector(state => state.beneficiary.beneficiaryData.addressDefault);
   const addressOptional = useSelector(state => state.beneficiary.beneficiaryData.addressOptional);

   const dispatch = useDispatch();


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
               id='cep'
               adressState={addressDefault}
            />

            <Input
               type="text"
               width="80%"
               label="Logradouro"
               isDetailed
               value={addressDefault.address}
               // action={setAddressDefault}
               readOnly
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
               // action={setDistrictDefault}
               readOnly
            />

            <Input
               type="text"
               width="41%"
               label="Município"
               isDetailed
               value={addressDefault.city}
               // action={setCountyDefault}
               readOnly
            />
            
            <Select
               width="12%"
               label="UF"
               isDetailed
               options={ufs}
               source={grayArrow}
               value={addressDefault.uf}
               action={setUfDefault}
               // toogle={setOpenUfDefault}
               state={openUfDefault}
               // isOpened={openUfDefault}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenUfDefault, openUfDefault ) }
            />
         </S.Row>

         <S.Row>
          <S.Label row width="100%">
          Deseja receber correspondência por : 
               <S.DivRadio width='50%' marginLeft >
                  <S.LabelRadio>
                     <S.RadioInput 
                        type='radio' 
                        name='correspondence' 
                        value='Correios'
                        action={setAdressType}
                        onChange={(e) => dispatch(setAdressType(e.target.value))}
                     />
                     Correios
                  </S.LabelRadio>

                  <S.LabelRadio>
                     <S.RadioInput
                        type='radio' 
                        name='correspondence' 
                        value='Email'
                        action={setAdressType}
                        onChange={(e) => dispatch(setAdressType(e.target.value))}
                     />
                     Email
                  </S.LabelRadio>
               </S.DivRadio>
            </S.Label>
         </S.Row>
         <S.Row>
         <S.Label row  disabled={(addressDefault.correspondenceType === '') || (addressDefault.correspondenceType === 'Email')} >
               Adicionar endereço diferente para correspondência?
            <S.RadioInput marginLeft checkbox type='checkbox' name='hasAdress' value={addressDefault.hasMailAddress} onChange={() => dispatch(setHasMailAdress(!addressDefault.hasMailAddress))} />
                
         </S.Label>
         </S.Row>
         
         {/* Endereco de correspondência */}
         <S.Row disabled={!addressDefault.hasMailAddress} >
            <Input
               type="text"
               width="12%"
               label="CEP"
               // optional={!addressDefault.hasMailAddress}
               // disabled={!addressDefault.hasMailAddress}
               value={addressOptional.cep}
               action={setCepOptional}
               id='cep2'
               adressState={addressOptional}
            />

            <Input
               type="text"
               width="80%"
               label="Logradouro"
               isDetailed
               // optional={!addressDefault.hasMailAddress}
               // disabled={!addressDefault.hasMailAddress}
               value={addressOptional.address}
               action={setAddressOptional}
            >
            </Input>
         </S.Row>
         
         <S.Row disabled={!addressDefault.hasMailAddress}>
            <Input
               type="text"
               width="12%"
               label="Número"
               // optional={!addressDefault.hasMailAddress}
               // disabled={!addressDefault.hasMailAddress}
               value={addressOptional.number}
               action={setNumberOptional}
            />

            <Input
               type="text"
               width="36%"
               label="Complemento (opcional)"
               // optional={!addressDefault.hasMailAddress}
               // disabled={!addressDefault.hasMailAddress}
               value={addressOptional.complement}
               action={setComplementOptional}
            />

            <Input
               type="text"
               width="40%"
               label="Ponto de Referência (opcional)"
               // optional={!addressDefault.hasMailAddress}
               // disabled={!addressDefault.hasMailAddress}
               value={addressOptional.referencePoint}
               action={setReferencePointOptional}
            />
         </S.Row>

         <S.Row disabled={!addressDefault.hasMailAddress}>
            <Input
               type="text"
               width="49%"
               label="Bairro"
               isDetailed
               // optional={!addressDefault.hasMailAddress}
               // disabled={!addressDefault.hasMailAddress}
               value={addressOptional.district}
               action={setDistrictOptional}
            />

            <Input
               type="text"
               width="41%"
               label="Município"
               isDetailed
               // optional={!addressDefault.hasMailAddress}
               // disabled={!addressDefault.hasMailAddress}
               value={addressOptional.county}
               action={setCountyOptional}
            />
            
            <Select
               width="12%"
               label="UF"
               isDetailed
               // optional={!addressDefault.hasMailAddress}
               // disabled={!addressDefault.hasMailAddress}
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