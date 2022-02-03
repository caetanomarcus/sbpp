import React, {useState, useEffect} from "react";
import { Input, Select } from "../../../../components/Inputs/InputRegistration";
import {useSelector, useDispatch} from 'react-redux'
import { setAccountType, setBank, setPaymentMethod } from '../../Dataflow/reducers-and-actions/beneficiary';
import * as S from './style'

import grayArrow from '../../../../assets/icons/gray-arrow.svg'

const FinancialForm = () => {
    //Local State
    const [openAccount, setOpenAccount] = useState(false)
    const [openBanks, setOpenBanks]= useState(false)
    const [openPayment, setOpenPayment] = useState(false);
    const [banks, setBanks] = useState([]);
    const [hasProcuration, setProcuration] = useState(false);


    //Redux State and dispatch
    const accountType = useSelector(state => state.beneficiary.beneficiaryData.accountType);
    const paymentMethod = useSelector(state => state.beneficiary.beneficiaryData.paymentMethod)
    const bank = useSelector(state => state.beneficiary.beneficiaryData.bank);
    

    const handleOpenSelect = (e, setFunction, state) => {
		e.preventDefault();
		setFunction(!state);
	}

    const accountTypes = ['Conta Corrente', 'Poupança'];

    const payments = ['DOC','TED','Voucher'];

     
    useEffect(() => {
        fetch('https://brasilapi.com.br/api/banks/v1')
            .then(response => {
                return response
            } )
            .then(data => data.json())
            .then((item) => setBanks(item))

    },[])

    console.log(bank)

    return(
        <>
            <S.Fieldset>
            <S.Legend>Dados bancários</S.Legend>
            <S.Row>
            <S.Label>
                <S.RadioInput checked type='radio' name='account' />
                Nacional
            </S.Label>
            <S.Label isDisabled>
                <S.RadioInput  type='radio' name='account' isDisabled disabled />
                Internacional
            </S.Label>
            </S.Row>
           <S.Row>
           <Select 
            	width="15%"
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
            <Select 
            	width="30%"
                label="Banco"
                value={bank?.name}
                handleClickSelect={(e) => handleOpenSelect(e, setOpenBanks, openBanks) }
                options={banks}
                toogle={setOpenBanks}
                state={openBanks}
                source={grayArrow}
                action ={setBank}
                isOpened={openBanks}
            />
            <Input 
                type="text"
                width="10%"
                label="Agência"
                value=''
                handleChange=""
             
             
            />
            <Input 
                type="text"
                width="7%"
                label="Dígito"
                value=''
                handleChange=""
               
            />
             <Input 
                type="text"
                width="15%"
                label="Conta Corrente"
                value=''
                handleChange=""
              
            />
             <Input 
                type="text"
                width="7%"
                label="Dígito"
                value=''
                handleChange=""
            
            />
           </S.Row>
           <S.Label checkbox  >
                    Possui Procuração Judicial?
                <S.RadioInput checkbox type='checkbox' name='account' value={hasProcuration} onChange={() => setProcuration(!hasProcuration)} />
                
            </S.Label>
            <div style={{'height': '22px'}} ></div>
            <S.Row>
                <Input 
                    type='text'
                    width='40%'
                    label='Nome'
                    optional={!hasProcuration}
                    disabled={!hasProcuration}
                    
                />
                <Input 
                    type='text'
                    width='20%'
                    label='CPF'
                    optional={!hasProcuration}
                    disabled={!hasProcuration}
                    
                />
            </S.Row>
           
        </S.Fieldset>
        <S.Fieldset>
            <S.Legend>Pagamento</S.Legend>
            <S.Row>
            <Select 
            	width="25%"
                label="Forma de Pagamento"
                value={paymentMethod}
                handleClickSelect={(e) => handleOpenSelect(e, setOpenPayment, openPayment) }
                options={payments}
                toogle={setOpenPayment}
                state={openPayment}
                source={grayArrow}
                action ={setPaymentMethod}
                isOpened={openPayment}
            />
             <Input 
                    type='date'
                    width='20%'
                    label='Início da Operação'
                    
                />
                <Input 
                    type='date'
                    width='20%'
                    label='Fim da Operação'
                    
                />
            </S.Row>
        </S.Fieldset>
        </>
    )
}

export default FinancialForm