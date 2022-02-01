import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFilterOpened } from "../../Dataflow/reducers-and-actions/beneficiary";
import * as S from './style'

import FilterModal from "../FilterModal";

import orangeArrow from '../../../../assets/icons/arrow.svg'
import grayArrow from '../../../../assets/icons/gray-arrow.svg'


const InitialScreen = () => {

      //Redux State and dispatch
      const filterOpened = useSelector(state => state.beneficiary.filterOpened);
      const dispatch = useDispatch();

    return (
        <S.Container>
            <S.Header>
                {filterOpened && (<FilterModal />)}
                <S.MsgBox>
                    <S.WelcomeMsg>Bem vindo(a),</S.WelcomeMsg>
                    <S.User>Patrícia</S.User>
                </S.MsgBox>
                <S.FilterBtn
                onClick={() => dispatch(setFilterOpened())}
                isOpen={filterOpened}
                >Jan/21 <S.ArrowFilterBtn src={filterOpened? orangeArrow: grayArrow} isOpen={filterOpened} alt='seta' /> </S.FilterBtn>
            </S.Header>
        </S.Container>
    )
}

export default InitialScreen