import React from "react";
import { useSelector} from "react-redux";
import * as S from './style'

const FinalStep = () => {

    //Global State
    const selectedClient  = useSelector(state => state.beneficiary.selectedClient);
    const personalData = useSelector(state => state.beneficiary.beneficiaryData.personalData);
    const document = useSelector(state => state.beneficiary.beneficiaryData.document);
    const adressDefault = useSelector(state => state.beneficiary.beneficiaryData.addressDefault);
    const adressOptional = useSelector(state => state.beneficiary.beneficiaryData.addressOptional);
    const contact = useSelector(state => state.beneficiary.beneficiaryData.contact);
    const bankData = useSelector(state => state.beneficiary.beneficiaryData.bankData);

    return (
        <S.Wrapper>
            <S.Text>Cadastro realizado com sucesso!</S.Text>
            <S.Container>
                <S.Row noMargin >
                    <S.TextBox>
                        <S.Title>Matrícula</S.Title>
                        <S.Value>{selectedClient.registration}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='58px'>
                        <S.Title>CPF/CNPJ</S.Title>
                        <S.Value>{selectedClient.cpfOrCnpj}</S.Value>
                    </S.TextBox>
                </S.Row>
                <S.Line />
                <S.Row >
                    <S.TextBox>
                        <S.Title>Nome</S.Title>
                        <S.Value>{selectedClient.name}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='500px'>
                        <S.Title>Email</S.Title>
                        <S.Value>{selectedClient.email}</S.Value>
                    </S.TextBox>
                </S.Row>
                <S.Row>
                    <S.TextBox >
                        <S.Title>Data de Nascimento</S.Title>
                        <S.Value>{personalData.birthDate}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='24px'>
                        <S.Title>Sexo</S.Title>
                        <S.Value>{personalData.sex}</S.Value>
                    </S.TextBox>
                   {personalData.gender && (
                        <S.TextBox marginLeft='80px'>
                        <S.Title>Gênero (opcional)</S.Title>
                        <S.Value>{personalData.gender}</S.Value>
                    </S.TextBox>
                   )}
                </S.Row>
                <S.Row>
                    <S.TextBox>
                        <S.Title>Naturalidade</S.Title>
                        <S.Value>{personalData.naturalness}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='185px'>
                        <S.Title>Nacionalidade</S.Title>
                        <S.Value>{personalData.nationality}</S.Value>
                    </S.TextBox>
                </S.Row>
                <S.Row>
                    <S.TextBox>
                        <S.Title>Filiação 1</S.Title>
                        <S.Value>{personalData.filiation1}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='300px'>
                        <S.Title>Filiação 2</S.Title>
                        <S.Value>{personalData.filiation2}</S.Value>
                    </S.TextBox>
                </S.Row>
                <S.Line />
                <S.Row>
                    <S.TextBox>
                        <S.Title>RG</S.Title>
                        <S.Value>{document.rg}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='64px'>
                        <S.Title>Orgão Emissor</S.Title>
                        <S.Value>{document.issuer}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='48px'>
                        <S.Title>UF</S.Title>
                        <S.Value>{document.uf}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='48px'>
                        <S.Title>Data de Expedição</S.Title>
                        <S.Value>{document.issueDate}</S.Value>
                    </S.TextBox>
                </S.Row>
                <S.Line />
                <S.Row>
                    <S.TextBox>
                        <S.Title>CEP</S.Title>
                        <S.Value>{adressDefault.cep}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='72px'>
                        <S.Title>Logradouro</S.Title>
                        <S.Value>{adressDefault.address}</S.Value>
                    </S.TextBox>
                    </S.Row>
                    <S.Row>
                    <S.TextBox>
                        <S.Title>Número</S.Title>
                        <S.Value>{adressDefault.number}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='48px'>
                        <S.Title>Complemento (opcional)</S.Title>
                        <S.Value>{adressDefault.complement}</S.Value>
                    </S.TextBox>
                    </S.Row>
                    <S.Row>
                    <S.TextBox>
                        <S.Title>Bairro</S.Title>
                        <S.Value>{adressDefault.district}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='350px'>
                        <S.Title>Município</S.Title>
                        <S.Value>{adressDefault.city}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='300px'>
                        <S.Title>UF</S.Title>
                        <S.Value>{adressDefault.uf}</S.Value>
                    </S.TextBox>
                    </S.Row>
                    <S.Row>
                    <S.TextBox flex>
                        <S.Title>Deseja receber correspondência por:</S.Title>
                        <S.Value>{adressDefault.correspondenceType}</S.Value>
                    </S.TextBox>
                    </S.Row>
                    <S.Row flex>
                        <S.Title>Possui endereço diferente para correspondência</S.Title>
                        <S.Checkbox type='checkbox' checked={adressDefault.hasDifferentAddress} readOnly />
                    </S.Row>
                    {adressDefault.hasDifferentAddress && (
                        <>
                             <S.Row>
                         <S.TextBox>
                             <S.Title>CEP</S.Title>
                             <S.Value>{adressOptional.cep}</S.Value>
                         </S.TextBox>
                         <S.TextBox marginLeft='72px'>
                             <S.Title>Logradouro</S.Title>
                             <S.Value>{adressOptional.address}</S.Value>
                         </S.TextBox>
                         </S.Row>
                         <S.Row>
                         <S.TextBox>
                             <S.Title>Número</S.Title>
                             <S.Value>{adressOptional.number}</S.Value>
                         </S.TextBox>
                         <S.TextBox marginLeft='48px'>
                             <S.Title>Complemento (opcional)</S.Title>
                             <S.Value>{adressOptional.complement}</S.Value>
                         </S.TextBox>
                         </S.Row>
                         <S.Row>
                         <S.TextBox>
                             <S.Title>Bairro</S.Title>
                             <S.Value>{adressOptional.district}</S.Value>
                         </S.TextBox>
                         <S.TextBox marginLeft='350px'>
                             <S.Title>Município</S.Title>
                             <S.Value>{adressOptional.city}</S.Value>
                         </S.TextBox>
                         <S.TextBox marginLeft='300px'>
                             <S.Title>UF</S.Title>
                             <S.Value>{adressOptional.uf}</S.Value>
                         </S.TextBox>
                         </S.Row>
                         <S.Row></S.Row>
                        </>
                    )}
                    <S.Line />
                    <S.TextBox>
                        <S.Title>Telefone 1</S.Title>
                        <S.Value>{contact.phone1}</S.Value>
                    </S.TextBox>
                    <S.Line />
                    <S.Row>
                    <S.TextBox >
                        <S.Title>Forma de Pagamento</S.Title>
                        <S.Value>{bankData.paymentMethod}</S.Value>
                    </S.TextBox>
                    <S.TextBox  marginLeft='24px' > 
                        <S.Title>Conta</S.Title>
                        <S.Value>{bankData.national? 'Nacional': 'Internacional'}</S.Value>
                    </S.TextBox>
                    </S.Row>
            </S.Container>
        </S.Wrapper>
    )
}

export default FinalStep;