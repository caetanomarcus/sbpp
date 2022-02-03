import React from "react";
import * as S from './style'

import { Input, Select } from "../../../../components/Inputs/InputRegistration";

const BenefitForm = () => {
    return (
        <>
        <S.Fieldset>
            <S.Legend>Benefício</S.Legend>
            <S.Row>
            <S.Row width='50%' >
                <Input 
                    type='text'
                    width='30%'
                    label="Plano"
                    value="00000000"
                    disabled
                    isDisabled
                    noPadding
                />
                  <Input 
                    type='text'
                    width='40%'
                    label="Produto"
                    value="201 - Tradicional Individual"
                    disabled
                    isDisabled
                    noPadding
                />
            </S.Row>
            <S.Row>
                <Input 
                    type='text'
                    width='100%'
                    label="Processo Susep"
                    value="15414.901749/2014-95"
                    
                />
                </S.Row>
            </S.Row>
            <S.Row>
            <Input 
                    type='text'
                    width='20%'
                    label="Número da Proposta"
                    value="1829203818301182"
                    disabled
                    isDisabled
                    noPadding
                />
                <Input 
                    type='text'
                    width='55%'
                    label="Tipo de Benefício (Cobertura)"
                    value="Vitalício"
                    
                />
                <Input 
                    type='text'
                    width='20%'
                    label="Data da proposta"
                    value="01/03/2022"
                    disabled
                    isDisabled
                    noPadding
                />
            </S.Row>
        </S.Fieldset>
        <S.Fieldset>
            <S.Legend>Convênio</S.Legend>
        </S.Fieldset>
        </>
    )
}

export default BenefitForm