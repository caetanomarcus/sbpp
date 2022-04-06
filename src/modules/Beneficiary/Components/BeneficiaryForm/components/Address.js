import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setHasDifferentAdress } from '../../../Dataflow/reducers-and-actions';

// Style
import * as S from '../style'
import { Input, Select } from '../../../../../components/Inputs/InputRegistration';
import grayArrow from '../../../../../assets/icons/gray-arrow.svg';

// mocks
import { ufs as _ufs } from '../mocks';

// actions
import { 
	setCepDefault,
	setNumberDefault,
	setComplementDefault,
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
} from '../../../Dataflow/reducers-and-actions';

// handles
import { handleOpenSelect } from '../../../utils';

export const Address = ({
   openUfDefault,
   setOpenUfDefault,
   openUfOptional,
   setOpenUfOptional,
   handleChange
}) => {



   //Redux State and dispatch
   const addressDefault = useSelector(state => state.beneficiary.beneficiaryData.beneficiaryStep.addressDefault);
   const addressOptional = useSelector(state => state.beneficiary.beneficiaryData.beneficiaryStep.addressOptional);

   //refs
   const adress1Ref = useRef();
   const adress2Ref = useRef();

   const dispatch = useDispatch();

   const ufs = _ufs.map(uf => uf.sigla);


	return (
      <S.Fieldset id="address">
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
               mask="99999-999"
            />

            <Input
               type="text"
               width="80%"
               label="Logradouro"
               isDetailed
               value={addressDefault.address}
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
               
            />
         </S.Row>

         <S.Row>
            <Input
               type="text"
               width="49%"
               label="Bairro"
               isDetailed
               value={addressDefault.district}
               readOnly
            />

            <Input
               type="text"
               width="41%"
               label="Município"
               isDetailed
               value={addressDefault.city}
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
               toogle={setOpenUfDefault}
               state={openUfDefault}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenUfDefault, openUfDefault, adress1Ref ) }
               element={adress1Ref}
            />
         </S.Row>

         <S.Row last={(addressDefault.correspondenceType === '') || (addressDefault.correspondenceType === 'Email') }>
          <S.Label row width="fit-content">
          Deseja receber correspondência por : 
               <S.DivRadio width='fit-content' marginLeft >
                  <S.LabelRadio>
                     <S.RadioInput 
                        type='radio' 
                        name='correspondence' 
                        value='Correios'
                        onChange={(e) => dispatch(setAdressType(e.target.value))}
                     />
                     Correios
                  </S.LabelRadio>

                  <S.LabelRadio>
                     <S.RadioInput
                        type='radio' 
                        name='correspondence' 
                        value='Email'
                        onChange={(e) => {
                           dispatch(setAdressType(e.target.value))
                           dispatch(setHasDifferentAdress(false))
                        }}
                     />
                     Email
                  </S.LabelRadio>
               </S.DivRadio>
            </S.Label>
         </S.Row>
         <S.Row last={!addressDefault.hasDifferentAddress}>
         <S.Label row  disabled={(addressDefault.correspondenceType === '') || (addressDefault.correspondenceType === 'Email')} >
               Adicionar endereço diferente para correspondência?
            <S.RadioInput  checked={addressDefault.hasDifferentAddress} marginLeft checkbox type='checkbox' name='hasAdress' value={addressDefault.hasDifferentAddress} onChange={() => dispatch(setHasDifferentAdress(!addressDefault.hasDifferentAddress))} />
                
         </S.Label>
         </S.Row>
         
         {/* Endereco de correspondência */}
         <S.Row disabled={!addressDefault.hasDifferentAddress} >
            <Input
               type="text"
               width="12%"
               label="CEP"
      
               value={addressOptional.cep}
               action={setCepOptional}
               id='cep2'
               adressState={addressOptional}
               mask="99999-999"
            />

            <Input
               type="text"
               width="80%"
               label="Logradouro"
               isDetailed
               value={addressOptional.address}
               action={setAddressOptional}
            >
            </Input>
         </S.Row>
         
         <S.Row disabled={!addressDefault.hasDifferentAddress}>
            <Input
               type="text"
               width="12%"
               label="Número"
               value={addressOptional.number}
               action={setNumberOptional}
            />

            <Input
               type="text"
               width="36%"
               label="Complemento (opcional)"
               value={addressOptional.complement}
               action={setComplementOptional}
            />

            <Input
               type="text"
               width="40%"
               label="Ponto de Referência (opcional)"
              
               value={addressOptional.referencePoint}
               action={setReferencePointOptional}
            />
         </S.Row>

         <S.Row disabled={!addressDefault.hasDifferentAddress} last>
            <Input
               type="text"
               width="49%"
               label="Bairro"
               isDetailed
         
               value={addressOptional.district}
               action={setDistrictOptional}
            />

            <Input
               type="text"
               width="41%"
               label="Município"
               isDetailed
             
               value={addressOptional.city}
               action={setCountyOptional}
            />
            
            <Select
               width="12%"
               label="UF"
               isDetailed
              
               options={ufs}
               source={grayArrow}
               value={addressOptional.uf}
               action={setUfOptional}
               toogle={setOpenUfOptional}
               state={openUfOptional}
               isOpened={openUfOptional}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenUfOptional, openUfOptional, adress2Ref ) }
               element={adress2Ref}
            />
         </S.Row>

      </S.Fieldset>
	)
}