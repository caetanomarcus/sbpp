import React, {useState, useEffect} from "react";
import * as S from './style'
import { useSelector, useDispatch } from "react-redux";
import {jsPDF} from 'jspdf';

import { setStep,
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
	const dispatch = useDispatch();
	
	const [atualStep, setAtualStep] = useState( beneficiaryList[0].value);

	const beneficiary = 'beneficiary';
	const financial = 'financial';
	const benefit = 'benefit';
	const finalStep = 'finalStep'

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

	const teste1 = document.getElementById('part1');
	console.log(teste1?.offsetHeight, teste1?.offsetWidth)

	const handleClickSideList = (value) => {
		const element = document.getElementById(value);
		element.scrollIntoView();

		setAtualStep(value);
	}

	const renderSideList = () => {
		if (step === beneficiary) {
			return beneficiaryList.map(item => (
				<S.SideListItem onClick={() => handleClickSideList(item.value)} key={item.value}>
					<S.ListCircle selected={ atualStep === item.value} ></S.ListCircle>
					<S.SideListItemText  >{item.name}</S.SideListItemText>
				</S.SideListItem>
			))
		} else if (step === benefit) {
			return benefitList.map(item => (
				<S.SideListItem onClick={() => handleClickSideList(item.value)} key={item.value}>
					<S.ListCircle selected={ atualStep === item.value} ></S.ListCircle>
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

	// const enableButton = (step) => {
	// 	switch (step) {
	// 		case beneficiary:
	// 			return true
	// 		case financial:
	// 			return true
	// 		case benefit:
	// 			return true
	// 		default:
	// 			return false
	// 	}
	// }

	useEffect(() => {
		setAtualStep(step === 'beneficiary' ? beneficiaryList[0].value : benefitList[0].value)
	}, [step] )

	return (
		<S.Container>
			<S.Content>
			{step !== finalStep && <S.Header>
						<S.RegistrationFluxBox>
							<S.Circle background={isBeneficiary? beneficiaryIcon: beneficiaryIconOrange} steps={isBeneficiary} isPastStep={ isFinancial || isBenefit} >
							</S.Circle>
							{ (step === beneficiary) && <S.StepBox>
									<S.StepNumber>Passo {renderStepNumber(step)}/3</S.StepNumber>
									<S.Step id='benecifiaryStep' steps={isBeneficiary}  >BENEFICIÁRIO</S.Step>
								</S.StepBox>}
							<S.Line  />
							<S.Circle  background={ isFinancial? financialIcon: isBeneficiary? financialIconGray: financialIconOrange} steps={isFinancial}  >
							</S.Circle>
								{ (isFinancial ) && <S.StepBox>
									<S.StepNumber>Passo {renderStepNumber(step)}/3</S.StepNumber>
									<S.Step id='financialStep' steps={isFinancial}  >FINANCEIRO</S.Step>
									</S.StepBox>}
							<S.Line  />
							<S.Circle  background={isBenefit? benefitIcon: benefitIconGray} steps={isBenefit} >
							</S.Circle>
								{isBenefit && <S.StepBox>
									<S.StepNumber>Passo {renderStepNumber(step)}/3</S.StepNumber>
									<S.Step steps={isBenefit} >BENEFÍCIO</S.Step>
								</S.StepBox> }
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