import { createSlice } from '@reduxjs/toolkit';


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
		personalData: {
			registration:'',
			identification: '',
			name: '',
			email: '',
			hasSocialName: false,
			socialName: '',
			birthDate: '',
			sex: '',
			gender: '',
			naturalness: '',
			nationality: 'Brasil',
			hasDeathInformation: false,
			deathDate: '',
			deathInfoDate: '',
			filiation1: '',
			filiation2: '',
		},
		document: {
			rg: '',
			issuer: '',
			uf: '',
			issueDate: '',
		},
		addressDefault: {
			cep: '',
			address: '',
			number: '',
			complement: '',
			district: '',
			city:'',
			uf: '',
			hasMailAddress: false,
			correspondenceType: '',
			hasDifferentAddress: false,
		},
		addressOptional: {
			cep: '',
			address: '',
			number: '',
			complement: '',
			referencePoint: '',
			district: '',
			city: '',
			uf: '',
		},
		contact: {
			phone1: '',
			phone2: '',
		},
		bankData: {
			national: true,
			accountType: '',
			bank: '',
			paymentMethod: '',
			accountNumber: '',
			accountDigit: '',
			agency: '',
			agencyDigit: '',
			hasPowerOfAttorney: false,
			powerOfAttorneyName: '',
			powerOfAttorneyCPF: '',
		},
		benefitData: {
			product: '',
			susep: '',
			proposalNumber: '',
			proposalData: '',
			salesStructure: '',
			taxationType: '',
			has13thMonth: false,
		},
		paymentData: {
			bookingValue: '',
			durationTime: '',
			paymentStartDate: '',
			paymentEndDate: '',
			benefitType: '',
			incomeType: '',
		},
		agreementData: {
			hasAdvance: false,
			advanceValue: '',
		},
		conditionsData: {
			IRPF: {
			hasIRPFIsention: false,
			isLifeTime: false,
			deadline: '',
			reason: '',
			cid: '',
			description: '',
			},
			paymentSuspension: {
				hasPaymentSuspension: false,
				reason: '',
				cid: '',
				description: '',
			}
		},
		courtPensionData: {
			hasCourtPension: false,
			previdencyRegistration: '',
			pensionistRegistration: '',
			pensionistName: '',
			pensionType: '',
			incomeType: '',
			modality: '',
			judicialOffice: '',
			discountFactor: '',
			pensionStart: '',
			pensionEnd: '',


		}
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
		//setPersonalData
		setName: (state, action) => {
			state.beneficiaryData.personalData.name = action.payload
		},
		setEmail: (state, action) => {
			state.beneficiaryData.personalData.email = action.payload
		},
		setHasSocialName: (state, action) => {
			state.beneficiaryData.personalData.hasSocialName = action.payload
		},
		setSocialName: (state, action) => {
			state.beneficiaryData.personalData.socialName = action.payload
		},
		setBirthDate: (state, action) => {
			state.beneficiaryData.personalData.birthDate = action.payload
		},
		setSex: (state, action) => {
			state.beneficiaryData.personalData.sex = action.payload
		},
		setGender: (state, action) => {
			state.beneficiaryData.personalData.gender = action.payload
		},
		setNaturalness: (state, action) => {
			state.beneficiaryData.personalData.naturalness = action.payload
		},
		setNationality: (state, action) => {
			state.beneficiaryData.personalData.nationality = action.payload
		},
		setHasDeathInformation: (state, action) => {
			state.beneficiaryData.personalData.hasDeathInformation = action.payload
		},
		setDeathDate: (state, action) => {
			state.beneficiaryData.personalData.deathDate = action.payload
		},
		setDeathInfoDate: (state, action) => {
			state.beneficiaryData.personalData.deathInfoDate = action.payload
		},
		setFiliation1: (state, action) => {
			state.beneficiaryData.personalData.filiation1 = action.payload
		},
		setFiliation2: (state, action) => {
			state.beneficiaryData.personalData.filiation2 = action.payload
		},
		// setDocument
		setRg: (state, action) => {
			state.beneficiaryData.document.rg = action.payload
		},
		setIssuer: (state, action) => {
			state.beneficiaryData.document.issuer = action.payload
		},
		setUfRg: (state, action) => {
			state.beneficiaryData.document.ufRG = action.payload
		},
		setIssueDate: (state, action) => {
			state.beneficiaryData.document.issueDate = action.payload
		},
		//setAddressDefault	
		setAllAdress:(state, action) => {
			state.beneficiaryData.addressDefault = action.payload
		},
		setCepDefault: (state, action) => {
			state.beneficiaryData.addressDefault.cep = action.payload
		},
		setAddressDefault: (state, action) => {
			state.beneficiaryData.addressDefault.address = action.payload
		},
		setNumberDefault: (state, action) => {
			state.beneficiaryData.addressDefault.number = action.payload
		},
		setComplementDefault: (state, action) => {
			state.beneficiaryData.addressDefault.complement = action.payload
		},
		setDistrictDefault: (state, action) => {
			state.beneficiaryData.addressDefault.district = action.payload
		},
		setCountyDefault: (state, action) => {
			state.beneficiaryData.addressDefault.county = action.payload
		},
		setUfDefault: (state, action) => {
			state.beneficiaryData.addressDefault.uf = action.payload
		},
		setHasMailAdress: (state, action) => {
			state.beneficiaryData.addressDefault.hasMailAddress = action.payload
		},
		setAdressType: (state, action) => {
			state.beneficiaryData.addressDefault.correspondenceType = action.payload
		},
		setHasDifferentAdress: (state, action) => {
			state.beneficiaryData.addressDefault.hasDifferentAddress = action.payload
		},
		//setAddressOptional
		setAllAdressOptional:(state, action) => {
			state.beneficiaryData.addressOptional = action.payload
		},
		setCepOptional: (state, action) => {
			state.beneficiaryData.addressOptional.cep = action.payload
		},
		setAddressOptional: (state, action) => {
			state.beneficiaryData.addressOptional.address = action.payload
		},
		setNumberOptional: (state, action) => {
			state.beneficiaryData.addressOptional.number = action.payload
		},
		setComplementOptional: (state, action) => {
			state.beneficiaryData.addressOptional.complement = action.payload
		},
		setReferencePointOptional: (state, action) => {
			state.beneficiaryData.addressOptional.referencePoint = action.payload
		},
		setDistrictOptional: (state, action) => {
			state.beneficiaryData.addressOptional.district = action.payload
		},
		setCountyOptional: (state, action) => {
			state.beneficiaryData.addressOptional.county = action.payload
		},
		setUfOptional: (state, action) => {
			state.beneficiaryData.addressOptional.uf = action.payload
		},
		//setContact
		setPhone1: (state, action) => {
			state.beneficiaryData.contact.phone1 = action.payload
		},
		setPhone2: (state, action) => {
			state.beneficiaryData.contact.phone2 = action.payload
		},
		//bancary data
		setAccountType: (state, action) => {
			state.beneficiaryData.bankData.accountType = action.payload
		},
		setBank: (state, action) => {
			state.beneficiaryData.bankData.bank = action.payload
		},
	
		setAgency: (state, action) => {
			state.beneficiaryData.bankData.agencyNumber = action.payload
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
		setSalesStructure: (state, action) => {
			state.beneficiaryData.benefitData.salesStructure = action.payload
		},
		setHas13thMonth: (state, action) => {
			state.beneficiaryData.benefitData.has13thMonth = action.payload
		},
		//payment data
		setDurationTime: (state, action) => {
			state.beneficiaryData.paymentData.durationTime = action.payload
		},
		setPaymentStartDate: (state, action) => {
			state.beneficiaryData.paymentData.paymentStartDate = action.payload
		},
		setPaymentEndDate: (state, action) => {
			state.beneficiaryData.paymentData.paymentEndDate = action.payload
		},
		setIncomeType: (state, action) => {
			state.beneficiaryData.paymentData.incomeType = action.payload
		},
		//agreement data
		setHasAdvance: (state, action) => {
			state.beneficiaryData.agreementData.hasAdvance = action.payload
		},
		setAdvanceValue: (state, action) => {
			state.beneficiaryData.agreementData.advanceValue = action.payload
		},
		//conditions data

		//IRPF
		setHasIRPFIsention: (state, action) => {
			state.beneficiaryData.conditionsData.IRPF.hasIRPFIsention = action.payload
		},
		setIsLifeTime: (state, action) => {
			state.beneficiaryData.conditionsData.IRPF.isLifeTime = action.payload
		},
		setDeadline: (state, action) => {
			state.beneficiaryData.conditionsData.IRPF.deadline = action.payload
		},
		setReason: (state, action) => {
			state.beneficiaryData.conditionsData.IRPF.reason = action.payload
		},
		setCid: (state, action) => {
			state.beneficiaryData.conditionsData.IRPF.cid = action.payload
		},
		setDescription: (state, action) => {
			state.beneficiaryData.conditionsData.IRPF.description = action.payload
		},

		//payment Suspension
		setHasPaymentSuspension: (state, action) => {
			state.beneficiaryData.conditionsData.paymentSuspension.hasPaymentSuspension = action.payload
		},
		setPaymentSuspensionReason: (state, action) => {
			state.beneficiaryData.conditionsData.paymentSuspension.reason = action.payload
		},
		setPaymentSuspensionCid: (state, action) => {
			state.beneficiaryData.conditionsData.paymentSuspension.cid = action.payload
		},
		setPaymentSuspensionDescription: (state, action) => {
			state.beneficiaryData.conditionsData.paymentSuspension.description = action.payload
		},
		// court pensio data
		setHasCourtPension: (state, action) => {
			state.beneficiaryData.courtPensionData.hasCourtPension = action.payload
		},
		setPrevidencyRegistration: (state, action) => {
			state.beneficiaryData.courtPensionData.previdencyRegistration = action.payload
		},
		setPensionistRegistration: (state, action) => {
			state.beneficiaryData.courtPensionData.pensionistRegistration = action.payload
		},
		setPensionistName: (state, action) => {
			state.beneficiaryData.courtPensionData.pensionistName = action.payload
		},
		setPensionType: (state, action) => {
			state.beneficiaryData.courtPensionData.pensionType = action.payload
		},
		setPensioIncomeType: (state, action) => {
			state.beneficiaryData.courtPensionData.incomeType = action.payload
		},
		setModality: (state, action) => {
			state.beneficiaryData.courtPensionData.modality = action.payload
		},
		setJudicialOffice: (state, action) => {
			state.beneficiaryData.courtPensionData.judicialOffice = action.payload
		},
		setDiscountFactor: (state, action) => {
			state.beneficiaryData.courtPensionData.discountFactor = action.payload
		},
		setPensionStart: (state, action) => {
			state.beneficiaryData.courtPensionData.pensionStart = action.payload
		},
		setPensionEnd: (state, action) => {
			state.beneficiaryData.courtPensionData.pensionEnd = action.payload
		},

		// Universal actions
		setResetStates: () => {
			return beneficiaryState
		},

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
	//
	setName,
	setEmail,
	setSocialName,
	setBirthDate,
	setSex,
	setGender,
	setNaturalness,
	setNationality,
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
	setHasMailAdress,
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
	setPaymentMethod,
	setAgency,
	setAgencyDigit,
	setAccountNumber,
	setAccountDigit,
	setHasPowerOfAttorney,
	setPowerOfAttorneyName,
	setPowerOfAttorneyCpf,
	//
	setSalesStructure,
	setHas13thMonth,
	//
	setDurationTime,
	setPaymentStartDate,
	setPaymentEndDate,
	setIncomeType,
	//
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

