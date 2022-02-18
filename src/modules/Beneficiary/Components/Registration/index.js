import React from "react";
import * as S from './style'
import { useSelector, useDispatch } from "react-redux";
import { setStep, setResetStates, setModalOpen, setModalType } from '../../Dataflow/reducers-and-actions/beneficiary'

//Components
import Button from "../../../../components/Buttons/BeneficiaryButton";
import BeneficiaryForm from "../BeneficiaryForm";
import FinancialForm from "../FinancialForm";
import BenefitForm from "../BenefitForm";

//Images
import right from '../../../../assets/icons/right.png';
import FinalStep from "../FinalStep";

const Registration = () => {

	const client = useSelector(state => state.beneficiary.selectedClient);
	const step = useSelector(state => state.beneficiary.step);
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
				break;
			case finalStep:
				break;
			default:
				return null
		}
	}

	const handleClickBack = () => {
		switch (step) {
			case beneficiary:
				return null
			case financial:
				dispatch(setStep(beneficiary))
				break;
			case benefit:
				dispatch(setStep(financial))
				break;
			case finalStep:
				dispatch(setStep(benefit))
				break;
		}
	}

	const handleClickCancel = () => {
		dispatch(setModalOpen());
		dispatch(setModalType('cancel'));
	}

	return (
		<S.Container>
			<S.Content>
				<S.Header>
					<S.IconAndTitle>
						<S.PersonIcon />
						<S.HeaderTitle>Cadastro</S.HeaderTitle>
					</S.IconAndTitle>
					{step !== finalStep && (
						<S.RegistrationFluxBox>
						<S.Circle steps={step === beneficiary} >
							<S.Step steps={step === beneficiary}  >BENEFICIÁRIO</S.Step>
						</S.Circle>
						<S.Line selected={(step === financial) || step === benefit}  />
						<S.Circle steps={step === financial}  >
							<S.Step steps={step === financial}  >FINANCEIRO</S.Step>
						</S.Circle>
						<S.Line  selected={step=== benefit} />
						<S.Circle steps={step === benefit} >
							<S.Step steps={step === benefit} >BENEFÍCIO</S.Step>
						</S.Circle>
					</S.RegistrationFluxBox>
					)}
					<S.CancelButton onClick={handleClickCancel} >Cancelar</S.CancelButton>
				</S.Header>
				{(step === beneficiary) && <BeneficiaryForm />}
				{(step === financial) && <FinancialForm />}
				{(step === benefit) && <BenefitForm />}
				{(step === finalStep) && <FinalStep />}
				<S.Footer>
					{step !== beneficiary && (<S.CancelButton onClick={handleClickBack} >Voltar</S.CancelButton>)}
					<Button
						text={step === finalStep ? 'Finalizar' : 'Próximo'}
						alt={step === finalStep ? 'Finalizar' : 'Próximo'}
						source={right}
						width='101px'
						handleClick={handleClickNext}
					/>
				</S.Footer>
			</S.Content>
		</S.Container>
	)
}

export default Registration