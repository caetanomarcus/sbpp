import React, {useState} from 'react';
import * as S from './style'
import { useSelector, useDispatch } from 'react-redux';
import { setScreen, setSelectedClient } from '../../Dataflow/reducers-and-actions/beneficiary';

import house from '../../../../assets/icons/circled-house.svg';
import right from '../../../../assets/icons/right.png';
import Button from '../../../../components/Buttons/BeneficiaryButton';
import clients from './mock/clients.json'


// const clients =[
//     {
//         name: 'João Cesar Souza Soares',
//         cpfOrCnpj: '928.728.871-67',
//         registration: '8003775',
//         email: 'joaocesar@email.com',
//         status: 'gray'

//     },
//     {
//         name: 'Marcos Vinicios Oliveira Djongo',
//         cpfOrCnpj: '989.828.937-96',
//         registration: '9284028',
//         email: 'marcosvini07@email.com',
//         status: 'gray'
//     },
//     {
//         name: 'Jorge Santos Alvez',
//         cpfOrCnpj: '928.735.115-66',
//         registration: '4758309',
//         email: 'js_alvez@email.com',
//         status: 'gray'
//     },
//     {
//         name: 'Thiago Almeida Portinho Silva',
//         cpfOrCnpj: '378.855.878-98',
//         registration: '7840294',
//         email: 'thiportinho38@email.com',
//         status: ''
//     },
//     {
//         name: 'Arthur Cordeiro Filho Matheus',
//         cpfOrCnpj: '256.136.987-46',
//         registration: '17384950',
//         email: 'arthur_cordeiro@email.com',
//         status: 'gray'
//     },
//     {
//         name: 'Natália Braga Moreira Santos',
//         cpfOrCnpj: '789.675.256-87',
//         registration: '1748398',
//         email: 'nbm_santos@email.com',
//         status: 'gray'
//     },
//     {
//         name: 'Marcela Pereira Montana',
//         cpfOrCnpj: '928.728.871-67',
//         registration: '5467934',
//         email: 'mpmontana98@email.com',
//         status: 'gray'
//     },
//     {
//         name: 'João Carlos Pereira Santos',
//         cpfOrCnpj: '989.828.937-96',
//         registration: '9086587',
//         email: 'joao_carlos_pereira@email.com',
//         status: 'gray'
//     },
//     {
//         name: 'Leandro Patrício Ferreira dos Santos',
//         cpfOrCnpj: '928.728.871-67',
//         registration: '1287698',
//         email: 'leandro_pfs@email.com',
//         status: 'gray'
//     },
//     {
//         name: 'Marcus Camargo de Moura',
//         cpfOrCnpj: '989.828.937-96',
//         registration: '0295849',
//         email: 'marcus22_moura@email.com',
//         status: 'gray'
//     },
//     {
//         name: 'José Camargo de Moura',
//         cpfOrCnpj: '979.828.937-96',
//         registration: '0295849',
//         email: 'joses22_moura@email.com',
//         status: 'gray'
//     },
// ]
const pages = [0,1,2,3,4,5,6,7,8,9]


const Pending = () => {
    //Local State
    const[registration, setRegistration] = useState('');
    const [cpfOrCnpj, setCpfOrCnpj] = useState('');
    const [page, setPage] = useState(pages);
    const [atualPage, setAtualPage] = useState(1);
    const [searching, setSearching] = useState(false);



    //Redux State and Dispatch
    const selectedClient = useSelector(state => state.beneficiary.selectedClient)
    const dispatch = useDispatch();

    const registrationScreen = 'beneficiarios/pendentes/cadastro'

    const totalOfPages = Math.floor(clients.length / 10);

    const handleClickClient = (client) => {
        dispatch(setSelectedClient(client))
    };

    const filteredClients = clients.filter(client => {
       
        if(registration !== ''){
            return client.registration.includes(registration)
       }

       if(cpfOrCnpj !== ''){
           return client.cpfOrCnpj.includes(cpfOrCnpj)
       }



       return client
         
    });
   
    const handleRegistration = () => {
        dispatch(setScreen(registrationScreen))
    }

    const handleCleanAllInputs = () => {
        setCpfOrCnpj('')
        setRegistration('')
    }

    const isSearching = registration !=='' || cpfOrCnpj !==''

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

    console.log(page)

    return(
        <S.Container>
            <S.Content>
                <S.Header>
                    <S.HouseIcon onClick={() => dispatch(setScreen('inicio'))} src={house} alt='home' />
                    <S.HeaderTitle weight="700" > {'>'} Beneficiários</S.HeaderTitle>
                    <S.HeaderTitle weight='400' > {'>'} Pendentes</S.HeaderTitle>
                </S.Header>
                <S.SearchBox>
                    <S.InputBox>
                        <S.Input 
                        value={registration} 
                        type='text' 
                        placeholder='Matrícula' 
                        borderRadius='4px 0 0 4px'
                        onChange={(ev) => {
                            
                            setRegistration(ev.target.value)
                            dispatch(setSelectedClient({}))
                        }} 
                        />
                        <S.Input 
                        value={cpfOrCnpj} 
                        type='text' 
                        placeholder='CPF/CNPJ' 
                        borderRadius='0 4px 4px 0' 
                        onChange={(ev) => {
                            
                            setCpfOrCnpj(ev.target.value)
                            dispatch(setSelectedClient({}))
                        }}
                        />
                    </S.InputBox>
                    <S.CleanButton onClick={handleCleanAllInputs} >Limpar todos os campos</S.CleanButton>
                </S.SearchBox>
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
                    {filteredClients.map((client, index) => {
                        if(page.includes(index)){
                           return  <S.Clients 
                        key={index}  
                        odd={index%2 === 0} 
                        onClick={()=> handleClickClient(client)} 
                        isSelected={selectedClient === client}
                        >
                            <S.ClientTexts  weight='600' width='30%'>{client.name}</S.ClientTexts>
                            <S.ClientTexts  width='22%'>{client.cpfOrCnpj}</S.ClientTexts>
                            <S.ClientTexts  width='17%'>{client.registration}</S.ClientTexts>
                            <S.ClientTexts width='23%'>{client.email}</S.ClientTexts>
                            <S.StatusBox><S.Status /></S.StatusBox>
                        </S.Clients>
                        }
                        
                    })}
                    {!filteredClients.length && <p style={{'height': '100%'}} >Nenhum resultado encontrado para a pesquisa de beneficiário</p>}
                    <S.Line />
                    {selectedClient.name && (
                        <Button 
                        handleClick={handleRegistration} 
                        text='Seguir para o cadastro' 
                        alt='icone para a direita' 
                        source={right}
                        width='177px' />
                    )}
                </S.ClientBox>
            </S.Content>
        </S.Container>
    )
}

export default Pending