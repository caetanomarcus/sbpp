import React, { useState, useEffect } from "react";
import * as S from './style'
import { useSelector, useDispatch } from "react-redux";
import { jsPDF } from 'jspdf';

import {
	setStep,
	setModalOpen,
	setModalType,
} from '../../Dataflow/reducers-and-actions'

//Components
import BackNextButton from "../../../../components/Buttons/BackNextButton";
import BeneficiaryForm from "../BeneficiaryForm";
import FinancialForm from "../FinancialForm";
import BenefitForm from "../BenefitForm";
import FinalStep from "../FinalStep";


//Images
import right from '../../../../assets/icons/right.png';
import beneficiaryIcon from '../../../../assets/icons/beneficiary-icon.png';
import financialIcon from '../../../../assets/icons/financial-icon.png';
import benefitIcon from '../../../../assets/icons/benefit-icon.png';
import beneficiaryIconOrange from '../../../../assets/icons/beneficiary-icon-orange.png';
import financialIconOrange from '../../../../assets/icons/financial-icon-orange.png';
import benefitIconGray from '../../../../assets/icons/benefit-icon-gray.png';
import financialIconGray from '../../../../assets/icons/financial-icon-gray.png';
import closeIcon from '../../../../assets/icons/close-icon.svg';
import downloadIcon from '../../../../assets/icons/download-icon.svg';
import PDF from "../FinalStep/pdf.component";

const beneficiaryList = [{
	name: 'Dados do Beneficiário',
	value: 'participant'
},
{
	name: 'Dados',
	value: 'data'
},
{
	name: 'Documento',
	value: 'document'
},
{
	name: 'Endereço Residencial',
	value: 'address'
},
{
	name: 'Contato',
	value: 'contact'
},
]


const benefitList = [{
	name: 'Benefício',
	value: 'benefit'
},
{
	name: 'Pagamento',
	value: 'payment'
},
{
	name: 'Convênio',
	value: 'contract'
},
{
	name: 'Condições',
	value: 'conditions'
},
{
	name: 'Pensão Judicial',
	value: 'judicial'
}
]


