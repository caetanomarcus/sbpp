import React, { useState, useEffect } from "react";
import { Input, Select } from "../../../../components/Inputs/InputRegistration";
import { useSelector, useDispatch } from 'react-redux'
import {
    setAccountType,
    setBank,
    setPaymentMethod,
    setBankAccount,
    setBankAccountDigit,
    setAgency,
    setAgencyDigit,
    setAccountNumber,
    setAccountDigit,
    setHasPowerOfAttorney,
    setPowerOfAttorneyName,
    setPowerOfAttorneyCpf,
    setStart,
    setEnd,
} from '../../Dataflow/reducers-and-actions/beneficiary';
import * as S from './style'

import grayArrow from '../../../../assets/icons/gray-arrow.svg'

const FinancialForm = () => {
    //Local State
    const [openAccount, setOpenAccount] = useState(false)
    const [openBanks, setOpenBanks] = useState(false)
    const [openPayment, setOpenPayment] = useState(false);
    const [banks, setBanks] = useState([]);
    const [hasProcuration, setProcuration] = useState(false);


    //Redux State and dispatch
    const bankData = useSelector(state => state.beneficiary.beneficiaryData.bankData);
    const dispatch = useDispatch();


    const handleOpenSelect = (e, setFunction, state) => {
        e.preventDefault();
        setFunction(!state);
    }

    const accountTypes = ['Conta Corrente', 'Poupança'];

    const payments = ['DOC', 'TED', 'Voucher'];


    useEffect(() => {
        fetch('https://brasilapi.com.br/api/banks/v1')
            .then(response => {
                return response
            })
            .then(data => data.json())
            .then((item) => setBanks(item))

    }, [])

    return (
        <S.Container>
            <S.Row>
                <Select
                    width="25%"
                    label="Forma de Pagamento"
                    value={bankData.paymentMethod}
                    handleClickSelect={(e) => handleOpenSelect(e, setOpenPayment, openPayment)}
                    options={payments}
                    toogle={setOpenPayment}
                    state={openPayment}
                    source={grayArrow}
                    action={setPaymentMethod}
                    isOpened={openPayment}
                />
                <S.Label>
                    <S.RadioInput checked type='radio' name='account' readOnly />
                    Nacional
                </S.Label>
                <S.Label isDisabled>
                    <S.RadioInput type='radio' name='account' isDisabled disabled />
                    Internacional
                </S.Label>
            </S.Row>
            <S.Row>
                <Select
                    width="35%"
                    label="Tipo de Conta"
                    value={bankData.accountType}
                    handleClickSelect={(e) => handleOpenSelect(e, setOpenAccount, openAccount)}
                    options={accountTypes}
                    toogle={setOpenAccount}
                    state={openAccount}
                    source={grayArrow}
                    action={setAccountType}
                    isOpened={openAccount}
                />
                <Select
                    width="65%"
                    label="Banco"
                    value={bankData.bank.name}
                    handleClickSelect={(e) => handleOpenSelect(e, setOpenBanks, openBanks)}
                    options={banks}
                    toogle={setOpenBanks}
                    state={openBanks}
                    source={grayArrow}
                    action={setBank}
                    isOpened={openBanks}
                />
            </S.Row>
            <S.Row>
                <Input
                    type="text"
                    width="10%"
                    label="Agência"
                    value={bankData.agencyNumber}
                    action={setAgency}
                    id="agency"
                    placeholder='0000-0'

                />
                <Input
                    type="text"
                    width="7%"
                    label="Dígito"
                    value={bankData.agencyDigit}
                    action={setAgencyDigit}
                    maxLength={2}
                    placeholder='00'

                />
                <Input
                    type="text"
                    width="15%"
                    label="Conta Corrente"
                    value={bankData.accountNumber}
                    action={setAccountNumber}
                    id="account"
                    placeholder='00000-0'

                />
                <Input
                    type="text"
                    width="7%"
                    label="Dígito"
                    value={bankData.accountDigit}
                    action={setAccountDigit}
                    maxLength={2}
                    placeholder='00'

                />
            </S.Row>
            <S.Label checkbox noRadio >
                Possui Procuração Judicial?
                <S.RadioInput checkbox type='checkbox' name='account' value={bankData.hasPowerOfAttorney} onChange={() => dispatch(setHasPowerOfAttorney(!bankData.hasPowerOfAttorney))} />

            </S.Label>
            <div style={{ 'height': '22px' }} ></div>
            <S.Row disabled={!bankData.hasPowerOfAttorney}>
                <Input
                    type='text'
                    width='40%'
                    label='Nome'
                    optional={!bankData.hasPowerOfAttorney}
                    disabled={!bankData.hasPowerOfAttorney}
                    value={bankData.powerOfAttorneyName}
                    action={setPowerOfAttorneyName}

                />
                <Input
                    type='text'
                    width='55%'
                    label='CPF'
                    optional={!bankData.hasPowerOfAttorney}
                    disabled={!bankData.hasPowerOfAttorney}
                    value={bankData.powerOfAttorneyCPF}
                    action={setPowerOfAttorneyCpf}
                    id='cpf'

                />
            </S.Row>
            {/* <S.Label checkbox  >
                   Pagamento ao Tutor?
                <S.RadioInput checkbox type='checkbox' name='account' value={bankData.hasPowerOfAttorney} onChange={() => dispatch(setHasPowerOfAttorney(!bankData.hasPowerOfAttorney))} />
                
            </S.Label>
            <div style={{'height': '22px'}} ></div>
            <S.Row disabled={!bankData.hasPowerOfAttorney}>
                <Input 
                    type='text'
                    width='40%'
                    label='Nome'
                    optional={!bankData.hasPowerOfAttorney}
                    disabled={!bankData.hasPowerOfAttorney}
                    
                />
                <Input 
                    type='text'
                    width='20%'
                    label='CPF'
                    optional={!bankData.hasPowerOfAttorney}
                    disabled={!bankData.hasPowerOfAttorney}
                    
                />
            </S.Row> */}



        </S.Container>
    )
}

export default FinancialForm