import { createSlice } from '@reduxjs/toolkit';
import {beneficiaryStep} from './beneficiaryStep';
import benefitStep from './benefitStep';
import bankData from './bankData';


const beneficiaryState = {
	screen: 'inicio',
	filterOpened: false,
	isMounthAndYear: true,
	selectedClient: {},
	step: 'beneficiary',
	modalOpen: false,
	modalType: '',
	filter: {
		mounth: 'Jan',
		year: '2020',
		filterType: 'mounth/year',
	},
	searchFilter: {
		type: 0,
		registration: '',
		cpfOrCnpj: '',
		name: '',
		propostNumber: '',
	},
	beneficiaryData: {
		registration: '',
		cpfOrCnpj: '',
		beneficiaryStep: beneficiaryStep,
		bankData: bankData,
		benefitStep: benefitStep,
	}
};

const beneficiarySlice = createSlice({
	name: 'beneficiary',
	initialState: beneficiaryState,
	reducers: {
		setScreen: (state, action) => {
			state.screen = action.payload
		},
		setFilterOpened: (state) => {
			state.filterOpened = !state.filterOpened
		},
		setFilterType: (state) => {
			state.isMounthAndYear = !state.isMounthAndYear
		},
		setFilterMounth: (state, action) => {
			state.filter.mounth = action.payload
		},
		setFilterYear: (state, action) => {
			state.filter.year = action.payload
		},
		setSearchFilterType: (state, action) => {
			state.searchFilter.type = action.payload
		},
		setSearchFilterRegistration: (state, action) => {
			state.searchFilter.registration = action.payload
		},
		setSearchFilterCPFOrCNPJ: (state, action) => {
			state.searchFilter.cpfOrCnpj = action.payload
		},
		setSearchFilterName: (state, action) => {
			state.searchFilter.name = action.payload
		},
		setSearchFilterPropostNumber: (state, action) => {
			state.searchFilter.propostNumber = action.payload
		},
		setSelectedClient: (state, action) => {
			state.selectedClient = action.payload
		},
		setStep: (state, action) => {
			state.step = action.payload
		},
		setModalOpen: (state) => {
			state.modalOpen = true
		},
		setModalClose: (state) => {
			state.modalOpen = false
		},
		setModalType: (state, action) => {
			state.modalType = action.payload
		},
		// beneficiary
		setRegistration: (state, action) => {
			state.beneficiaryData.registration = action.payload
		},
		setCpfOrCnpj: (state, action) => {
			state.beneficiaryData.cpfOrCnpj = action.payload
		},
		//Clears
		setClearAllPersonalData: (state) => {
			state.beneficiaryData.beneficiaryStep = beneficiaryStep
		},
		setClearAllFinancialData: (state) => {
			state.beneficiaryData.bankData = bankData
		},
		setClearAllBenefitData: (state) => {
			state.beneficiaryData.benefitStep = benefitStep
		},
		//
		//setPersonalData
		setName: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.name = action.payload
		},
		setEmail: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.email = action.payload
		},
		setHasSocialName: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.hasSocialName = action.payload
		},
		setSocialName: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.socialName = action.payload
		},
		setBirthDate: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.birthDate = action.payload
		},
		setSex: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.sex = action.payload
		},
		setGender: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.gender = action.payload
		},
		setPersonalDataUf: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.uf = action.payload
		},
		setUfList: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.ufList = action.payload
		},
		setNaturalness: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.naturalness = action.payload
		},
		setNationality: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.nationality = action.payload
		},
		setHasDeathInformation: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.hasDeathInformation = action.payload
		},
		setDeathDate: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.deathDate = action.payload
		},
		setDeathInfoDate: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.deathInfoDate = action.payload
		},
		setFiliation1: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.filiation1 = action.payload
		},
		setFiliation2: (state, action) => {
			state.beneficiaryData.beneficiaryStep.personalData.filiation2 = action.payload
		},
		// setDocument
		setRg: (state, action) => {
			state.beneficiaryData.beneficiaryStep.document.rg = action.payload
		},
		setIssuer: (state, action) => {
			state.beneficiaryData.beneficiaryStep.document.issuer = action.payload
		},
		setUfRg: (state, action) => {
			state.beneficiaryData.beneficiaryStep.document.ufRG = action.payload
		},
		setIssueDate: (state, action) => {
			state.beneficiaryData.beneficiaryStep.document.issueDate = action.payload
		},
		//setAddressDefault	
		setAllAdress:(state, action) => {
			state.beneficiaryData.beneficiaryStep.addressDefault = action.payload
		},
		setCepDefault: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressDefault.cep = action.payload
		},
		setAddressDefault: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressDefault.address = action.payload
		},
		setNumberDefault: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressDefault.number = action.payload
		},
		setComplementDefault: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressDefault.complement = action.payload
		},
		setDistrictDefault: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressDefault.district = action.payload
		},
		setCountyDefault: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressDefault.county = action.payload
		},
		setUfDefault: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressDefault.uf = action.payload
		},
		setAdressType: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressDefault.correspondenceType = action.payload
		},
		setHasDifferentAdress: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressDefault.hasDifferentAddress = action.payload
		},
		//setAddressOptional
		setAllAdressOptional:(state, action) => {
			state.beneficiaryData.beneficiaryStep.addressOptional = action.payload
		},
		setCepOptional: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressOptional.cep = action.payload
		},
		setAddressOptional: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressOptional.address = action.payload
		},
		setNumberOptional: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressOptional.number = action.payload
		},
		setComplementOptional: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressOptional.complement = action.payload
		},
		setReferencePointOptional: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressOptional.referencePoint = action.payload
		},
		setDistrictOptional: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressOptional.district = action.payload
		},
		setCountyOptional: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressOptional.county = action.payload
		},
		setUfOptional: (state, action) => {
			state.beneficiaryData.beneficiaryStep.addressOptional.uf = action.payload
		},
		//setContact
		setPhone1: (state, action) => {
			state.beneficiaryData.beneficiaryStep.contact.phone1 = action.payload
		},
		setPhone2: (state, action) => {
			state.beneficiaryData.beneficiaryStep.contact.phone2 = action.payload
		},
		//bancary data
		setAccountType: (state, action) => {
			state.beneficiaryData.bankData.accountType = action.payload
		},
		setBank: (state, action) => {
			state.beneficiaryData.bankData.bank = action.payload
		},
		setBankList: (state, action) => {
			state.beneficiaryData.bankData.bankList = action.payload
		},
	
		setAgency: (state, action) => {
			state.beneficiaryData.bankData.agency = action.payload
		},
		setAgencyDigit: (state, action) => {
			state.beneficiaryData.bankData.agencyDigit = action.payload
		},
		setAccountNumber: (state, action) => {
			state.beneficiaryData.bankData.accountNumber = action.payload
		},
		setAccountDigit: (state, action) => {
			state.beneficiaryData.bankData.accountDigit = action.payload
		},
		setHasPowerOfAttorney: (state, action) => {
			state.beneficiaryData.bankData.hasPowerOfAttorney = action.payload
		},
		setPowerOfAttorneyName: (state, action) => {
			state.beneficiaryData.bankData.powerOfAttorneyName = action.payload
		},
		setPowerOfAttorneyCpf: (state, action) => {
			state.beneficiaryData.bankData.powerOfAttorneyCPF = action.payload
		},
		//Benefit data
		setPaymentMethod: (state, action) => {
			state.beneficiaryData.bankData.paymentMethod = action.payload
		},
		setProduct: (state, action) => {
			state.beneficiaryData.benefitStep.benefitData.product = action.payload
		},
		setSusep : (state, action) => {
			state.beneficiaryData.benefitStep.benefitData.susep = action.payload
		},
		setProposalNumber: (state, action) => {
			state.beneficiaryData.benefitStep.benefitData.proposalNumber = action.payload
		},
		setProposalDate: (state, action) => {
			state.beneficiaryData.benefitStep.benefitData.proposalDate = action.payload
		},
		setSalesStructure: (state, action) => {
			state.beneficiaryData.benefitStep.benefitData.salesStructure = action.payload
		},
		setTaxationType: (state, action) => {
			state.beneficiaryData.benefitStep.benefitData.taxationType = action.payload
		},

		setHas13thMonth: (state, action) => {
			state.beneficiaryData.benefitStep.benefitData.has13thMonth = action.payload
		},
		//payment data
		setBookingValue: (state, action) => {
			state.beneficiaryData.benefitStep.paymentData.bookingValue = action.payload
		},
		setDurationTime: (state, action) => {
			state.beneficiaryData.benefitStep.paymentData.durationTime = action.payload
		},
		setPaymentStartDate: (state, action) => {
			state.beneficiaryData.benefitStep.paymentData.paymentStartDate = action.payload
		},
		setPaymentEndDate: (state, action) => {
			state.beneficiaryData.benefitStep.paymentData.paymentEndDate = action.payload
		},
		setBenefitType: (state, action) => {
			state.beneficiaryData.benefitStep.paymentData.benefitType = action.payload
		},
		setIncomeType: (state, action) => {
			state.beneficiaryData.benefitStep.paymentData.incomeType = action.payload
		},
		setQuotaValue: (state, action) => {
			state.beneficiaryData.benefitStep.paymentData.quotaValue = action.payload
		},
		//agreement data

		setAgreementCode: (state, action) => {
			state.beneficiaryData.benefitStep.agreementData.agreementCode = action.payload
		},
		setCompanyName1: (state, action) => {
			state.beneficiaryData.benefitStep.agreementData.companyName1 = action.payload
		},
		setCompanyName2: (state, action) => {
			state.beneficiaryData.benefitStep.agreementData.companyName2 = action.payload
		},
		setBranchCode: (state, action) => {
			state.beneficiaryData.benefitStep.agreementData.branchCode = action.payload
		},
		setHasAdvance: (state, action) => {
			state.beneficiaryData.benefitStep.agreementData.hasAdvance = action.payload
		},
		setAdvanceValue: (state, action) => {
			state.beneficiaryData.benefitStep.agreementData.advanceValue = action.payload
		},
		//conditions data

		//IRPF
		setHasIRPFIsention: (state, action) => {
			state.beneficiaryData.benefitStep.conditionsData.IRPF.hasIRPFIsention = action.payload
		},
		setIsLifeTime: (state, action) => {
			state.beneficiaryData.benefitStep.conditionsData.IRPF.isLifeTime = action.payload
		},
		setDeadline: (state, action) => {
			state.beneficiaryData.benefitStep.conditionsData.IRPF.deadline = action.payload
		},
		setReason: (state, action) => {
			state.beneficiaryData.benefitStep.conditionsData.IRPF.reason = action.payload
		},
		setCid: (state, action) => {
			state.beneficiaryData.benefitStep.conditionsData.IRPF.cid = action.payload
		},
		setDescription: (state, action) => {
			state.beneficiaryData.benefitStep.conditionsData.IRPF.description = action.payload
		},

		//payment Suspension
		setHasPaymentSuspension: (state, action) => {
			state.beneficiaryData.benefitStep.conditionsData.paymentSuspension.hasPaymentSuspension = action.payload
		},
		setPaymentSuspensionReason: (state, action) => {
			state.beneficiaryData.benefitStep.conditionsData.paymentSuspension.reason = action.payload
		},
		setPaymentSuspensionCid: (state, action) => {
			state.beneficiaryData.benefitStep.conditionsData.paymentSuspension.cid = action.payload
		},
		setPaymentSuspensionDescription: (state, action) => {
			state.beneficiaryData.benefitStep.conditionsData.paymentSuspension.description = action.payload
		},
		// court pensio data
		setHasCourtPension: (state, action) => {
			state.beneficiaryData.benefitStep.courtPensionData.hasCourtPension = action.payload
		},
		setPrevidencyRegistration: (state, action) => {
			state.beneficiaryData.benefitStep.courtPensionData.previdencyRegistration = action.payload
		},
		setPensionistRegistration: (state, action) => {
			state.beneficiaryData.benefitStep.courtPensionData.pensionistRegistration = action.payload
		},
		setPensionistName: (state, action) => {
			state.beneficiaryData.benefitStep.courtPensionData.pensionistName = action.payload
		},
		setPensionType: (state, action) => {
			state.beneficiaryData.benefitStep.courtPensionData.pensionType = action.payload
		},
		setPensioIncomeType: (state, action) => {
			state.beneficiaryData.benefitStep.courtPensionData.incomeType = action.payload
		},
		setModality: (state, action) => {
			state.beneficiaryData.benefitStep.courtPensionData.modality = action.payload
		},
		setJudicialOffice: (state, action) => {
			state.beneficiaryData.benefitStep.courtPensionData.judicialOffice = action.payload
		},
		setDiscountFactor: (state, action) => {
			state.beneficiaryData.benefitStep.courtPensionData.discountFactor = action.payload
		},
		setPensionStart: (state, action) => {
			state.beneficiaryData.benefitStep.courtPensionData.pensionStart = action.payload
		},
		setPensionEnd: (state, action) => {
			state.beneficiaryData.benefitStep.courtPensionData.pensionEnd = action.payload
		},

		// Universal actions
		setResetStates: () => {
			return beneficiaryState
		},
		// isBenefitialyCreated: (state) => {
		// 	state.benefitialyCreated
		// },

	}
})

