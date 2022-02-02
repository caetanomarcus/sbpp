import React, {useState} from "react";
import { Input, Select } from "../../../../components/Inputs/InputRegistration";
import {useSelector, useDispatch} from 'react-redux'
import { setAccountType } from '../../Dataflow/reducers-and-actions/beneficiary';
import * as S from './style'

import grayArrow from '../../../../assets/icons/gray-arrow.svg'

const FinancialForm = () => {
    //Local State
    const [openAccount, setOpenAccount] = useState(false)

    //Redux State and dispatch
    const accountType = useSelector(state => state.beneficiary.beneficiaryData.accountType)

    const handleOpenSelect = (e, setFunction, state) => {
		e.preventDefault();
		setFunction(!state);
	}

    const accountTypes = ['Conta Corrente', 'Poupança']

    return(
        <S.Fieldset>
            <S.Legend>Dados bancários</S.Legend>
            <S.Row>
            <S.Label>
                <S.RadioInput type='radio' name='account' />
                Nacional
            </S.Label>
            <S.Label isDisabled>
                <S.RadioInput type='radio' name='account' isDisabled disabled />
                Internacional
            </S.Label>
            </S.Row>
            <Select 
            	width="40%"
                label="Tipo de Conta"
                value={accountType}
                handleClickSelect={(e) => handleOpenSelect(e, setOpenAccount, openAccount) }
                options={accountTypes}
                toogle={setOpenAccount}
                state={openAccount}
                source={grayArrow}
                action ={setAccountType}
                isOpened={openAccount}
            />
        </S.Fieldset>
    )
}

export default FinancialForm