import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as S from './style'
import {
    setSelectedClient,
    setFilterOpened,
    setSearchFilterType,
    setSearchFilterRegistration,
    setSearchFilterName,
    setSearchFilterCPFOrCNPJ,
    setSearchFilterPropostNumber,
    setScreen
} from "../../Dataflow/reducers-and-actions/beneficiary";

import clients from '../Pending/mock/clients.json';

import FilterModal from "../FilterModal";
import { Input } from "../../../../components/Inputs/InputRegistration/";
import Button from "../../../../components/Buttons/BeneficiaryButton";

import orangeArrow from '../../../../assets/icons/arrow.svg'
import grayArrow from '../../../../assets/icons/gray-arrow.svg'
import searchIcon from '../../../../assets/icons/search.svg'
import right from '../../../../assets/icons/right.png';

const pages = [0, 1, 2, 3, 4, 5, 6]

// const classifications = [
//     {
//         value: 1, label: 'Pendentes'
//     },
//     {
//         value: 2, label: 'Aguardando pagamento'
//     },
//     {
//         value: 3, label: 'Pagamento Ativo'
//     },
//     {
//         value: 4, label: 'Pagamento encerrado'
//     },
// ]

const InitialScreen = () => {

    //Redux State and dispatch
    const filterOpened = useSelector(state => state.beneficiary.filterOpened);
    const filter = useSelector(state => state.beneficiary.filter);
    const searchFilter = useSelector(state => state.beneficiary.searchFilter);
    const selectedClient = useSelector(state => state.beneficiary.selectedClient);
    const dispatch = useDispatch();


    //Local State
    // const [registration, setRegistration] = useState('');
    // const [cpfOrCnpj, setCpfOrCnpj] = useState('');
    const [page, setPage] = useState(pages);
    const [atualPage, setAtualPage] = useState(1);
    const [searching, setSearching] = useState(false);

    const { registration, cpfOrCnpj, name, propostNumber, type } = searchFilter;



    const registrationScreen = 'beneficiarios/pendentes/cadastro'

    const handleClickClassification = (position) => {
        setAtualPage(1);
        setPage(pages);
        dispatch(setSelectedClient({}));

        if (position === type) {
            dispatch(setSearchFilterType(0));

            return
        }

        switch (position) {
            case 1:
                dispatch(setSearchFilterType(1));
                break;
            case 2:
                dispatch(setSearchFilterType(2));
                break;
            case 3:
                dispatch(setSearchFilterType(3));
                break;
            case 4:
                dispatch(setSearchFilterType(4));
                break;
            default:
                break;
        }
    }

    const pendencyClients = clients.filter(client => client.status === 1);
    const awaitingPaymentClients = clients.filter(client => client.status === 2);
    const activePaymentClients = clients.filter(client => client.status === 3);
    const closedPaymentClients = clients.filter(client => client.status === 4);


    const _clients = type === 1 ? pendencyClients : type === 2 ? awaitingPaymentClients : type === 3 ? activePaymentClients : type === 4 ? closedPaymentClients : clients;


    const filteredClients = _clients.filter(client => {

        const { registration, cpfOrCnpj, name, propostNumber } = searchFilter;

        const _name = client.name.toLowerCase();
        const __name = name.toLowerCase();

        if (registration && cpfOrCnpj && __name && propostNumber) {
            return client.registration.includes(registration) && client.cpfOrCnpj.includes(cpfOrCnpj) && _name.includes(__name) && client.propostNumber.includes(propostNumber);
        }

        if (registration && cpfOrCnpj && __name) {
            return client.registration.includes(registration) && client.cpfOrCnpj.includes(cpfOrCnpj) && _name.includes(__name);
        }

        if (registration && cpfOrCnpj) {
            return client.registration.includes(registration) && client.cpfOrCnpj.includes(cpfOrCnpj);
        }

        if (registration && __name) {
            return client.registration.includes(registration) && _name.includes(__name);
        }

        if (registration && propostNumber) {
            return client.registration.includes(registration) && client.propostNumber.includes(propostNumber);
        }

        if (cpfOrCnpj && __name) {
            return client.cpfOrCnpj.includes(cpfOrCnpj) && _name.includes(__name);
        }

        if (cpfOrCnpj && propostNumber) {
            return client.cpfOrCnpj.includes(cpfOrCnpj) && client.propostNumber.includes(propostNumber);
        }

        if (__name && propostNumber) {
            return _name.includes(__name) && client.propostNumber.includes(propostNumber);
        }

        if (registration) {
            return client.registration.includes(registration);
        }

        if (cpfOrCnpj) {
            return client.cpfOrCnpj.includes(cpfOrCnpj);
        }

        if (__name) {
            return _name.includes(__name);
        }

        if (propostNumber) {
            return client.propostNumber.includes(propostNumber);
        }


        return client

    });

    const totalOfPages = filteredClients?.length % 7 === 0 ? Math.floor(filteredClients?.length / 7) : Math.floor(filteredClients?.length / 7) + 1;


    const isSearching = registration !== '' || cpfOrCnpj !== ''

    const handlePagination = (direction) => {

        if ((direction === 'next' && ((page[page.length - 1]) < filteredClients?.length - 1))) {
            setPage(page.map(item => item + 7))

            setAtualPage(atualPage + 1)
        }

        if ((direction === 'prev') && (page[0] !== 0)) {
            setPage(page.map(item => item - 7))

            setAtualPage(atualPage - 1)
        }

    }

    const handleClickClient = (client) => {
        if (client.status === 1) {
            dispatch(setSelectedClient(client))
        }
    };

    const handleRegistration = () => {
        dispatch(setScreen(registrationScreen))
    }

    const setStatusColor = (status) => {
        switch (status) {
            case 1:
                return '#AAAAAA'
            case 2:
                return '#146EFA'
            case 3:
                return '#00E1B9'
            case 4:
                return '#9632FA'
            default:
                return '#AAAAAA'
        }
    }

    useEffect(() => {
        if (atualPage > totalOfPages) {
            setAtualPage(1);
            setPage(pages);
        }

    }, [totalOfPages])


    return (
        <S.Container>
            <S.Header>
                {filterOpened && (<FilterModal />)}
                <S.MsgBox>
                    <S.WelcomeMsg>Bem vindo(a),</S.WelcomeMsg>
                    <S.User>Camila</S.User>
                </S.MsgBox>
                <S.FilterBtn
                    onClick={() => dispatch(setFilterOpened())}
                    isOpen={filterOpened}
                >{filter.mounth}/{filter.year.substring(2)} <S.ArrowFilterBtn src={filterOpened ? orangeArrow : grayArrow} isOpen={filterOpened} alt='seta' /> </S.FilterBtn>
            </S.Header>
            <S.ClassificationContainer>
                <S.Classification isSelected={searchFilter.type === 1} onClick={() => handleClickClassification(1)} disabled={!searchFilter.type === 1} >
                    <S.Number>{pendencyClients.length}</S.Number>
                    <S.BigStatusBox>
                        <S.BigStatus color='#AAAAAA' />
                        <S.LeftTitle>Pendentes</S.LeftTitle>
                    </S.BigStatusBox>
                    <S.SeeList>Ver Lista</S.SeeList>
                    <S.ClassificationLine isSelected={searchFilter.type === 1} />
                </S.Classification>
                <S.Classification isSelected={searchFilter.type === 2} onClick={() => handleClickClassification(2)}>
                    <S.Number>{awaitingPaymentClients.length}</S.Number>
                    <S.BigStatusBox>
                        <S.BigStatus color='#146EFA' />
                        <S.LeftTitle>Aguardando pagamento</S.LeftTitle>
                    </S.BigStatusBox>
                    <S.SeeList>Ver Lista</S.SeeList>
                    <S.ClassificationLine isSelected={searchFilter.type === 2} />
                </S.Classification>
                <S.Classification isSelected={searchFilter.type === 3} onClick={() => handleClickClassification(3)}>
                    <S.Number>{activePaymentClients.length}</S.Number>
                    <S.BigStatusBox>
                        <S.BigStatus color='#00E1B9' />
                        <S.LeftTitle>Pagamento Ativo</S.LeftTitle>
                    </S.BigStatusBox>
                    <S.SeeList>Ver Lista</S.SeeList>
                    <S.ClassificationLine isSelected={searchFilter.type === 3} />
                </S.Classification>
                <S.Classification isSelected={searchFilter.type === 4} onClick={() => handleClickClassification(4)}>
                    <S.Number>{closedPaymentClients.length}</S.Number>
                    <S.BigStatusBox>
                        <S.BigStatus color='#9632FA' />
                        <S.LeftTitle>Pagamento Encerrado</S.LeftTitle>
                    </S.BigStatusBox>
                    <S.SeeList>Ver Lista</S.SeeList>
                    <S.ClassificationLine isSelected={searchFilter.type === 4} />
                </S.Classification>
            </S.ClassificationContainer>
            <S.MiddleContainer>
                <S.SearchContainer>
                    <Input
                        label='Matrícula'
                        marginBottom='10px'
                        value={searchFilter.registration}
                        action={setSearchFilterRegistration}
                        cleanButton
                        placeholder='Digite aqui para pesquisar...'
                    />
                    <Input
                        label='CPF/CNPJ'
                        marginBottom='10px'
                        value={searchFilter.cpfOrCnpj}
                        action={setSearchFilterCPFOrCNPJ}
                        cleanButton
                        placeholder='Digite aqui para pesquisar...'
                    />
                    <Input
                        label='Nome'
                        marginBottom='10px'
                        value={searchFilter.name}
                        action={setSearchFilterName}
                        cleanButton
                        placeholder='Digite aqui para pesquisar...'
                    />
                    <Input
                        label='Número Proposta'
                        marginBottom='10px'
                        value={searchFilter.propostNumber}
                        action={setSearchFilterPropostNumber}
                        cleanButton
                        placeholder='Digite aqui para pesquisar...'
                    />
                    <S.FiltersButtonsBox>
                        <S.Label>Filtros</S.Label>
                        <S.ButtonsBox>
                            <S.Button isSelected={searchFilter.type === 1} onClick={() => handleClickClassification(1)} >Pendentes</S.Button>
                            <S.Button isSelected={searchFilter.type === 2} onClick={() => handleClickClassification(2)} >Aguardando</S.Button>
                            <S.Button isSelected={searchFilter.type === 3} onClick={() => handleClickClassification(3)} >Ativos</S.Button>
                            <S.Button isSelected={searchFilter.type === 4} onClick={() => handleClickClassification(4)} >Encerrados</S.Button>
                        </S.ButtonsBox>
                    </S.FiltersButtonsBox>
                    <S.SearchBox>
                        <S.ClearButton>
                            Limpar todos os campos
                        </S.ClearButton>
                    </S.SearchBox>
                </S.SearchContainer>
                <S.ResultContainer>
                    <S.ResultsAndPagination>
                        <p>( {filteredClients?.length} Resultados )</p>
                        <S.Pagination>
                            <S.PaginationCounter> {atualPage} de {totalOfPages !== 0 ? totalOfPages : 1}</S.PaginationCounter>
                            <S.PaginationButton aria-label="lista prévia" left onClick={() => handlePagination('prev')} >
                            </S.PaginationButton>
                            <S.PaginationButton aria-label="próxima lista" onClick={() => handlePagination('next')} >
                            </S.PaginationButton>
                        </S.Pagination>
                    </S.ResultsAndPagination>
                    <S.ClientBox>
                        <S.ClientBoxHead>
                            <S.Titles width='30%' >nome</S.Titles>
                            <S.Titles width='20%'>cpf/cnpj</S.Titles>
                            <S.Titles width='17%'>matrícula</S.Titles>
                            <S.Titles width='23%'  >número da proposta</S.Titles>
                            <S.Titles width='10%' align='center' >status</S.Titles>
                        </S.ClientBoxHead>
                        {filteredClients?.map((client, index) => {
                            if (page.includes(index)) {
                                return <S.Clients
                                    key={index}
                                    odd={index % 2 === 0}
                                    onClick={() => handleClickClient(client)}
                                    isSelected={client.registration === selectedClient.registration}
                                    isPending={client.status === 1}
                                >
                                    <S.ClientTexts weight='600' width='30%'>{client.name}</S.ClientTexts>
                                    <S.ClientTexts width='22%'>{client.cpfOrCnpj}</S.ClientTexts>
                                    <S.ClientTexts width='17%'>{client.registration}</S.ClientTexts>
                                    <S.ClientTexts width='23%'>{client.propostNumber}</S.ClientTexts>
                                    <S.StatusBox><S.Status color={setStatusColor(client.status)} /></S.StatusBox>
                                </S.Clients>
                            }

                        })}
                        {!filteredClients?.length && (
                            <S.MenssageBox>
                                <S.Menssage>Nenhum resultado encontrado</S.Menssage>
                            </S.MenssageBox>
                        )}
                        <S.Line />
                    </S.ClientBox>
                    {selectedClient.name && (selectedClient.status === 1) && (
                       <S.ButtonBox>
                            <Button
                            handleClick={handleRegistration}
                            text='Seguir para o cadastro'
                            alt='icone para a direita'
                            source={right}
                            width='177px' />
                       </S.ButtonBox>
                    )}
                </S.ResultContainer>
            </S.MiddleContainer>
        </S.Container>
    )
}

export default InitialScreen