//Actions
export const { 
	setResetStates,
	setScreen, 
	setFilterOpened,
	setFilterMounth,
	setFilterYear,
	setFilterType,
	setSearchFilterType,
	setSearchFilterRegistration,
	setSearchFilterName,
	setSearchFilterCPFOrCNPJ,
	setSearchFilterPropostNumber,
	setSelectedClient, 
	setStep, 
	setAccountType,
	setModalOpen,
	setModalClose,
	setModalType,
	//beneficiary
	setRegistration,
	setCpfOrCnpj,
	//Clears
	setClearAllPersonalData,
	setClearAllFinancialData,
	setClearAllBenefitData,
	//
	setName,
	setEmail,
	setSocialName,
	setBirthDate,
	setSex,
	setGender,
	setNaturalness,
	setNationality,
	setPersonalDataUf,
	setUfList,
	setHasDeathInformation,
	setDeathDate,
	setDeathInfoDate,
	setFiliation1,
	setFiliation2,
	setHasSocialName,
	//
	setRg,
	setIssuer,
	setUfRg,
	setIssueDate,
	//
	setAllAdress,
	setCepDefault,
	setAddressDefault,
	setNumberDefault,
	setComplementDefault,
	setDistrictDefault,
	setCountyDefault,
	setUfDefault,
	setAdressType,
	setHasDifferentAdress,
	//
	setAllAdressOptional,
	setCepOptional,
	setAddressOptional,
	setNumberOptional,
	setComplementOptional,
	setReferencePointOptional,
	setDistrictOptional,
	setCountyOptional,
	setUfOptional,
	//
	setPhone1,
	setPhone2,
	//
	setBank,
	setBankList,
	setPaymentMethod,
	setAgency,
	setAgencyDigit,
	setAccountNumber,
	setAccountDigit,
	setHasPowerOfAttorney,
	setPowerOfAttorneyName,
	setPowerOfAttorneyCpf,
	//
	setProduct,
	setSusep,
	setProposalNumber,
	setProposalDate,
	setSalesStructure,
	setTaxationType,
	setHas13thMonth,
	//
	setBookingValue,
	setDurationTime,
	setPaymentStartDate,
	setPaymentEndDate,
	setBenefitType,
	setIncomeType,
	setQuotaValue,
	//
	setAgreementCode,
	setCompanyName1,
	setCompanyName2,
	setBranchCode,
	setHasAdvance,
	setAdvanceValue,
	
	//
	setHasIRPFIsention,
	setIsLifeTime,
	setDeadline,
	setReason,
	setCid,
	setDescription,
	//
	setHasPaymentSuspension,
	setPaymentSuspensionReason,
	setPaymentSuspensionCid,
	setPaymentSuspensionDescription,
	//
	setHasCourtPension,
	setPrevidencyRegistration,
	setPensionistRegistration,
	setPensionistName,
	setPensionType,
	setPensioIncomeType	,
	setModality,
	setJudicialOffice,
	setDiscountFactor,
	setPensionStart,
	setPensionEnd,
 } = beneficiarySlice.actions;

const beneficiaryReducer = beneficiarySlice.reducer;

export default beneficiaryReducer

