import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilterMounth as setMounth, setFilterYear as setYear} from '../../Dataflow/reducers-and-actions/beneficiary'
import { Select } from '../../../../components/Inputs/InputRegistration'
import * as S from './style'
import grayArrow from '../../../../assets/icons/gray-arrow.svg'


const mounths = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
]

const years = [
    '2020',
    '2021',
    '2022',
]

const FilterModal = () => {
    //Local State
    const [mouthOpen, setMouthOpen] = useState(false);
    const [yearOpen, setYearOpen] = useState(false);

    //Redux State and dispatch
    const filter = useSelector(state => state.beneficiary.filter);
    const {mounth, year} = filter;
    const dispatch = useDispatch();

    return (
        <S.Container>
            <S.TitleModal>Filtar por:</S.TitleModal>
            <S.RadioBox>
                <S.RadioInput type='radio' id='mes/ano' value='mes/ano' checked name='datefilter' />
                <S.Label htmlFor='mes/ano' >Mês/ano</S.Label>
            </S.RadioBox>
            <S.SelectBox>
                <Select
                    source={grayArrow}
                    width='48%'
                    value={mounth}
                    options={mounths}
                    toogle={setMouthOpen}
                    state={mouthOpen}
                    isOpened={mouthOpen}
                    handleClickSelect={(e) => setMouthOpen(!mouthOpen)}
                    action={setMounth}
                    noLabel
                    initialModal
                />
                <Select
                    source={grayArrow}
                    width='48%'
                    value={year}
                    options={years}
                    toogle={setYearOpen}
                    state={yearOpen}
                    isOpened={yearOpen}
                    handleClickSelect={(e) => setYearOpen(!yearOpen)}
                    action={setYear}
                    noLabel
                    initialModal
                />
            </S.SelectBox>
            <div id='span' ></div>
            <S.RadioBox>
                <S.RadioInput type='radio' id='mes/ano' value='mes/ano' name='datefilter' />
                <S.Label htmlFor='mes/ano' >Período</S.Label>
            </S.RadioBox>
            <S.DateBox>
                <S.DateText>De</S.DateText>
                <S.DateInput type='date' />
            </S.DateBox>
            <S.DateBox>
                <S.DateText>Até</S.DateText>
                <S.DateInput type='date' />
            </S.DateBox>
        </S.Container>
    )
}

export default FilterModal