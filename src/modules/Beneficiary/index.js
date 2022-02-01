import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import * as S from './style'

import AsideMenu from './Components/AsideMenu';
import InitialScreen from './Components/InitialScreen';
import Pending from './Components/Pending';
import Registration from './Components/Registration';

const Beneficiary = () => {

    //Redux State
    const screen = useSelector(state => state.beneficiary.screen);

    const initial = 'inicio';
    const pending = 'beneficiarios/pendentes';
    const registration = 'beneficiarios/pendentes/cadastro'
    const query = 'beneficiarios/consulta';

    const renderScreen = (screen) => {
        switch (screen) {
            case initial: 
            return <InitialScreen />

            case pending:
                return <Pending />

            case registration:
                return <Registration />
                
            default:
                return <InitialScreen />
        }
    }

    return (
        <S.Container>
            <AsideMenu />
           {renderScreen(screen)}
            <S.ContentContainer></S.ContentContainer>
        </S.Container>
    )
}

export default Beneficiary