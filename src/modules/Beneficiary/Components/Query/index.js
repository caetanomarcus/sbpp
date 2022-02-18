import React, {useState} from "react";
import { setScreen } from "../../Dataflow/reducers-and-actions/beneficiary";
import { useDispatch } from "react-redux";
import clients from '../Pending/mock/clients.json'
import * as S from "./style";

import house from '../../../../assets/icons/circled-house.svg';

const pages = [0,1,2,3,4,5,6,7,8,9]

const Query = () => {
    const[registration, setRegistration] = useState();
    const [cpfOrCnpj, setCpfOrCnpj] = useState();
    const [page, setPage] = useState(pages);
    const [atualPage, setAtualPage] = useState(1);
    const [searching, setSearching] = useState(false);

    const dispatch = useDispatch();

    const isSearching = registration || cpfOrCnpj 

    const registrationScreen = 'beneficiarios/pendentes/cadastro'

    const totalOfPages = clients.length%10 === 0? Math.floor(clients.length / 10): Math.floor(clients.length / 10) + 1;


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

    const handlePagination = (direction) => {
        
        if((direction === 'next' && ((page[page.length -1] ) < clients.length - 1))){
            setPage(page.map(item => item + 10))

            setAtualPage(atualPage + 1)
        }

        if((direction === 'prev') && (page[0] !== 0)){
            setPage(page.map(item => item - 10))

           setAtualPage(atualPage - 1)
        }

    }

    return (
        <S.Container>
            <S.Content>
                <S.Header>
                    <S.HouseIcon onClick={() => dispatch(setScreen('inicio'))} src={house} alt='home' />
                    <S.HeaderTitle weight="700" > {'>'} Beneficiários</S.HeaderTitle>
                    <S.HeaderTitle weight='400' > {'>'} Consulta</S.HeaderTitle>
                </S.Header>
                <S.HeadBox>
                    <S.InputBox justify='flex-start' >
                        <S.UpperBox>
                            <S.Input

                                type='text'
                                placeholder='Matrícula'
                                borderRadius='4px 0 0 0'

                            />
                            <S.Input

                                type='text'
                                placeholder='CPF/CNPJ'
                                borderRadius='0 4px 0 0'
                            />
                        </S.UpperBox>
                        <S.BottomBox>
                            <S.Input

                                type='text'
                                placeholder='Nome'
                                borderRadius='0 0 0 0'

                            />
                            <S.Input

                                type='text'
                                placeholder='Email'
                                borderRadius='0 0 0 0'
                            />
                        </S.BottomBox>
                        <S.FilterOptionsBox>
                            <S.OptionsTitle>Filtros</S.OptionsTitle>
                            <S.FilterOptions selected >Pendentes</S.FilterOptions>
                            <S.FilterOptions>Em pagamento</S.FilterOptions>
                            <S.FilterOptions>Finalizados</S.FilterOptions>
                        </S.FilterOptionsBox>
                    </S.InputBox>
                   
                    <S.CleanButton  >Limpar todos os campos</S.CleanButton>
                </S.HeadBox>
                <S.ResultsAndPagination>
                        <p>{(isSearching && filteredClients.length) || 0} resultados</p>
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
                    { !isSearching && filteredClients.map((client, index) => {
                        if(page.includes(index)){
                           return  <S.Clients 
                        key={index}  
                        odd={index%2 === 0} 
                        onClick={()=> handleClickClient(client)} 
                        
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
                    {/* {(1 + 1  === 2) && (
                        <Button 
                        handleClick={handleRegistration} 
                        text='Seguir para o cadastro' 
                        alt='icone para a direita' 
                        source={right}
                        width='177px' />
                    )} */}
                </S.ClientBox>
            </S.Content>
        </S.Container>
    )
}

export default Query;