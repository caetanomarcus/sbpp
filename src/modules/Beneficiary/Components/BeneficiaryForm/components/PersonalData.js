import React, { useState } from 'react';
import { useSelector } from "react-redux";

// Style
import * as S from '../style'
import { Input, Select } from '../../../../../components/Inputs/InputRegistration';
import grayArrow from '../../../../../assets/icons/gray-arrow.svg';

// mocks
import { countries, genders } from '../mocks';

// reducers
import { 
	setNaturalness, 
	setNationality, 
	setGender 
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

	//Redux State and dispatch
	const naturalness = useSelector(state => state.beneficiary.beneficiaryData.naturalness);
	const nationality = useSelector(state => state.beneficiary.beneficiaryData.nationality);
	const gender = useSelector(state => state.beneficiary.beneficiaryData.gender);

   console.log(client);

	return (
      <S.Fieldset>
         <S.Legend>Dados </S.Legend>
         <S.Row>
            <Input
               type="text"
               width="60%"
               label="Nome"
               value={client.name}
            />

            <Input
               type="text"
               width="35%"
               label="Email"
            />
         </S.Row>
         <S.Row>
            <Input
               type="checkbox"
               width="95%"
               widthInput="20px"
               HeightInput="20px"
               label="Possui nome social?"
               row
            />
         </S.Row>
         <S.Row>
            <Input
               type="text"
               width="60%"
               label="Nome social"
               optional
            />
         </S.Row>
         <S.Row>
            <Input
               type="text"
               width="18%"
               label="Data de Nascimento"
               placeholder="DD/MM/AAAA"
               widthInput="70%"
            />
            <S.Label width="22%">Sexo
               <S.DivRadio>
                  <S.LabelRadio>
                     <S.RadioInput type='radio' name='sexo' />
                     Feminino
                  </S.LabelRadio>
                  <S.LabelRadio>
                     <S.RadioInput type='radio' name='sexo' />
                     Masculino
                  </S.LabelRadio>
               </S.DivRadio>
            </S.Label>

            <Select
               width="20%"
               label="Gênero (opcional)"
               value={gender}
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
               value={naturalness}
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
               value={nationality}
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
               widthInput="20px"
               HeightInput="20px"
               label="Possui informação de óbito?"
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
               optional
            />

            <Input
               type="text"
               width="28%"
               widthInput="45%"
               label="Data de Informação de óbito"
               placeholder="DD/MM/AAAA"
               optional
            />
         </S.Row>

         <S.Row>
            <Input
               type="text"
               width="50%"
               label="Filiação 1"
            />

            <Input
               type="text"
               width="50%"
               label="Filiação 2"
            />
         </S.Row>
      </S.Fieldset>
	)
}