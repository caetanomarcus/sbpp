import React, { useState, useEffect, useRef} from "react";
import * as S from './style'
import { useSelector, useDispatch } from "react-redux";
import { Input, Select } from "../../../../components/Inputs/InputRegistration";
import {
	setProduct,
	setSusep,
	setProposalNumber,
	setProposalDate,
	setSalesStructure,
	setTaxationType,
	setHas13thMonth,
	setBookingValue,
	setDurationTime,
	setPaymentStartDate,
	setPaymentEndDate,
	setBenefitType,
	setIncomeType,
	setQuotaValue,
	setAgreementCode,
	setCompanyName1,
	setCompanyName2,
	setBranchCode,
	setHasAdvance,
	setAdvanceValue,	
	setHasIRPFIsention,
	setIsLifeTime,
	setDeadline,
	setReason,
	setCid,
	setDescription,
	setHasPaymentSuspension,
	setPaymentSuspensionReason,
	setPaymentSuspensionCid,
	setPaymentSuspensionDescription,
	setHasCourtPension,
	setPrevidencyRegistration,
	setPensionistRegistration,
	setPensionistName,
	setPensionType,
	setPensionIncomeType,
	setModality,
	setJudicialOffice,
	setDiscountFactor,
	setPensionStart,
	setPensionEnd,
} from "../../Dataflow/reducers-and-actions";

import arrow from "../../../../assets/icons/gray-arrow.svg";

//utils
import { handleOpenSelect } from "../../utils";