const Registration = () => {


	const step = useSelector(state => state.beneficiary.step);
	const beneficiaryState = useSelector(state => state.beneficiary.beneficiaryData.beneficiaryStep);
	const finantialState = useSelector(state => state.beneficiary.beneficiaryData.bankData);
	const benefitialState = useSelector(state => state.beneficiary.beneficiaryData.benefitStep);
	const {personalData,addressDefault, addressOptional, contact} = beneficiaryState;
	const {benefitData, paymentData, agreementData, conditionsData, courtPensionData} = benefitialState;
	const dispatch = useDispatch();

	const [atualStep, setAtualStep] = useState(beneficiaryList[0].value);

	const beneficiary = 'beneficiary';
	const financial = 'financial';
	const benefit = 'benefit';
	const finalStep = 'finalStep'


	const {name, email, hasSocialName, socialName, birthDate, sex, naturalness, uf, nationality, hasDeathInformation, deathDate, deathInfoDate, filiation1, filiation2} = personalData
	const {rg, issuer, ufRG, issueDate} = beneficiaryState.document
	const {cep, address, number, district, city, hasMailAdress, correspondenceType, hasDifferentAddress} = addressDefault
	const ufAddress = addressDefault.uf
	const {phone1} = contact
	const {national, accountType, bank, paymentMethod, accountNumber, accountDigit, agency, agencyDigit, hasPowerOfAttorney, powerOfAttorneyName, powerOfAttorneyCPF} = finantialState
	const {product, susep, proposalNumber, proposalDate, salesStructure, taxationType, has13thMonth} = benefitData
	const {bookingValue, durationTime, paymentStartDate, paymentEndDate, benefitType, incomeType, quotaValue} = paymentData
	const {agreementCode, companyName1, branchCode, companyName2, hasAdvance, advanceValue} = agreementData
	const IRPFHasIRPFIsention = conditionsData.IRPF.hasIRPFIsention
	const IRPFIsLifeTime = conditionsData.IRPF.isLifeTime
	const IRPFDeadline = conditionsData.IRPF.deadline
	const IRPFReason = conditionsData.IRPF.reason
	const IRPFCid = conditionsData.IRPF.cid
	const IRPFDescription = conditionsData.IRPF.description
	const PSHasPaymentSuspesion = conditionsData.paymentSuspension.hasPaymentSuspesion
	const PSReason = conditionsData.paymentSuspension.reason
	const PSCid = conditionsData.paymentSuspension.cid
	const PSDescription = conditionsData.paymentSuspension.description
	const {hasCourtPension,previdencyRegistration, pensionistRegistration,pensionistName, pensionType, modality, judicialOffice, discountFactor, pensionStart, pensionEnd} = courtPensionData
	const pensionIncomeType = courtPensionData.incomeType
	

	
	//States for next/sendo button confirmation
	const personalState = [name , email , birthDate ,sex ,uf ,nationality , naturalness , filiation1 , filiation2]
	const documentState = [rg, issuer, issueDate, ufRG]
	const addressState =[cep, address, number, district, city, ufAddress]
	const addressOptionalState = [addressOptional.cep, addressOptional.address, addressOptional.number, addressOptional.district, addressOptional.city, addressOptional.uf]
	const contactState = [phone1]
	const financialState = [accountType, bank, paymentMethod, accountNumber, accountDigit, agency, agencyDigit]
	const benefitState = [product, susep, proposalNumber, proposalDate, salesStructure, taxationType]
	const paymentState = [bookingValue, durationTime, paymentStartDate, paymentEndDate, benefitType, incomeType, quotaValue]




	//Conditional States
	const socialNameStates = [hasSocialName, [socialName]]
	const deathinformationStates = [hasDeathInformation, [deathDate, deathInfoDate]]
	const differentAdress = [hasDifferentAddress, [...addressOptionalState]]
	const powerOfAttorneyStates = [hasPowerOfAttorney, [powerOfAttorneyName, powerOfAttorneyCPF]]

	

	const handleDownloadPdf = () => {


		const part1 = document.getElementById('part1');

		const doc = new jsPDF({
			orientation: 'p',
			format: 'a4',
			hotfixes: ['printmedia.hotfix.pdf-print-pagecount.js', 'px_scaling'],
			preventModal: true,
			unit: 'px',

		});

		doc.html(part1, {
			callback: function (doc) {
				doc.save('test.pdf');
			},
			html2canvas: {
				width: 720,
			},
			autoPaging: 'slice',
			margin: [10, 0, 10, 0]

		});
	}


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
			default:
				return null
		}
	}

	// const handleClickCancel = () => {
	// 	dispatch(setModalOpen());
	// 	dispatch(setModalType('cancel'));

	// }

	const handleClickSideList = (value) => {
		const element = document.getElementById(value);
		element.scrollIntoView();

		setAtualStep(value);
	}

	const renderSideList = () => {
		if (step === beneficiary) {
			return beneficiaryList.map(item => (
				<S.SideListItem onClick={() => handleClickSideList(item.value)} key={item.value}>
					<S.ListCircle selected={atualStep === item.value} ></S.ListCircle>
					<S.SideListItemText  >{item.name}</S.SideListItemText>
				</S.SideListItem>
			))
		} else if (step === benefit) {
			return benefitList.map(item => (
				<S.SideListItem onClick={() => handleClickSideList(item.value)} key={item.value}>
					<S.ListCircle selected={atualStep === item.value} ></S.ListCircle>
					<S.SideListItemText>{item.name}</S.SideListItemText>
				</S.SideListItem>
			))
		}

	}

	const renderStepNumber = (step) => {
		switch (step) {
			case beneficiary:
				return '1'
			case financial:
				return '2'
			case benefit:
				return '3'
			default:
				return null
		}
	}

	const handleClickClean = () => {
		dispatch(setModalOpen());
		dispatch(setModalType('clean'))
	}

	const handleClickClose = () => {
		dispatch(setModalOpen());
		dispatch(setModalType('cancel'))
	}

	const isBeneficiary = step === beneficiary;
	const isFinancial = step === financial;
	const isBenefit = step === benefit;

	

	const canSend = (states, conditionalStates) => { //CONDITIONAL STATES É UMA CALLBACK
		let sum;


		if (conditionalStates) {
			states.concat(conditionalStates)

			if(conditionalStates === '8a19cb4d-0b0d-4188-b581-a888f5639bc7'){
				return false
			}
		}

		if(!states) {
			return false
		}
		for (let i = 0; i < states.length ; i++ ) {
			if(i === 0){
				sum = Boolean(states[0])
			} 
				sum = sum && Boolean(states[i])
		}
		
		return sum

		
	}


	
	const conditionalStates = (...args) => {  // OBRIGATÓRIO PASSAR ARGS, CADA ARGS DEVE SER UM ARRAY: O [0] É O ESTADO DO CHECKBOX E [1] É UM ARRAY COM OS ESTADOS QUE SÓ APARECEM SE CHECADO
		
		let result = []
		
		for (let  i= 0; i < args.length; i++) {
		
				if(args[i][0]){
					if(canSend(args[i][1])) {
						if (result !== '8a19cb4d-0b0d-4188-b581-a888f5639bc7'){
							result = [...result, ...args[i][1]]
						}
					} 
					
					if(!canSend(args[i][1])) {
						result = '8a19cb4d-0b0d-4188-b581-a888f5639bc7'
					}
				}
			
		}
		return result
	}


	const enableButton = () => {
		switch (step) {
			case beneficiary:
				return true //canSend(personalState, conditionalStates(socialNameStates, deathinformationStates)) && canSend(documentState) && canSend(addressState, conditionalStates(differentAdress)) && canSend(contactState)
			case financial:
				return  true //canSend(financialState, conditionalStates(powerOfAttorneyStates))
			case benefit:
				return canSend(benefitState)
			default:
				return false
		}
	}

	useEffect(() => {
		setAtualStep(step === 'beneficiary' ? beneficiaryList[0].value : benefitList[0].value)
	}, [step])

	return (
		<S.Container>
			<S.Content>
				{step !== finalStep && <S.Header>
					<S.RegistrationFluxBox>
						<S.Circle background={isBeneficiary ? beneficiaryIcon : beneficiaryIconOrange} steps={isBeneficiary} isPastStep={isFinancial || isBenefit} >
						</S.Circle>
						{(step === beneficiary) && <S.StepBox>
							<S.StepNumber>Passo {renderStepNumber(step)}/3</S.StepNumber>
							<S.Step id='benecifiaryStep' steps={isBeneficiary}  >BENEFICIÁRIO</S.Step>
						</S.StepBox>}
						<S.Line />
						<S.Circle background={isFinancial ? financialIcon : isBeneficiary ? financialIconGray : financialIconOrange} steps={isFinancial}  >
						</S.Circle>
						{(isFinancial) && <S.StepBox>
							<S.StepNumber>Passo {renderStepNumber(step)}/3</S.StepNumber>
							<S.Step id='financialStep' steps={isFinancial}  >FINANCEIRO</S.Step>
						</S.StepBox>}
						<S.Line />
						<S.Circle background={isBenefit ? benefitIcon : benefitIconGray} steps={isBenefit} >
						</S.Circle>
						{isBenefit && <S.StepBox>
							<S.StepNumber>Passo {renderStepNumber(step)}/3</S.StepNumber>
							<S.Step steps={isBenefit} >BENEFÍCIO</S.Step>
						</S.StepBox>}
					</S.RegistrationFluxBox>
				</S.Header>}
				<S.MiddleBox isFinal={step === finalStep} >
					<S.FormStepBox>
						<S.UperBox>
							{renderSideList()}
						</S.UperBox>
						{step !== beneficiary && (<BackNextButton back text='Voltar' handleClick={handleClickBack} />)}
					</S.FormStepBox>
					<S.FormBox isFinal={step === finalStep} >
						{(step === beneficiary) && <BeneficiaryForm />}
						{(step === financial) && <FinancialForm />}
						{(step === benefit) && <BenefitForm />}
						{(step === finalStep) && <FinalStep />}
					</S.FormBox>
					<S.NextButtonBox>
						{step === finalStep && <S.DownloadButton onClick={handleDownloadPdf} >
							<img src={downloadIcon} alt='download' />
						</S.DownloadButton>}
						{step !== finalStep && <S.CleanCloseBox>
							<S.CleanButton onClick={handleClickClean}>Limpar todos os campos</S.CleanButton>
							<S.XButton onClick={handleClickClose}>
								<S.XIcon src={closeIcon} alt='botão de fechar' />
							</S.XButton>
						</S.CleanCloseBox>}
						<S.ButtonContainer>
							<BackNextButton
								text={step === finalStep ? 'Finalizar' : 'Próximo'}
								alt={step === finalStep ? 'Finalizar' : 'Próximo'}
								source={right}
								handleClick={handleClickNext}
								width='142px'
								disabled={!enableButton()}
								sent={enableButton()}
							/>
						</S.ButtonContainer>
						{step === finalStep && <S.PdfContainer>
							<PDF />
						</S.PdfContainer>}
					</S.NextButtonBox>
				</S.MiddleBox>
			</S.Content>
		</S.Container>
	)
}

export default Registration