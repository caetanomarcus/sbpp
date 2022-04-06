import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

// Style
import * as S from '../style'
import { Input, Select } from '../../../../../components/Inputs/InputRegistration';
import grayArrow from '../../../../../assets/icons/gray-arrow.svg';

// mocks
import { countries, genders, ufs as _ufs } from '../mocks';

// actions
import {
   setName,
   setEmail,
   setSocialName,
   setHasSocialName,
   setBirthDate,
   setSex,
   setGender,
   setNaturalness,
   setNationality,
   setDeathDate,
   setDeathInfoDate,
   setFiliation1,
   setFiliation2,
   setHasDeathInformation,
   setPersonalDataUf,
   setUfList
} from '../../../Dataflow/reducers-and-actions';

// handles
import { handleOpenSelect } from '../../../utils'


export const PersonalData = ({
   client,
   openGender,
   setOpenGender,
   openNaturalness,
   setOpenNaturalness,
   openNationality,
   setOpenNationality,
   openUfData,
   setOpenUfData,
}) => {



   //Redux State and dispatch
   const personalData = useSelector(state => state.beneficiary.beneficiaryData.beneficiaryStep.personalData);
   const step = useSelector(state => state.beneficiary.step);
   const dispatch = useDispatch();

   //Refs
   const nacionalityRef = useRef();
   const naturalnessRef = useRef();
   const ufDataRef = useRef();
   const genderRef = useRef();

   const paises = countries.map(country => country.nome_pais);
   const beneficiary = 'beneficiary';

   useEffect(() => {
      dispatch(setName(client.name));
      dispatch(setEmail(client.email || 'sem email'));

   }, [dispatch, client.name, client.email]);

   const ufs = _ufs.map(uf => uf.sigla);

   // const renderCitiesList = (uf) => {
   //    if(uf) {
   //       fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
   //       .then(res => res.json())
   //       .then(data => {
   //          const cidades = data.map(city => city.nome);
   //          const numbersOfList = cidades.length % 100 === 0 ? cidades.length % 100  : (cidades.length % 100 + 1);
   //          setUfList(cidades)
         
   //       })
   //       console.log(ufList)
   //       return ufList
   //    }
   // }


   useEffect(() => {
      if(personalData.uf) {
         fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${personalData.uf}/municipios`)
         .then(res => res.json())
         .then(data => {
            const cidades = data.map(city => city.nome);
            dispatch(setUfList(cidades))
            
         })
         // if (step === beneficiary) {
         //    dispatch(setNaturalness(''))
         // }
      }
   }, [personalData.uf, dispatch])


   return (
      <S.Fieldset id="data">
         <S.Legend>Dados </S.Legend>
         <S.Row>
            <Input
               type="text"
               width="60%"
               label="Nome"
               value={client.name}
               action={setName}
               readOnly
            />

            <Input
               type="text"
               width="35%"
               label="Email"
               value={client.email}
               action={setEmail}
            />
         </S.Row>
         <S.Row>
            <S.Label row  >
               Possui Nome Social?
               <S.RadioInput 
               checkbox 
               type='checkbox' 
               name='socialname' 
               value={personalData.hasSocialName} 
               onChange={() => dispatch(setHasSocialName(!personalData.hasSocialName))} 
               checked={personalData.hasSocialName}
               />

            </S.Label>
         </S.Row>
         <S.Row disabled={!personalData.hasSocialName} >
            <Input
               type="text"
               width="60%"
               label="Nome social"
               value={personalData.socialName}
               action={setSocialName}
               optional={!personalData.hasSocialName}
               disabled={!personalData.hasSocialName}
            />
         </S.Row>
         <S.Row>
            <Input
               type="text"
               width="18%"
               label="Data de Nascimento"
               placeholder="DD/MM/AAAA"
               widthInput="70%"
               value={personalData.birthDate}
               action={setBirthDate}
               id='date'
               marginRight='0'
               mask='99/99/9999'
            />
            <S.Label width="22%">Sexo
               <S.DivRadio>
                  <S.LabelRadio marginRight='0' >
                     <S.RadioInput
                        noMargin
                        type='radio'
                        name='sexo'
                        value='Feminino'
                        onChange={(e) => dispatch(setSex(e.target.value))}
                        checked={personalData.sex === 'Feminino'}
                     />
                     Feminino
                  </S.LabelRadio>

                  <S.LabelRadio>
                     <S.RadioInput
                        type='radio'
                        name='sexo'
                        value='Masculino'
                        onChange={(e) => dispatch(setSex(e.target.value))}
                        checked={personalData.sex === 'Masculino'}
                     />
                     Masculino
                  </S.LabelRadio>
               </S.DivRadio>
            </S.Label>

            <Select
               width="16%"
               label="Gênero (opcional)"
               value={personalData.gender}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenGender, openGender, genderRef)}
               options={genders}
               toogle={setOpenGender}
               state={openGender}
               source={grayArrow}
               action={setGender}
               isOpened={openGender}
               element={genderRef}
            />

         </S.Row>

         <S.Row>


            <Select
               width="40%"
               label="Nacionalidade"
               value={personalData.nationality}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenNationality, openNationality, nacionalityRef)}
               options={paises}
               toogle={setOpenNationality}
               state={openNationality}
               source={grayArrow}
               action={setNationality}
               isOpened={openNationality}
               element={nacionalityRef}
            />

            <Select
               width="12%"
               label="Naturalidade"
               isDetailed
               options={ufs}
               source={grayArrow}
               value={personalData.uf}
               action={setPersonalDataUf}
               toogle={setOpenUfData}
               state={openUfData}
               // isOpened={openUfDefault}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenUfData, openUfData, ufDataRef)}
               element={ufDataRef}
               placeholder='UF'
               disabled={personalData.nationality !== 'Brasil'}
            />

            <Select
               width="40%"
               noLabel
               options={personalData.ufList}
               toogle={setOpenNaturalness}
               state={openNaturalness}
               source={grayArrow}
               value={personalData.naturalness}
               action={setNaturalness}
               isOpened={openNaturalness}
               id='naturalness'
               handleClickSelect={(e) => handleOpenSelect(e, setOpenNaturalness, openNaturalness, naturalnessRef)}
               element={naturalnessRef}
               placeholder='Cidade'
               disabled={personalData.nationality !== 'Brasil'}
            />
         </S.Row>

         <S.Row>
            <S.Label row  >
               Possui Informação de Óbito?
               <S.RadioInput 
               checkbox 
               type='checkbox' 
               name='deathinformation' 
               value={personalData.hasDeathInformation} 
               onChange={() => dispatch(setHasDeathInformation(!personalData.hasDeathInformation))} 
               checked={personalData.hasDeathInformation}
               />

            </S.Label>
         </S.Row>
         <S.Row disabled={!personalData.hasDeathInformation} >
            <Input
               type="text"
               width="15%"
               widthInput="90%"
               label="Data de óbito"
               placeholder="DD/MM/AAAA"
               optional={!personalData.hasDeathInformation}
               disabled={!personalData.hasDeathInformation}
               value={personalData.deathDate}
               action={setDeathDate}
               id='date'
               mask='99/99/9999'
            />

            <Input
               type="text"
               width="28%"
               widthInput="45%"
               label="Data de Informação de óbito"
               placeholder="DD/MM/AAAA"
               optional={!personalData.hasDeathInformation}
               disabled={!personalData.hasDeathInformation}
               value={personalData.deathInfoDate}
               action={setDeathInfoDate}
               id='date'
               mask='99/99/9999'
            />
         </S.Row>

         <S.Row last >
            <Input
               type="text"
               width="50%"
               label="Filiação 1"
               value={personalData.filiation1}
               action={setFiliation1}
            />

            <Input
               type="text"
               width="50%"
               label="Filiação 2"
               value={personalData.filiation2}
               action={setFiliation2}
            />
         </S.Row>
      </S.Fieldset>
   )
}