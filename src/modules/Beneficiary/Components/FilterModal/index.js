import React from 'react'
import * as S from './style'

const FilterModal = () => {

    return (
        <S.Container>
            <S.TitleModal>Filtar por:</S.TitleModal>
            <S.RadioBox>
                <S.RadioInput type='radio' id='mes/ano' value='mes/ano' />
                <S.Label htmlFor='mes/ano' >Mês/ano</S.Label>
            </S.RadioBox>
        </S.Container>
    )
}

export default FilterModal