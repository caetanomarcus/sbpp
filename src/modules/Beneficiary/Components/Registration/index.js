import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { setScreen } from "../../Dataflow/reducers-and-actions/beneficiary";
import * as S from "./style"


const Registration = () => {

    const client = useSelector(state => state.beneficiary.selectedClient);
    const dispatch = useDispatch()

    const pending = 'beneficiarios/pendentes';

    return (
        <S.Container>
            <S.Content>
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