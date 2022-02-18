import React from "react";
import { useSelector } from "react-redux";
import * as S from './style'


const FinalStep = () => {

    //Global State
    const selectedClient = useSelector(state => state.beneficiary.selectedClient);
    const personalData = useSelector(state => state.beneficiary.beneficiaryData.personalData);

    return (
        <>
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
                    <S.TextBox marginLeft='80px'>
                        <S.Title>Gênero (Opcional)</S.Title>
                        <S.Value>{personalData.gender}</S.Value>
                    </S.TextBox>
                </S.Row>
                

            </S.Container>
        </>
    )
}

export default FinalStep;