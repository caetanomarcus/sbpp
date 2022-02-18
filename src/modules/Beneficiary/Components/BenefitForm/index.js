import React, { useState } from "react";
import * as S from './style'
import { useSelector, useDispatch } from "react-redux";
import { Input, Select } from "../../../../components/Inputs/InputRegistration";
import {
	setSalesStructure,
	setHas13thMonth,
	setDurationTime,
	setPaymentStartDate,
	setPaymentEndDate,
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
	setIncomeType,
	setModality,
	setJudicialOffice,
	setDiscountFactor,
	setPensionStart,
	setPensionEnd,
} from "../../Dataflow/reducers-and-actions/beneficiary";

import arrow from "../../../../assets/icons/gray-arrow.svg";


const BenefitForm = () => {

	//Local State
	const [openAdvance, setOpenAdvance] = useState(false);
	const [openReason, setOpenReason] = useState(false);
	const [openPensionType, setOpenPensionType] = useState(false);
	const [openIncomeType, setOpenIncomeType] = useState(false);
	const [openModality, setOpenModality] = useState(false);

	//Global State and Dispatch
	const benefitData = useSelector(state => state.beneficiary.beneficiaryData.benefitData);
	const paymentData = useSelector(state => state.beneficiary.beneficiaryData.paymentData);
	const agreementData = useSelector(state => state.beneficiary.beneficiaryData.agreementData);
	const conditionsData = useSelector(state => state.beneficiary.beneficiaryData.conditionsData);
	const courtPensionData = useSelector(state => state.beneficiary.beneficiaryData.courtPensionData);

	const handleOpenSelect = (e, setFunction, state) => {
		e.preventDefault();
		setFunction(!state);
	}

	const dispatch = useDispatch();

	return (
		<S.Container>
			<S.Fieldset>
				<S.Legend>Benefício</S.Legend>

				<S.Row width='45%' >
					<Input
						type='text'
						width='100%'
						label="Produto"
						value="201 - Tradicional Individual"
						disabled
						isDisabled
						noPadding
					/>

					<Input
						type='text'
						width='100%'
						label="Processo Susep"
						value="15414.901749/2014-95"

					/>
				</S.Row>

				<S.Row>
					<Input
						type='text'

						label="Número da Proposta"
						value="1829203818301182"
						disabled
						isDisabled
						noPadding
					/>
					{/* <Input 
                    type='text'
                    width='55%'
                    label="Tipo de Benefício (Cobertura)"
                    value="Vitalício"
                    
                /> */}
					<Input
						type='text'

						label="Data da proposta"
						value="01/03/2022"
						disabled
						isDisabled
						noPadding
					/>
					<Input
						type='text'
						label="Estrutura de Vendas"
						placeholder='0000000'
						value={benefitData.salesStructure}
						action={setSalesStructure}

					/>
					<Input
						type='text'

						label="Tipo de Tributação"
						value="Progressivo"
						disabled
						isDisabled
						noPadding
					/>
					<S.Label noLabel row>
						Possui 13º renda?
						<S.Input
							type="checkbox"
							isCheckbox onChange={() => dispatch(setHas13thMonth(!benefitData.has13thMonth))}
							marginLeft='10px'
						/>
					</S.Label>
				</S.Row>
			</S.Fieldset>
			<S.Fieldset>
				<S.Legend>Pagamento</S.Legend>
				<S.Row>
					<Input
						type='text'
						label="Valor de Reserva"
						value="R$5.000,00"
						disabled
						isDisabled
						noPadding
					/>
					<S.Label>
						Tempo de duração
						<S.Row alignItems='center' paddingLeft='3px' >
							<S.Input
								type="text"
								placeholder="000"
								width='50px'
								value={paymentData.durationTime}
								maxLength={3}
								onChange={(e) => dispatch(setDurationTime(e.target.value))}
							/> meses
						</S.Row>
					</S.Label>
					<Input
						type='date'
						label="Início de Pagamento"
						value={paymentData.paymentStartDate}
						action={setPaymentStartDate}
					/>
					<Input
						type='date'
						label="Fim de Pagamento"
						value={paymentData.paymentEndDate}
						action={setPaymentEndDate}

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
						<S.RowBox>
							<S.Label row marginBottom='8px' smallWeight >
								<S.Input type='radio' name='incomeType' value='Renda mensal Temporária' />
								Renda mensal Temporária
							</S.Label>
							<S.RowPrice>R$0,00</S.RowPrice>
						</S.RowBox>
						<S.RowBox>
							<S.Label row marginBottom='8px' smallWeight>
								<S.Input type='radio' name='incomeType' value='Renda mensal por Prazo Certo' />
								Renda mensal por Prazo Certo
							</S.Label>
							<S.RowPrice>R$0,00</S.RowPrice>
						</S.RowBox>
						<S.RowBox>
							<S.Label row marginBottom='8px' smallWeight>
								<S.Input type='radio' name='incomeType' value='Renda mensal Vitalícia' />
								Renda mensal Vitalícia
							</S.Label>
							<S.RowPrice>R$0,00</S.RowPrice>
						</S.RowBox>
						<S.RowBox>
							<S.Label row marginBottom='8px' smallWeight>
								<S.Input type='radio' name='incomeType' value='Renda mensal Vitalícia Reversível ao Beneficiário' />
								Renda mensal Vitalícia Reversível ao Beneficiário
							</S.Label>
							<S.RowPrice>R$0,00</S.RowPrice>
						</S.RowBox>
						<S.RowBox>
							<S.Label row marginBottom='8px' smallWeight>
								<S.Input type='radio' name='incomeType' value='Renda mensal Vitalícia Reversível ao Cônjugue e Menores' />
								Renda mensal Vitalícia Reversível ao Cônjugue e Menores
							</S.Label>
							<S.RowPrice>R$0,00</S.RowPrice>
						</S.RowBox>
						<S.RowBox>
							<S.Label row marginBottom='8px' smallWeight>
								<S.Input type='radio' name='incomeType' value='Renda mensal Vitalícia com Prazo Mínimo Garantido' />
								Renda mensal Vitalícia com Prazo Mínimo Garantido
							</S.Label>
							<S.RowPrice>R$0,00</S.RowPrice>
						</S.RowBox>
					</S.PriceTableBody>
				</S.PriceTableBox>
			</S.Fieldset>
			<S.Fieldset>
				<S.Legend>Convênio</S.Legend>
				<S.Row>
					<Input
						type='text'
						width='20%'
						label="Código Convênio"
						value="1996"
						disabled
						isDisabled
						noPadding
					/>
					<Input
						type='text'
						width='100%'
						label="Nome da Empresa"
						value="Sul América Companhia Nacional de Seguros"
						disabled
						isDisabled
						noPadding
					/>

				</S.Row>
				<S.Row>
					<Input
						type='text'
						width='20%'
						label="Código Filial"
						value="001"
						disabled
						isDisabled
						noPadding
					/>
					<Input
						type='text'
						width='100%'
						label="Nome da Empresa"
						value="Sul América Companhia Nacional de Seguros"
						disabled
						isDisabled
						noPadding
					/>
				</S.Row>
				<S.Row>
					<S.Label row>
						Possui adiantamento?
						<S.Input
							type="checkbox"
							isCheckbox onChange={() => dispatch(setHasAdvance(!agreementData.hasAdvance))}
							marginLeft='10px'
						/>
					</S.Label>
				</S.Row>
				{agreementData.hasAdvance && (
					<S.Row>
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
			<S.Fieldset>
				<S.Legend>Condições</S.Legend>
				<S.Row>
					<S.Label row>
						Possui isenção de IRPF?
						<S.Input type='checkbox' isCheckbox onChange={() => dispatch(setHasIRPFIsention(!conditionsData.IRPF.hasIRPFIsention))} marginLeft='10px' />
					</S.Label>
				</S.Row>
				{conditionsData.IRPF.hasIRPFIsention && (
					<>
						<S.Row>
							<S.Label row> É vitalício?
								<S.Input type='radio' isCheckbox onChange={(e) => dispatch(setIsLifeTime(true))} value={true} name='isLifeTime' marginLeft='8px' /> Sim
								<S.Input type='radio' isCheckbox onChange={(e) => dispatch(setIsLifeTime(false))} value={false} name='isLifeTime' marginLeft='16px' /> Não
							</S.Label>
						</S.Row>
						<S.Row>
							<Input
								label='Prazo de isenção de IRPF'
								value={conditionsData.IRPF.deadline}
								action={setDeadline}
								width='20%'
								type='date'
							/>
						</S.Row>
						<S.Row>
							<Select
								width='20%'
								label='Motivo'
								source={arrow}
								value={conditionsData.IRPF.reason}
								handleClickSelect={(e) => handleOpenSelect(e, setOpenReason, openReason)}
								toogle={setOpenReason}
								state={openReason}
								action={setReason}
								options={['Aposentado', 'Falecido', 'Desemprego', 'Outros']}
							/>
						</S.Row>
						<S.Row alignItems='flex-start' row>
							<Input
								type='text'
								width='10%'
								label="CID"
								value={conditionsData.IRPF.cid}
								action={setCid}
							/>
							<S.Label noLabel  >Descrição
								<S.Row paddingLeft='0'>
									<S.TextArea type='textArea'
										height='60px'
										onChange={(e) => dispatch(setDescription(e.target.value))}
										value={conditionsData.IRPF.description}
										cols='55'
										rows='4'
									/>
								</S.Row>
							</S.Label>
						</S.Row>
					</>
				)}
				<S.Row>
					<S.Label row>
						Incluir Suspensão de Pagamento?
						<S.Input type='checkbox' isCheckbox onChange={() => dispatch(setHasPaymentSuspension(!conditionsData.paymentSuspension.hasPaymentSuspension))} marginLeft='10px' />
					</S.Label>
				</S.Row>
				{conditionsData.paymentSuspension.hasPaymentSuspension && (
					<>
						<S.Row>
							<S.Label > Motivo
								<S.Row paddingLeft='0'>
								<S.Input type='radio' isCheckbox onChange={(e) => dispatch(setPaymentSuspensionReason(e.target.value))} value='Óbito' name='paymentSuspensionReason'  /> Óbito
								<S.Input type='radio' isCheckbox onChange={(e) => dispatch(setPaymentSuspensionReason(e.target.value))} value='Doença' name='paymentSuspensionReason' marginLeft='16px' /> Doença
								<S.Input type='radio' isCheckbox onChange={(e) => dispatch(setPaymentSuspensionReason(e.target.value))} value='Ausência de Prova de Vida' name='paymentSuspensionReason' marginLeft='16px' /> Óbito
								</S.Row>
							</S.Label>
						</S.Row>
						<S.Row alignItems='flex-start' row>
							<Input
								type='text'
								width='10%'
								label="CID"
								value={conditionsData.paymentSuspension.cid}
								action={setPaymentSuspensionCid}
							/>
							<S.Label noLabel  >Descrição
								<S.Row paddingLeft='0'>
									<S.TextArea type='textArea'
										height='60px'
										onChange={(e) => dispatch(setPaymentSuspensionDescription(e.target.value))}
										value={conditionsData.paymentSuspension.description}
										cols='55'
										rows='4'
									/>
								</S.Row>
							</S.Label>
						</S.Row>
					</>
				)}
			</S.Fieldset>
			<S.Fieldset>
				<S.Legend>Pensão Judicial</S.Legend>
				<S.Row>
				<S.Label noLabel row>
						Adicionar dados de Pensão Judicial?
						<S.Input
							type="checkbox"
							isCheckbox onChange={() => dispatch(setHasCourtPension(!courtPensionData.hasCourtPension))}
							marginLeft='10px'
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
							action={setIncomeType}
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
						<S.Row>
							<Input
								width='12%'
								label='Início'
								value={courtPensionData.pensionStart}
								action={setPensionStart}
								type='date'
							/>
							<Input
								width='12%'
								label='Fim'
								value={courtPensionData.pensionEnd}
								action={setPensionEnd}
								type='date'
							/>
						</S.Row>
						</>
					)}
			</S.Fieldset>
		</S.Container>
	)
}

export default BenefitForm