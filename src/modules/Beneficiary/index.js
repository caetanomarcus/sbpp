import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import * as S from './style'

import AsideMenu from './Components/AsideMenu';
import InitialScreen from './Components/InitialScreen';
import Pending from './Components/Pending';
import Query from './Components/Query';
import Registration from './Components/Registration';
import Modal from '../../components/modal/Modal';


const Beneficiary = () => {

    //Redux State
    const screen = useSelector(state => state.beneficiary.screen);
    const isModalOpen = useSelector(state => state.beneficiary.modalOpen);

    const initial = 'inicio';
    const pending = 'beneficiarios/pendentes';
    const registration = 'beneficiarios/pendentes/cadastro'
    const query = 'beneficiarios/consulta';

    const isMobile = window.innerWidth <= 480


    const renderScreen = (screen) => {
        switch (screen) {
            case initial:
                return <InitialScreen />
            case registration:
                return <Registration />
            default:
                return null
        }
    }

    return (
        <S.Container>
            <AsideMenu />
            {isModalOpen && <Modal />}
            {renderScreen(screen)}
        </S.Container>
    )
}

export default Beneficiary