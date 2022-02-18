import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFilterOpened } from "../../Dataflow/reducers-and-actions/beneficiary";
import * as S from './style'

import clients from '../Pending/mock/clients.json';

import FilterModal from "../FilterModal";

import orangeArrow from '../../../../assets/icons/arrow.svg'
import grayArrow from '../../../../assets/icons/gray-arrow.svg'
import right from '../../../../assets/icons/right.png';
import Button from '../../../../components/Buttons/BeneficiaryButton';

const pages = [0,1,2,3,4,5,6]


const InitialScreen = () => {

      //Redux State and dispatch
      const filterOpened = useSelector(state => state.beneficiary.filterOpened);
      const filter = useSelector(state => state.beneficiary.filter);
      const dispatch = useDispatch();


       //Local State
    const[registration, setRegistration] = useState('');
    const [cpfOrCnpj, setCpfOrCnpj] = useState('');
    const [page, setPage] = useState(pages);
    const [atualPage, setAtualPage] = useState(1);
    const [searching, setSearching] = useState(false);
    const [atualStep, setAtualStep] = useState(1);

    const registrationScreen = 'beneficiarios/pendentes/cadastro'

    const totalOfPages = clients.length%7 === 0? Math.floor(clients.length / 7): Math.floor(clients.length / 7) + 1;

    const handleClickClient = (client) => {
        
    };

    const filteredClients = clients.filter(client => {

        if(registration !== '' && cpfOrCnpj !== ''){
            return client.registration.includes(registration) && client.cpfOrCnpj.includes(cpfOrCnpj)
        }
       
        if(registration !== ''){
            return client.registration.includes(registration)
       }

       if(cpfOrCnpj !== ''){
           return client.cpfOrCnpj.includes(cpfOrCnpj)
       }



       return client
         
    });
   

    const isSearching = registration !=='' || cpfOrCnpj !==''

    const handlePagination = (direction) => {
        
        if((direction === 'next' && ((page[page.length -1] ) < clients.length - 1))){
            setPage(page.map(item => item + 7))

            setAtualPage(atualPage + 1)
        }

        if((direction === 'prev') && (page[0] !== 0)){
            setPage(page.map(item => item - 7))

           setAtualPage(atualPage - 1)
        }

    }

    const handleClickStep = (step) => {
        setAtualStep(step)
    }


    return (
        <S.Container>
            <S.Header>
                {filterOpened && (<FilterModal />)}
                <S.MsgBox>
                    <S.WelcomeMsg>Bem vindo(a),</S.WelcomeMsg>
                    <S.User>Patrícia</S.User>
                </S.MsgBox>
                <S.FilterBtn
                onClick={() => dispatch(setFilterOpened())}
                isOpen={filterOpened}
                >{filter.mounth}/{filter.year.substring(2)} <S.ArrowFilterBtn src={filterOpened? orangeArrow: grayArrow} isOpen={filterOpened} alt='seta' /> </S.FilterBtn>
            </S.Header>
            <S.MainContainer>
                <S.LeftTitle>Beneficiários</S.LeftTitle>
                <S.ResultsAndPagination>
                <S.LocalStep>
                    <S.StepBox onClick={() => handleClickStep(1)} >
                        <p> Pendentes ({10})</p>
                        <S.StepLine isSelected={atualStep === 1} />
                    </S.StepBox>
                    <S.StepBox onClick={() => handleClickStep(2)} >
                        <p> Foram para Pagamento ({30})</p>
                        <S.StepLine isSelected={atualStep === 2} />
                    </S.StepBox>
                    <S.StepBox  onClick={() => handleClickStep(3)} >
                        <p> Foram Finalizados ({40})</p>
                        <S.StepLine isSelected={atualStep === 3} />
                    </S.StepBox>
                </S.LocalStep>
                        <S.Pagination>
                            <S.PaginationCounter>{clients.length} - {atualPage} de {totalOfPages}</S.PaginationCounter>
                            <S.PaginationButton left onClick={() => handlePagination('prev')} >
                            </S.PaginationButton>
                            <S.PaginationButton onClick={() => handlePagination('next')} >
                            </S.PaginationButton>
                        </S.Pagination>
                </S.ResultsAndPagination>
                <S.ClientBox>
                    <S.ClientBoxHead>
                        <S.Titles width='30%' >nome</S.Titles>
                        <S.Titles width='20%'>cpf/cnpj</S.Titles>
                        <S.Titles  width='17%'>matrícula</S.Titles>
                        <S.Titles width='23%'  >email</S.Titles>
                        <S.Titles width='10%' align='center' >status</S.Titles>
                    </S.ClientBoxHead>
                    {filteredClients.map((client, index) => {
                        if(page.includes(index)){
                           return  <S.Clients 
                        key={index}  
                        odd={index%2 === 0}  
                        >
                            <S.ClientTexts  weight='600' width='30%'>{client.name}</S.ClientTexts>
                            <S.ClientTexts  width='22%'>{client.cpfOrCnpj}</S.ClientTexts>
                            <S.ClientTexts  width='17%'>{client.registration}</S.ClientTexts>
                            <S.ClientTexts width='23%'>{client.email}</S.ClientTexts>
                            <S.StatusBox><S.Status /></S.StatusBox>
                        </S.Clients>
                        }
                        
                    })}
                    {!filteredClients.length && (
                        <S.MenssageBox>
                            <S.Menssage>Nenhum resultado encontrado</S.Menssage>
                        </S.MenssageBox>
                    )}
                    <S.Line />
                </S.ClientBox>
            </S.MainContainer>
            <S.ClassificationContainer>
                <S.Classification>
                        <S.LeftTitle>Novos Beneficiários</S.LeftTitle>
                        <S.Number>{33}</S.Number>
                </S.Classification>
                <S.Classification>
                    <S.LeftTitle>Cadastro Pendente</S.LeftTitle>
                        <S.Number>{10}</S.Number>
                </S.Classification>
                <S.Classification>
                    <S.LeftTitle>Cadastros Finalizados</S.LeftTitle>
                        <S.Number>{30}</S.Number>
                </S.Classification>
                <S.Classification>
                    <S.LeftTitle>Finalizados</S.LeftTitle>
                        <S.Number>{40}</S.Number>
                </S.Classification>
            </S.ClassificationContainer>
        </S.Container>
    )
}

export default InitialScreen