const BenefitForm = () => {

	//Local State
	const [openAdvance, setOpenAdvance] = useState(false);
	const [openReason, setOpenReason] = useState(false);
	const [openPensionType, setOpenPensionType] = useState(false);
	const [openIncomeType, setOpenIncomeType] = useState(false);
	const [openModality, setOpenModality] = useState(false);

	//refs
	const reasonRef = useRef();

	//Global State and Dispatch
	const benefitData = useSelector(state => state.beneficiary.beneficiaryData.benefitStep.benefitData);
	const paymentData = useSelector(state => state.beneficiary.beneficiaryData.benefitStep.paymentData);
	const agreementData = useSelector(state => state.beneficiary.beneficiaryData.benefitStep.agreementData);
	const conditionsData = useSelector(state => state.beneficiary.beneficiaryData.benefitStep.conditionsData);
	const courtPensionData = useSelector(state => state.beneficiary.beneficiaryData.benefitStep.courtPensionData);

	const canShowBenefitType = ((paymentData.paymentStartDate.length === 10) && (paymentData.paymentEndDate.length === 10)) && Boolean(paymentData.durationTime)

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setProduct("201 - Tradicional Individual"));
		dispatch(setSusep("15414.901749/2014-95"));
		dispatch(setProposalNumber("1829203818301182"));
		dispatch(setProposalDate("01/03/2022"));
		dispatch(setTaxationType("Progressivo"));
		dispatch(setBookingValue("R$ 1.000,00"));
		dispatch(setAgreementCode('1996'));
		dispatch(setCompanyName1("Sul América Companhia Nacional de Seguros"));
		dispatch(setCompanyName2("Sul América Companhia Nacional de Seguros"));
		dispatch(setBranchCode('001'));
	})

	return (
		<S.Container>
			<S.Fieldset id='benefit'>
				<S.Legend>Benefício</S.Legend>

				<S.Row width='45%' >
					<Input
						type='text'
						width='100%'
						label="Produto"
						value={benefitData.product}
						disabled
						noPadding
					/>

					<Input
						type='text'
						width='100%'
						label="Processo Susep"
						value={benefitData.susep}
					/>
				</S.Row>

				<S.Row last>
					<Input
						type='text'

						label="Número da Proposta"
						value={benefitData.proposalNumber}
						disabled
						noPadding
					/>
					<Input
						type='text'

						label="Data da proposta"
						value={benefitData.proposalDate}
						disabled
						noPadding
						marginRight='0'
					/>
					<Input
						type='text'
						label="Estrutura de Vendas"
						placeholder='0000000'
						value={benefitData.salesStructure}
						action={setSalesStructure}
						maxLength={7}
						width='17%'
						widthInput='85%'

					/>
					<Input
						type='text'
						label="Tipo de Tributação"
						value={benefitData.taxationType}
						disabled
						noPadding
						width='15%'
					/>
					<S.Label noLabel row>
						Possui 13º renda?
						<S.Input
							type="checkbox"
							isCheckbox onChange={() => dispatch(setHas13thMonth(!benefitData.has13thMonth))}
							marginLeft='4px'
							width='60px'
							checked={benefitData.has13thMonth}
						/>
					</S.Label>
				</S.Row>
			</S.Fieldset>
			<S.Fieldset id='payment' >
				<S.Legend>Pagamento</S.Legend>
				<S.Row>
					<Input
						type='text'
						label="Valor de Reserva"
						value={paymentData.bookingValue}
						disabled
						noPadding
					/>

					<Input
						type="text"
						placeholder="000"
						label='Tempo de duração'
						value={paymentData.durationTime}
						action={setDurationTime}
						maxLength={3}
						widthInput='30%'
						complement='meses'

					/>

					<Input
						type='text'
						label="Início de Pagamento"
						value={paymentData.paymentStartDate}
						action={setPaymentStartDate}
						placeholder="DD/MM/AAAA"
						id='date'
						mask='99/99/9999'
					/>
					<Input
						type='text'
						label="Fim de Pagamento"
						value={paymentData.paymentEndDate}
						action={setPaymentEndDate}
						placeholder="DD/MM/AAAA"
						id='date'
						mask='99/99/9999'

					/>
				</S.Row>
				<S.PriceTableBox>
					<S.TextBox>
						<S.Title>Tipo de Benefício </S.Title>
						<S.Parentesis>(Cobertura)</S.Parentesis>
					</S.TextBox>
					<S.PriceTableHead>
						<S.HeadText width='70%' >Tipo de Renda</S.HeadText>
						<S.HeadText width='30%'>Valor da parcela</S.HeadText>
						<S.Line />
					</S.PriceTableHead>
					<S.PriceTableBody>
					{canShowBenefitType && (
						<>
						<S.RowBox>
							<S.Label row marginBottom='8px' smallWeight >
								<S.Input type='radio' name='incomeType' value='Renda mensal Temporária' onChange={(e) => dispatch(setIncomeType(e.target.value))} />
								Renda mensal Temporária
							</S.Label>
							<S.RowPrice>R$0,00</S.RowPrice>
						</S.RowBox>
						<S.RowBox>
							<S.Label row marginBottom='8px' smallWeight>
								<S.Input type='radio' name='incomeType' value='Renda mensal por Prazo Certo' onChange={(e) => dispatch(setIncomeType(e.target.value))} />
								Renda mensal por Prazo Certo
							</S.Label>
							<S.RowPrice>R$0,00</S.RowPrice>
						</S.RowBox>
						<S.RowBox>
							<S.Label row marginBottom='8px' smallWeight>
								<S.Input type='radio' name='incomeType' value='Renda mensal Vitalícia' onChange={(e) => dispatch(setIncomeType(e.target.value))} />
								Renda mensal Vitalícia
							</S.Label>
							<S.RowPrice>R$0,00</S.RowPrice>
						</S.RowBox>
						<S.RowBox>
							<S.Label row marginBottom='8px' smallWeight>
								<S.Input type='radio' name='incomeType' value='Renda mensal Vitalícia Reversível ao Beneficiário' onChange={(e) => dispatch(setIncomeType(e.target.value))} />
								Renda mensal Vitalícia Reversível ao Beneficiário
							</S.Label>
							<S.RowPrice>R$0,00</S.RowPrice>
						</S.RowBox>
						<S.RowBox>
							<S.Label row marginBottom='8px' smallWeight>
								<S.Input type='radio' name='incomeType' value='Renda mensal Vitalícia Reversível ao Cônjugue e Menores' onChange={(e) => dispatch(setIncomeType(e.target.value))} />
								Renda mensal Vitalícia Reversível ao Cônjugue e Menores
							</S.Label>
							<S.RowPrice>R$0,00</S.RowPrice>
						</S.RowBox>
						<S.RowBox>
							<S.Label row marginBottom='8px' smallWeight>
								<S.Input type='radio' name='incomeType' value='Renda mensal Vitalícia com Prazo Mínimo Garantido' onChange={(e) => dispatch(setIncomeType(e.target.value))} />
								Renda mensal Vitalícia com Prazo Mínimo Garantido
							</S.Label>
							<S.RowPrice>R$0,00</S.RowPrice>
						</S.RowBox>
						</>
					)}
					</S.PriceTableBody>
				</S.PriceTableBox>
			</S.Fieldset>
			<S.Fieldset id='contract'>
				<S.Legend>Convênio</S.Legend>
				<S.Row>
					<Input
						type='text'
						width='20%'
						label="Código Convênio"
						value={agreementData.agreementCode}
						disabled
						noPadding
					/>
					<Input
						type='text'
						width='100%'
						label="Nome da Empresa"
						value={agreementData.companyName1}
						disabled
						noPadding
					/>

				</S.Row>
				<S.Row>
					<Input
						type='text'
						width='20%'
						label="Código Filial"
						value={agreementData.branchCode}
						disabled
						noPadding
					/>
					<Input
						type='text'
						width='100%'
						label="Nome da Empresa"
						value= {agreementData.companyName2}
						disabled
						noPadding
					/>
				</S.Row>
				<S.Row last={!agreementData.hasAdvance}>
					<S.Label row>
						Possui adiantamento?
						<S.Input
							type="checkbox"
							isCheckbox onChange={() => {
								dispatch(setHasAdvance(!agreementData.hasAdvance))
								dispatch(setAdvanceValue(''))
							}}
							marginLeft='10px'
							checked={agreementData.hasAdvance}
						/>
					</S.Label>
				</S.Row>
				{agreementData.hasAdvance && (
					<S.Row last>
						<Select
							width='20%'
							label='Adiantamento (%)'
							source={arrow}
							value={agreementData.advanceValue}
							handleClickSelect={(e) => handleOpenSelect(e, setOpenAdvance, openAdvance)}
							toogle={setOpenAdvance}
							state={openAdvance}
							action={setAdvanceValue}
							options={['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']}
						/>
					</S.Row>
				)}
			</S.Fieldset>
			<S.Fieldset id='conditions'>
				<S.Legend>Condições</S.Legend>
				<S.Row>
					<S.Label row>
						Possui isenção de IRPF?
						<S.Input type='checkbox' 
						isCheckbox 
						onChange={() => {
							dispatch(setHasIRPFIsention(!conditionsData.IRPF.hasIRPFIsention))
							dispatch(setIsLifeTime(''))
						}} 
						marginLeft='10px' 
						checked={conditionsData.IRPF.hasIRPFIsention}
						/>
					</S.Label>
				</S.Row>
				{conditionsData.IRPF.hasIRPFIsention && (
					<>
						<S.Row>
							<S.Label row> É vitalício?
								<S.Input 
								type='radio' 
								isCheckbox 
								onChange={(e) => dispatch(setIsLifeTime('Sim'))} 
								value={true} 
								name='isLifeTime'
								 marginLeft='8px' 
								 checked={conditionsData.IRPF.isLifeTime === 'Sim'}
								 /> Sim
								<S.Input 
								type='radio' 
								isCheckbox 
								onChange={(e) => dispatch(setIsLifeTime('Não'))} 
								value={false} 
								name='isLifeTime' 
								marginLeft='16px'
								checked={conditionsData.IRPF.isLifeTime === 'Não'}
								/> Não
							</S.Label>
						</S.Row>
						{(conditionsData.IRPF.isLifeTime === 'Não') && (
							<>
								<S.Row>
							<Input
								label='Prazo de isenção de IRPF'
								value={conditionsData.IRPF.deadline}
								action={setDeadline}
								width='20%'
								type='text'
								id='date'
								placeholder="DD/MM/AAAA"
								mask="99/99/9999"
							/>
						</S.Row>
						<S.Row>
							<Select
								width='20%'
								label='Motivo'
								source={arrow}
								value={conditionsData.IRPF.reason}
								handleClickSelect={(e) => handleOpenSelect(e, setOpenReason, openReason, reasonRef)}
								toogle={setOpenReason}
								state={openReason}
								action={setReason}
								options={['Aposentado', 'Falecido', 'Desempregado', 'Doença', 'Outros']}
								element={reasonRef}
							/>
						</S.Row>
						{conditionsData.IRPF.reason === 'Doença' && (
							<S.Row alignItems='flex-start' row>
							<Input
								type='text'
								width='10%'
								label="CID"
								value={conditionsData.IRPF.cid}
								action={setCid}
								placeholder='0.000-0.000'
								id='cid'
								mask="9.999-9.999"
							/>
							<S.Label noLabel  >Descrição
								<S.Row paddingLeft='0' last>
									<S.TextArea type='textArea'
										height='60px'
										onChange={(e) => dispatch(setDescription(e.target.value))}
										value={conditionsData.IRPF.description}
										cols='55'
										rows='4'
										maxLength={120}
									/>
									<S.TextAreaCounter>{conditionsData.IRPF.description.length}/120</S.TextAreaCounter>
								</S.Row>
							</S.Label>
						</S.Row>
						)}
							</>
						)}
					</>
				)}
				<S.Row last={!conditionsData.paymentSuspension.hasPaymentSuspension}>
					<S.Label row>
						Incluir Suspensão de Pagamento?
						<S.Input type='checkbox' 
						isCheckbox 
						onChange={() => dispatch(setHasPaymentSuspension(!conditionsData.paymentSuspension.hasPaymentSuspension))} 
						marginLeft='10px' 
						checked={conditionsData.paymentSuspension.hasPaymentSuspension}
						/>
					</S.Label>
				</S.Row>
				{conditionsData.paymentSuspension.hasPaymentSuspension && (
					<>
						<S.Row>
							<S.LabelForRadio > Motivo
								<S.Row paddingLeft='0' paddingTop='16px' alignItems='center'>
									<S.InsideLabel><S.Input checked={conditionsData.paymentSuspension.reason === 'Óbito'} type='radio' isCheckbox onChange={(e) => dispatch(setPaymentSuspensionReason(e.target.value))} value='Óbito' name='paymentSuspensionReason' /> Óbito</S.InsideLabel>
									<S.InsideLabel><S.Input checked={conditionsData.paymentSuspension.reason === 'Doença'} type='radio' isCheckbox onChange={(e) => dispatch(setPaymentSuspensionReason(e.target.value))} value='Doença' name='paymentSuspensionReason' marginLeft='16px' /> Doença</S.InsideLabel>
									<S.InsideLabel><S.Input checked={conditionsData.paymentSuspension.reason === 'Ausência de Prova de Vida'} type='radio' isCheckbox onChange={(e) => dispatch(setPaymentSuspensionReason(e.target.value))} value='Ausência de Prova de Vida' name='paymentSuspensionReason' marginLeft='16px' /> Ausência de Prova de Vida</S.InsideLabel>
								</S.Row>
							</S.LabelForRadio>
						</S.Row>
					{conditionsData.paymentSuspension.reason === 'Doença' && (
							<S.Row alignItems='flex-start' row last>
							<Input
								type='text'
								width='10%'
								label="CID"
								value={conditionsData.paymentSuspension.cid}
								action={setPaymentSuspensionCid}
								placeholder='0.000-0.000'
								id='cid'
								mask="9.999-9.999"
							/>
							<S.Label noLabel  >Descrição
								<S.Row paddingLeft='0'>
									<S.TextArea type='textArea'
										height='60px'
										onChange={(e) => dispatch(setPaymentSuspensionDescription(e.target.value))}
										value={conditionsData.paymentSuspension.description}
										cols='55'
										rows='4'
										maxLength={120}
									/>
									<S.TextAreaCounter>{conditionsData.paymentSuspension.description.length}/120</S.TextAreaCounter>
								</S.Row>
							</S.Label>
						</S.Row>
					)}
					</>
				)}
			</S.Fieldset>
			<S.Fieldset id='judicial'>
				<S.Legend>Pensão Judicial</S.Legend>
				<S.Row last={!courtPensionData.hasCourtPension}>
					<S.Label noLabel row >
						Adicionar dados de Pensão Judicial?
						<S.Input
							type="checkbox"
							isCheckbox onChange={() => dispatch(setHasCourtPension(!courtPensionData.hasCourtPension))}
							marginLeft='10px'
							checked={courtPensionData.hasCourtPension}
						/>
					</S.Label>
				</S.Row>
				{courtPensionData.hasCourtPension && (
					<>
						<S.Row>
							<Input
								label='Matrícula Previdenciária'
								value={courtPensionData.previdencyRegistration}
								action={setPrevidencyRegistration}
							/>
							<Input
								label='Matrícula do Pensionista'
								value={courtPensionData.pensionistRegistration}
								action={setPensionistRegistration}
							/>
						</S.Row>
						<S.Row >
							<Input
								width='60%'
								label='Nome do Pensionista'
								value={courtPensionData.pensionistName}
								action={setPensionistName}
							/>
						</S.Row>
						<S.Row>
							<Select
								width='20%'
								label='Tipo de Pensão'
								value={courtPensionData.pensionType}
								handleClickSelect={(e) => handleOpenSelect(e, setOpenPensionType, openPensionType)}
								source={arrow}
								toogle={setOpenPensionType}
								action={setPensionType}
								state={openPensionType}
								options={['Morte', 'Doença', 'Teste']}
							/>
							<Select
								width='15%'
								label='Tipo de Renda'
								value={courtPensionData.incomeType}
								handleClickSelect={(e) => handleOpenSelect(e, setOpenIncomeType, openIncomeType)}
								source={arrow}
								toogle={setOpenIncomeType}
								action={setPensionIncomeType}
								state={openIncomeType}
								options={['Renda Fixa', 'Renda Variável']}
							/>
						</S.Row>
						<S.Row>
							<Select
								width='35%'
								label='Modalidade'
								value={courtPensionData.modality}
								handleClickSelect={(e) => handleOpenSelect(e, setOpenModality, openModality)}
								source={arrow}
								toogle={setOpenModality}
								action={setModality}
								state={openModality}
								options={['Por Valor', 'Por Percentual']}
							/>
						</S.Row>
						<S.Row>
							<Input
								width='18%'
								label='Ofício Judicial'
								value={courtPensionData.judicialOrder}
								action={setJudicialOffice}
							/>
							<Input
								width='18%'
								label='Fatores de Desconto (%)'
								value={courtPensionData.discountFactors}
								action={setDiscountFactor}
							/>
						</S.Row>
						<S.Row last>
							<Input
								width='12%'
								label='Início'
								value={courtPensionData.pensionStart}
								action={setPensionStart}
								type='text'
								id='date'
								placeholder="DD/MM/AAAA"
								mask='99/99/9999'
							/>
							<Input
								width='12%'
								label='Fim'
								value={courtPensionData.pensionEnd}
								action={setPensionEnd}
								type='text'
								id='date'
								placeholder="DD/MM/AAAA"
								mask='99/99/9999'
							/>
						</S.Row>
					</>
				)}
			</S.Fieldset>
		</S.Container>
	)
}

export default BenefitForm