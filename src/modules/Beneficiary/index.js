import React, {useState} from 'react'

import * as S from './style'

import logo from '../../assets/images/sbpp-logo.png';
import logoSula from '../../assets/images/sulamerica-logo.png';
import houseIcon from '../../assets/icons/house.svg';
import guideIcon from '../../assets/icons/guide.png';


const InitialScreen = () => {
    const [openDropDown, setDropDown] = useState(false);

    return (
        <S.Container>
            <S.MenuContainer>
                <S.Logo src={logo} alt='logo sbpp' />
                <S.ButtonBox>
                    <S.DropDownArrow openDropDown={openDropDown} onClick={() => setDropDown(!openDropDown)} />
                    <S.ButtonTextBox first>
                        <S.MenuButon
                            background={houseIcon}
                            width='20px'
                            height='18px'
                        ></S.MenuButon>
                        <S.TextBtn>Início</S.TextBtn>
                    </S.ButtonTextBox>
                    <S.ButtonTextBox>
                        <S.MenuButon
                            background={guideIcon}
                            width='21px'
                            height='17px'
                        ></S.MenuButon>
                        <S.TextBtn>Beneficiários</S.TextBtn>
                        {openDropDown && (
                        <S.DropDownBox>
                            <S.DropDownItems>Pendentes</S.DropDownItems>
                            <S.DropDownItems>Consulta</S.DropDownItems>
                        </S.DropDownBox>
                        )}
                    </S.ButtonTextBox>
                </S.ButtonBox>
                <S.MenuFooter>
                    <S.SulaLogo src={logoSula} alt='logo sulamerica' />
                    <S.LeaveButton>Sair</S.LeaveButton>
                </S.MenuFooter>
            </S.MenuContainer>
            <S.ContentContainer></S.ContentContainer>
        </S.Container>
    )
}

export default InitialScreen