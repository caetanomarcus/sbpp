import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setScreen } from "../../Dataflow/reducers-and-actions/beneficiary";
import { setLogin, setPassword } from "../../../Auth/Dataflow/reducers-and-actions/auth";
import  { setModalOpen, setModalType} from "../../../Beneficiary/Dataflow/reducers-and-actions/beneficiary";
import * as S from './style'

import logo from '../../../../assets/images/sbpp-logo.png';
import logoSula from '../../../../assets/images/sulamerica-logo.png';
import houseIcon from '../../../../assets/icons/house.svg';
import guideIcon from '../../../../assets/icons/guide.png';


const AsideMenu = () => {
    //Local State
    const [openDropDown, setDropDown] = useState(false);

    //Redux State and dispatch
    const screen = useSelector(state => state.beneficiary.screen);
    const dispatch = useDispatch();

    const initial = 'inicio';
    const pending = 'beneficiarios/pendentes';
    const registrationScreen = 'beneficiarios/pendentes/cadastro'
    const query = 'beneficiarios/consulta';

    const handleClick = (value) => {
        dispatch(setScreen(value))
    }

    const handleClickDropDown = () => {
        setDropDown(!openDropDown)
    
    }

    const handleClickLeave = () => {
        dispatch(setModalOpen());
        dispatch(setModalType('leave'))
        // navigate('/');
    }

    useEffect(() => {
        screen === pending? setDropDown(true): setDropDown(false)
    }, [])
    
    return (
        <S.Container>
                <S.Logo src={logo} alt='logo sbpp' />
                <S.ButtonBox >
                    <S.DropDownArrow openDropDown={openDropDown} onClick={handleClickDropDown } />
                    <S.ButtonTextBox screen={screen === initial} first>
                        <S.MenuButon
                            background={houseIcon}
                            width='20px'
                            height='18px'
                            onClick={() => handleClick(initial)}
                        ></S.MenuButon>
                        <S.TextBtn onClick={() => handleClick(initial)} >Início</S.TextBtn>
                    </S.ButtonTextBox>
                    <S.ButtonTextBox >
                        <S.MenuButon
                            background={guideIcon}
                            width='21px'
                            height='17px'
                            onClick={handleClickDropDown }
                        ></S.MenuButon>
                        <S.TextBtn onClick={handleClickDropDown } >Beneficiários</S.TextBtn>
                        {openDropDown && (
                        <S.DropDownBox>
                            <S.DropDownItems 
                            screen={(screen ===  pending) || (screen === registrationScreen)}
                            onClick={() => handleClick(pending)}
                            >Pendentes</S.DropDownItems>
                            <S.DropDownItems 
                            screen={screen === query}
                            onClick={() => handleClick(query)}
                            >Consulta</S.DropDownItems>
                        </S.DropDownBox>
                        )}
                    </S.ButtonTextBox>
                </S.ButtonBox>
                <S.MenuFooter>
                    <S.SulaLogo src={logoSula} alt='logo sulamerica' />
                    <S.LeaveButton onClick={handleClickLeave} >Sair</S.LeaveButton>
                </S.MenuFooter>
            </S.Container>
    )
}

export default AsideMenu
