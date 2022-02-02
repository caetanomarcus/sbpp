import React from "react";
import * as S from './style'
import { useSelector, useDispatch } from "react-redux";
import {setStep} from '../../Dataflow/reducers-and-actions/beneficiary'
import BeneficiaryForm from "../BeneficiaryForm";
import Button from "../../../../components/Buttons/BeneficiaryButton";

import right from '../../../../assets/icons/right.png';
import  FinancialForm  from "../FinancialForm";


const Registration = () => {

	const client = useSelector(state => state.beneficiary.selectedClient);
	const step = useSelector(state => state.beneficiary.step)
	const dispatch = useDispatch();

	const beneficiary = 'beneficiary';
	const financial = 'financial';
	const benefit = 'benefit';
	const finalStep = 'finalStep'

	const pending = 'beneficiarios/pendentes';

	const handleClickNext = () => {
       switch (step) {
				 case beneficiary:
					dispatch(setStep(financial))
					break;
					case financial:
						dispatch(setStep(benefit))
						break;
						case benefit:
							dispatch(setStep(finalStep))
			 }
	}

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
				{(step === beneficiary)  && <BeneficiaryForm />}
				{(step === financial) && <FinancialForm />}
				{step !== beneficiary &&(<S.CancelButton onClick={() => dispatch(setStep(beneficiary))} >Voltar</S.CancelButton>)}
				<Button 
				text='Próximo'
			 	alt='botão próximo' 
				source={right} 
				width='101px'
				handleClick={handleClickNext}
				 />
			</S.Content>
		</S.Container>
	)
}

export default Registration