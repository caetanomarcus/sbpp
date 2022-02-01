import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { setScreen } from "../../Dataflow/reducers-and-actions/beneficiary";


const Registration = () => {

    const client = useSelector(state => state.beneficiary.selectedClient);
    const dispatch = useDispatch()

    const pending = 'beneficiarios/pendentes';

    return (
        <div>
        <div>
        <button onClick={() => dispatch(setScreen(pending))} >voltar</button>
        </div>
        <div>
            <h1>Cadastro! Tela em construção</h1>
            <h2>{client.name}</h2>
            <h2>{client.registration}</h2>
            <h2>{client.cpfOrCnpj}</h2>
        </div>
        </div>
    )

}

export default Registration