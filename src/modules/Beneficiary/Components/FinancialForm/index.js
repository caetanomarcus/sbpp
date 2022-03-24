import React, { useState, useEffect, useRef } from "react";
import { Input, Select } from "../../../../components/Inputs/InputRegistration";
import { useSelector, useDispatch } from 'react-redux'
import {
    setAccountType,
    setBank,
    setPaymentMethod,
    setAgency,
    setAgencyDigit,
    setAccountNumber,
    setAccountDigit,
    setHasPowerOfAttorney,
    setPowerOfAttorneyName,
    setPowerOfAttorneyCpf,
} from '../../Dataflow/reducers-and-actions';
import * as S from './style'

// images
import grayArrow from '../../../../assets/icons/gray-arrow.svg'

//utils
import { handleOpenSelect } from '../../utils'

const FinancialForm = () => {
    //Local State
    const [openAccount, setOpenAccount] = useState(false)
    const [openBanks, setOpenBanks] = useState(false)
    const [openPayment, setOpenPayment] = useState(false);
    const [banks, setBanks] = useState([]);


    //Redux State and dispatch
    const bankData = useSelector(state => state.beneficiary.beneficiaryData.bankData);
    const dispatch = useDispatch();

    //refs
    const paymentMethodRef = useRef();
    const bankRef = useRef();
    const accountTypeRef = useRef();


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
                    handleClickSelect={(e) => handleOpenSelect(e, setOpenPayment, openPayment, paymentMethodRef)}
                    options={payments}
                    toogle={setOpenPayment}
                    state={openPayment}
                    source={grayArrow}
                    action={setPaymentMethod}
                    isOpened={openPayment}
                    element={paymentMethodRef}
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
                    handleClickSelect={(e) => handleOpenSelect(e, setOpenAccount, openAccount, accountTypeRef)}
                    options={accountTypes}
                    toogle={setOpenAccount}
                    state={openAccount}
                    source={grayArrow}
                    action={setAccountType}
                    isOpened={openAccount}
                    element={accountTypeRef}
                />
                <Select
                    width="65%"
                    label="Banco"
                    value={bankData.bank.name}
                    handleClickSelect={(e) => handleOpenSelect(e, setOpenBanks, openBanks, bankRef)}
                    options={banks}
                    toogle={setOpenBanks}
                    state={openBanks}
                    source={grayArrow}
                    action={setBank}
                    isOpened={openBanks}
                    element={bankRef}
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
                    mask='9999-9'

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
                    mask='99999-9'

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
                <S.RadioInput 
                checkbox 
                type='checkbox' 
                name='account' 
                value={bankData.hasPowerOfAttorney} 
                onChange={() => dispatch(setHasPowerOfAttorney(!bankData.hasPowerOfAttorney))} 
                checked={bankData.hasPowerOfAttorney}
                />

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
                    mask='999.999.999-99'

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