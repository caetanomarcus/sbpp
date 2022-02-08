import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

// Style
import * as S from '../style'
import { Input, Select } from '../../../../../components/Inputs/InputRegistration';
import grayArrow from '../../../../../assets/icons/gray-arrow.svg';

// mocks
import { countries, genders } from '../mocks';

// actions
import { 
	setName,
	setEmail,
	setSocialName,
	setBirthDate,
	setSex,
	setGender,
	setNaturalness,
	setNationality,
	setDeathDate,
	setDeathInfoDate,
	setFiliation1,
	setFiliation2,
} from '../../../Dataflow/reducers-and-actions/beneficiary';

// handles
import { handleOpenSelect } from '../handles'


export const PersonalData = ({
   client,
   openGender,
   setOpenGender,
   openNaturalness,
   setOpenNaturalness,
   openNationality,
   setOpenNationality,
}) => {

   //LocalState
   const [hasSocialName, setSocialName] = useState(false);
   const [hasDeathInformation, setDeathInformation] = useState(false);
   

	//Redux State and dispatch
   const personalData = useSelector(state => state.beneficiary.beneficiaryData.personalData);
   const dispatch = useDispatch();

	return (
      <S.Fieldset>
         <S.Legend>Dados </S.Legend>
         <S.Row>
            <Input
               type="text"
               width="60%"
               label="Nome"
               value={client.name}
               // value={personalData.name}
               action={setName}
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
            <Input
               type="checkbox"
               width="95%"
               widthInput="15px"
               HeightInput="15px"
               label="Possui nome social?"
               handleChange={() => setSocialName(!hasSocialName)}
               checked={hasSocialName}
               row
            />
         </S.Row>
         <S.Row>
            <Input
               type="text"
               width="60%"
               label="Nome social"
               optional
               value={personalData.socialName}
               action={setSocialName}
               optional={!hasSocialName}
               disabled={!hasSocialName}
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
            />
            <S.Label width="22%">Sexo
               <S.DivRadio>
                  <S.LabelRadio>
                     <S.RadioInput 
                        type='radio' 
                        name='sexo' 
                        value='Feminino'
                        action={setSex}
                        onChange={(e) => dispatch(setSex(e.target.value))}
                     />
                     Feminino
                  </S.LabelRadio>

                  <S.LabelRadio>
                     <S.RadioInput 
                        type='radio' 
                        name='sexo' 
                        value='Masculino'
                        action={setSex}
                        onChange={(e) => dispatch(setSex(e.target.value))}
                     />
                     Masculino
                  </S.LabelRadio>
               </S.DivRadio>
            </S.Label>

            <Select
               width="20%"
               label="Gênero (opcional)"
               value={personalData.gender}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenGender, openGender ) }
               options={genders}
               toogle={setOpenGender}
               state={openGender}
               source={grayArrow}
               action={setGender}
               isOpened={openGender}
            />
            
         </S.Row>

         <S.Row>
            <Select
               width="40%"
               label="Naturalidade"
               value={personalData.naturalness}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenNaturalness, openNaturalness ) }
               options={countries}
               toogle={setOpenNaturalness}
               state={openNaturalness}
               source={grayArrow}
               action={setNaturalness}
               isOpened={openNaturalness}
            />

            <Select
               width="40%"
               label="Nacionalidade"
               value={personalData.nationality}
               handleClickSelect={(e) => handleOpenSelect(e, setOpenNationality, openNationality ) }
               options={countries}
               toogle={setOpenNationality}
               state={openNationality}
               source={grayArrow}
               action={setNationality}
               isOpened={openNationality}
            />
         </S.Row>

         <S.Row>
            <Input
               type="checkbox"
               width="95%"
               widthInput="15px"
               HeightInput="15px"
               label="Possui informação de óbito?"
               handleChange={() => setDeathInformation(!hasDeathInformation)}
               row
            />
         </S.Row>
         <S.Row>
            <Input
               type="text"
               width="15%"
               widthInput="90%"
               label="Data de óbito"
               placeholder="DD/MM/AAAA"
               optional={!hasDeathInformation}
               disabled={!hasDeathInformation}
               value={personalData.deathDate}
               action={setDeathDate}
            />

            <Input
               type="text"
               width="28%"
               widthInput="45%"
               label="Data de Informação de óbito"
               placeholder="DD/MM/AAAA"
               optional={!hasDeathInformation}
               disabled={!hasDeathInformation}
               value={personalData.deathInfoDate}
               action={setDeathInfoDate}
            />
         </S.Row>

         <S.Row>
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