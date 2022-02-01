import React from "react";
import * as S from './style'
import { useSelector , useDispatch} from "react-redux";
import { setScreen } from "../../Dataflow/reducers-and-actions/beneficiary";


const Registration = () => {

    const client = useSelector(state => state.beneficiary.selectedClient);
    const step = useSelector(state => state.beneficiary.step)
    const dispatch = useDispatch();

    const beneficiary = 'beneficiary';
    const financial = 'financial';
    const benefit = 'benefit';

    const pending = 'beneficiarios/pendentes';

    return (
        <S.Container>
            <S.Content>
            <S.Header>
                    <S.IconAndTitle>
                        <S.PersonIcon />
                        <S.HeaderTitle>Cadastro</S.HeaderTitle>
                    </S.IconAndTitle>
                    <S.RegistrationFluxBox>
                        <S.Circle step={step === beneficiary} >
                            <S.Step step={step === beneficiary}  >BENEFICIÁRIO</S.Step>
                        </S.Circle>
                        <S.Line/>
                        <S.Circle step={step === financial}  >
                            <S.Step step={step === financial}  >FINANCEIRO</S.Step>
                        </S.Circle>
                        <S.Line/>
                        <S.Circle step={step === benefit} >
                            <S.Step step={step === benefit} >BENEFÍCIO</S.Step>
                        </S.Circle>
                    </S.RegistrationFluxBox>
                    <S.CancelButton>Cancelar</S.CancelButton>
                </S.Header>
                <S.Form>
                    <S.Fieldset>
                        <S.Legend>Participante</S.Legend>

                        <S.Row>
                            <S.Label htmlFor="matricula" width="25%"> Matricula 
                                <S.Input id="matricula" value={client.registration} disabled="true"></S.Input>
                            </S.Label>
                            
                            <S.Label htmlFor="" width="20%"> CPF/CNPJ 
                                <S.Input value={client.cpfOrCnpj} disabled></S.Input>
                            </S.Label> 
                        </S.Row>
                        
                    </S.Fieldset>

                    <S.Fieldset>
                        <S.Legend>Dados </S.Legend>
                        <S.Row>
                            <S.Label htmlFor="" width="60%"> Nome 
                                <S.Input id="" value={client.name}></S.Input>
                            </S.Label>

                            <S.Label htmlFor="" width="35%"> Email 
                                <S.Input id=""></S.Input>
                            </S.Label>
                        </S.Row>
                        <S.Row>
                            <S.Label htmlFor="" width="100%" row > Possui nome social?
                                <S.InputCheck type="checkbox"></S.InputCheck>
                            </S.Label>
                            
                        </S.Row>
                        <S.Row>
                            <S.Label htmlFor="" width="60%" optional> Nome social 
                                <S.Input id=""></S.Input>
                            </S.Label>
                        </S.Row>
                        <S.Row>
                            <S.Label htmlFor="" width="20%"> Data de Nascimento 
                                <S.Input id="" placeholder="DD/MM/AAAA"></S.Input>
                            </S.Label>

                            <S.Label htmlFor="" width="5%" > Sexo 
                                <S.Row>
                                    <S.InputCheck type="radio" value="feminino"></S.InputCheck>
                                    <S.InputCheck type="radio" value="masculino"></S.InputCheck>
                                </S.Row>
                            </S.Label>
                        </S.Row>
                        
                    </S.Fieldset>
                </S.Form>
            
            </S.Content>
        </S.Container>
    )
}

export default Registration