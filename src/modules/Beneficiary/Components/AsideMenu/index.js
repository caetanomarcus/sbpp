import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setScreen } from "../../Dataflow/reducers-and-actions/beneficiary";
import  { setModalOpen, setModalType} from "../../../Beneficiary/Dataflow/reducers-and-actions/beneficiary";
import * as S from './style'

import logo from '../../../../assets/images/sbpp-logo.png';
import logoSula from '../../../../assets/images/sulamerica-logo.png';



const AsideMenu = () => {
    //Local State


    //Redux State and dispatch
    const screen = useSelector(state => state.beneficiary.screen);
    const dispatch = useDispatch();

   

    const handleClickLeave = () => {
        dispatch(setModalOpen());
        dispatch(setModalType('leave'))
        // navigate('/');
    }

    
    return (
        <S.Container>
                <S.Logo src={logo} alt='logo sbpp' />
                <S.MenuFooter>
                    <S.SulaLogo src={logoSula} alt='logo sulamerica' />
                    <S.LeaveButton onClick={handleClickLeave} >Sair</S.LeaveButton>
                </S.MenuFooter>
            </S.Container>
    )
}

export default AsideMenu
