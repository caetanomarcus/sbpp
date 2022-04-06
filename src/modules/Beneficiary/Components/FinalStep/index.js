import React from "react";
import { useSelector } from "react-redux";
import * as S from './style'

const FinalStep = () => {

    //Global State
    const selectedClient = useSelector(state => state.beneficiary.selectedClient);
    const personalData = useSelector(state => state.beneficiary.beneficiaryData.beneficiaryStep.personalData);
    const document = useSelector(state => state.beneficiary.beneficiaryData.beneficiaryStep.document);
    const adressDefault = useSelector(state => state.beneficiary.beneficiaryData.beneficiaryStep.addressDefault);
    const adressOptional = useSelector(state => state.beneficiary.beneficiaryData.beneficiaryStep.addressOptional);
    const contact = useSelector(state => state.beneficiary.beneficiaryData.beneficiaryStep.contact);
    const bankData = useSelector(state => state.beneficiary.beneficiaryData.bankData);
    const benefitData = useSelector(state => state.beneficiary.beneficiaryData.benefitStep.benefitData);
    const paymentData = useSelector(state => state.beneficiary.beneficiaryData.benefitStep.paymentData);
    const agreementData = useSelector(state => state.beneficiary.beneficiaryData.benefitStep.agreementData);
    const conditionsData = useSelector(state => state.beneficiary.beneficiaryData.benefitStep.conditionsData);
    // const courtPensionData = useSelector(state => state.beneficiary.beneficiaryData.benefitStep.courtPensionData);



    return (
        <S.Wrapper>
            <S.Text>Cadastro realizado com sucesso!</S.Text>
            <S.Container >
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
                <S.Row id='part2'>
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

                {adressDefault.hasDifferentAddress && (
                    <>
                        <S.Row flex>
                            <S.Title>Possui endereço diferente para correspondência</S.Title>
                            <S.Checkbox type='checkbox' checked={adressDefault.hasDifferentAddress} readOnly />
                        </S.Row>
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
                    <S.TextBox marginLeft='24px' >
                        <S.Title>Conta</S.Title>
                        <S.Value>{bankData.national ? 'Nacional' : 'Internacional'}</S.Value>
                    </S.TextBox>
                </S.Row>
                <S.Row>
                    <S.TextBox>
                        <S.Title>Tipo de Conta</S.Title>
                        <S.Value>{bankData.accountType}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='24px'>
                        <S.Title>Banco</S.Title>
                        <S.Value>{bankData.bank}</S.Value>
                    </S.TextBox>
                </S.Row>
                <S.Row>
                    <S.TextBox>
                        <S.Title>Agência</S.Title>
                        <S.Value>{bankData.agency}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='24px'>
                        <S.Title>Dígito</S.Title>
                        <S.Value>{bankData.agencyDigit}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='24px' >
                        <S.Title>Conta Corrente</S.Title>
                        <S.Value>{bankData.accountNumber}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='24px'>
                        <S.Title>Dígito</S.Title>
                        <S.Value>{bankData.accountDigit}</S.Value>
                    </S.TextBox>
                </S.Row>

                {bankData.hasPowerOfAttorney && (
                    <>
                        <S.Row flex>
                            <S.Title>Possui Representante Judicial</S.Title>
                            <S.Checkbox type='checkbox' checked={bankData.hasPowerOfAttorney} readOnly />
                        </S.Row>
                        <S.Row>
                            <S.TextBox>
                                <S.Title>Nome</S.Title>
                                <S.Value>{bankData.powerOfAttorneyName}</S.Value>
                            </S.TextBox>
                            <S.TextBox marginLeft='24px'>
                                <S.Title>CPF</S.Title>
                                <S.Value>{bankData.powerOfAttorneyCPF}</S.Value>
                            </S.TextBox>
                        </S.Row>
                    </>
                )
                }
                <S.Line />
                <S.Row>
                    <S.TextBox>
                        <S.Title>Produto</S.Title>
                        <S.Value>{benefitData.product}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='24px'>
                        <S.Title>Processo Susep</S.Title>
                        <S.Value>{benefitData.susep}</S.Value>
                    </S.TextBox>
                </S.Row>
                <S.Row>
                    <S.TextBox>
                        <S.Title>Número da proposta</S.Title>
                        <S.Value>{benefitData.proposalNumber}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='24px'>
                        <S.Title>Data da proposta</S.Title>
                        <S.Value>{benefitData.proposalData}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='24px'>
                        <S.Title>Estrutura de Vendas</S.Title>
                        <S.Value>{benefitData.salesStructure}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='24px'>
                        <S.Title>Tipo de tributação</S.Title>
                        <S.Value>{benefitData.taxationType}</S.Value>
                    </S.TextBox>
                </S.Row>
                <S.Line />
                <S.Row>
                    <S.TextBox>
                        <S.Title>Valor de Reserva</S.Title>
                        <S.Value>{paymentData.bookingValue}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='24px'>
                        <S.Title>Tempo de Duração</S.Title>
                        <S.Mounths>meses</S.Mounths>
                        <S.Value>{paymentData.durationTime}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='24px'>
                        <S.Title>Início de Pagamento</S.Title>
                        <S.Value>{paymentData.paymentStartDate}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='24px'>
                        <S.Title>Fim de Pagamento</S.Title>
                        <S.Value>{paymentData.paymentEndDate}</S.Value>
                    </S.TextBox>
                </S.Row>
                <S.Row>
                    <S.TextBox >
                        <S.Title >Tipo de Benefício</S.Title>
                        <S.Value>{paymentData.benefitType}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='300px'>
                        <S.Title>Valor da Parcela</S.Title>
                        <S.Value>{paymentData.quotaValue}</S.Value>
                    </S.TextBox>
                </S.Row>
                <S.Line />
                <S.Row>
                    <S.TextBox>
                        <S.Title>Código Convênio</S.Title>
                        <S.Value>{agreementData.agreementCode}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='24px'>
                        <S.Title>Nome da Empresa</S.Title>
                        <S.Value>{agreementData.companyName1}</S.Value>
                    </S.TextBox>
                </S.Row>
                <S.Row>
                    <S.TextBox>
                        <S.Title>Código Filial</S.Title>
                        <S.Value>{agreementData.branchCode}</S.Value>
                    </S.TextBox>
                    <S.TextBox marginLeft='24px'>
                        <S.Title>Nome da Empresa</S.Title>
                        <S.Value>{agreementData.companyName2}</S.Value>
                    </S.TextBox>
                </S.Row>
                {agreementData.hasAdvance && (
                    <>
                        <S.Row flex>
                            <S.Title>Possui adiantamento?</S.Title>
                            <S.Checkbox type='checkbox' checked={agreementData.hasAdvance} readOnly />
                        </S.Row>
                        <S.Row>
                            <S.TextBox>
                                <S.Title>Adiantamento (%)</S.Title>
                                <S.Value>{agreementData.advanceValue}</S.Value>
                            </S.TextBox>
                        </S.Row>
                    </>
                )
                }
                <S.Line />
                {conditionsData.IRPF.hasIRPFIsention && (
                    <>
                        <S.Row >
                            <S.Title>Possui isenção de IRPF?</S.Title>
                            <S.Checkbox type='checkbox' checked={conditionsData.IRPF.hasIRPFIsention} readOnly />
                        </S.Row>
                        <S.Row noMargin>
                            <S.TextBox flex>
                                <S.Title>É vitalício?</S.Title>
                                <S.Value>{conditionsData.IRPF.isLifeTime}</S.Value>
                            </S.TextBox>
                        </S.Row>
                        {conditionsData.IRPF.isLifeTime === 'Não' && (
                            <>
                            <S.Row>
                                <S.TextBox>
                                    <S.Title>Prazo de isenção de IRPF</S.Title>
                                    <S.Value>{conditionsData.IRPF.deadline}</S.Value>
                                </S.TextBox>

                            </S.Row>
                                <S.Row noMargin>
                                <S.TextBox flex>
                                    <S.Title>Motivo</S.Title>
                                    <S.Value>{conditionsData.IRPF.reason}</S.Value>
                                </S.TextBox>
                            </S.Row>
                             {conditionsData.IRPF.reason === 'Doença' && (
                                <S.Row>
                                <S.TextBox>
                                    <S.Title>CID</S.Title>
                                    <S.Value>{conditionsData.IRPF.cid}</S.Value>
                                </S.TextBox>
                                <S.TextBox marginLeft='24px'>
                                    <S.Title>Descrição</S.Title>
                                    <S.Value>{conditionsData.IRPF.description}</S.Value>
                                </S.TextBox>
                            </S.Row>
                           )}
                            </>
                        )}
                        

                    </>
                )}
                {conditionsData.paymentSuspension.hasPaymentSuspension && (
                    <>
                        <S.Row >
                            <S.Title>Incluir Suspensão de Pagamento?</S.Title>
                            <S.Checkbox type='checkbox' checked={conditionsData.paymentSuspension.hasPaymentSuspension} readOnly />
                        </S.Row>
                        <S.Row>
                            <S.TextBox>
                            <S.Title>Motivo</S.Title>
                            <S.Value>{conditionsData.paymentSuspension.reason}</S.Value>
                            </S.TextBox>
                            
                        </S.Row>
            
                        
                             {conditionsData.paymentSuspension.reason === 'Doença' && (
                                <S.Row>
                                <S.TextBox>
                                    <S.Title>CID</S.Title>
                                    <S.Value>{conditionsData.paymentSuspension.cid}</S.Value>
                                </S.TextBox>
                                <S.TextBox marginLeft='24px'>
                                    <S.Title>Descrição</S.Title>
                                    <S.Value>{conditionsData.paymentSuspension.description}</S.Value>
                                </S.TextBox>
                            </S.Row>
                           )}
 
                        

                    </>
                )}
            </S.Container>
        </S.Wrapper>
    )
}

export default FinalStep;