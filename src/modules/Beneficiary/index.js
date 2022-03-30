import React from 'react'
import { useSelector } from 'react-redux';
import * as S from './style'

import AsideMenu from './Components/AsideMenu';
import InitialScreen from './Components/InitialScreen';
import Registration from './Components/Registration';
import Modal from '../../components/modal/Modal';
import PDF from './Components/FinalStep/pdf.component';


const Beneficiary = () => {

    //Redux State
    const screen = useSelector(state => state.beneficiary.screen);
    const isModalOpen = useSelector(state => state.beneficiary.modalOpen);

    const initial = 'inicio';
    const registration = 'beneficiarios/pendentes/cadastro'
    const pdf = 'pdf'

    const renderScreen = (screen) => {
        switch (screen) {
            case initial:
                return <InitialScreen />
            case registration:
                return <Registration />
            case pdf:
                return <PDF />
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