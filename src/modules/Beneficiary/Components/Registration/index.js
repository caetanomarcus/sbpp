import React from "react";
import * as S from './style'
import { useSelector, useDispatch } from "react-redux";
import Form from "../RegistrationForm";


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
						<S.Line />
						<S.Circle step={step === financial}  >
							<S.Step step={step === financial}  >FINANCEIRO</S.Step>
						</S.Circle>
						<S.Line />
						<S.Circle step={step === benefit} >
							<S.Step step={step === benefit} >BENEFÍCIO</S.Step>
						</S.Circle>
					</S.RegistrationFluxBox>
					<S.CancelButton>Cancelar</S.CancelButton>
				</S.Header>
				<Form />
			</S.Content>
		</S.Container>
	)
}

export default Registration