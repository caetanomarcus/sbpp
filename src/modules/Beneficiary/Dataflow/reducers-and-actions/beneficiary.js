import { createSlice } from '@reduxjs/toolkit';


const beneficiaryState = {
	screen: 'beneficiarios/pendentes',
	filterOpened: false,
	isMounthAndYear: true,
	selectedClient: {},
	step: 'beneficiary',
	beneficiaryData: {
		registration: '',
		cpfOrCnpj: '',
		// Finance
		accountType:'',
		bank:'',
		paymentMethod: '',
		personalData: {
			name: '',
			email: '',
			socialName: '',
			birthDate: '',
			sex: '',
			openGender: '',
			openNaturalness: '',
			openNationality: '',
			deathDate: '',
			deathInfoDate: '',
			filiation1: '',
			filiation2: '',
		},
		document: {
			rg: '',
			issuer: '',
			openUfRG: '',
			issueDate: '',
		},
		addressDefault: {
			cep: '',
			address: '',
			number: '',
			complement: '',
			district: '',
			county: '',
			openUf: '',
		},
		addressOptional: {
			cep: '',
			address: '',
			number: '',
			complement: '',
			referencePoint: '',
			district: '',
			county: '',
			openUf: '',
		},
		phone: {
			phone1: '',
			phone2: '',
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
		setSelectedClient: (state, action) => {
			state.selectedClient = action.payload
		},
		setStep: (state, action) => {
			state.step = action.payload
		},
		setAccountType: (state, action) => {
			state.beneficiaryData.accountType = action.payload
		},
		setBank: (state, action) => {
			state.beneficiaryData.bank = action.payload
		},
		// beneficiary
		setRegistration: (state, action) => {
			state.beneficiaryData.registration = action.payload
		},
		setCpfOrCnpj: (state, action) => {
			state.beneficiaryData.cpfOrCnpj = action.payload
		},
		setPersonalData: {
			setName: (state, action) => {
				state.beneficiaryData.personalData.name = action.payload
			},
			setEmail: (state, action) => {
				state.beneficiaryData.personalData.email = action.payload
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
			setOpenGender: (state, action) => {
				state.beneficiaryData.personalData.openGender = action.payload
			},
			setOpenNaturalness: (state, action) => {
				state.beneficiaryData.personalData.openNaturalness = action.payload
			},
			setOpenNationality: (state, action) => {
				state.beneficiaryData.personalData.openNationality = action.payload
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
		},
		setDocument: {
			setRG: (state, action) => {
				state.beneficiaryData.document.rg = action.payload
			},
			setIssuer: (state, action) => {
				state.beneficiaryData.document.issuer = action.payload
			},
			setOpenUfRG: (state, action) => {
				state.beneficiaryData.document.openUfRG = action.payload
			},
			setIssueDate: (state, action) => {
				state.beneficiaryData.document.issueDate = action.payload
			},
		},
		setAddressDefault: {
			setCep: (state, action) => {
				state.beneficiaryData.addressDefault.cep = action.payload
			},
			setAddress: (state, action) => {
				state.beneficiaryData.addressDefault.address = action.payload
			},
			setNumber: (state, action) => {
				state.beneficiaryData.addressDefault.number = action.payload
			},
			setComplement: (state, action) => {
				state.beneficiaryData.addressDefault.complement = action.payload
			},
			setDistrict: (state, action) => {
				state.beneficiaryData.addressDefault.district = action.payload
			},
			setCounty: (state, action) => {
				state.beneficiaryData.addressDefault.county = action.payload
			},
			setOpenUf: (state, action) => {
				state.beneficiaryData.addressDefault.openUf = action.payload
			},
		},
		setAddressOptional: {
			setCep: (state, action) => {
				state.beneficiaryData.addressOptional.cep = action.payload
			},
			setAddress: (state, action) => {
				state.beneficiaryData.addressOptional.address = action.payload
			},
			setNumber: (state, action) => {
				state.beneficiaryData.addressOptional.number = action.payload
			},
			setComplement: (state, action) => {
				state.beneficiaryData.addressOptional.complement = action.payload
			},
			setReferencePoint: (state, action) => {
				state.beneficiaryData.addressOptional.referencePoint = action.payload
			},
			setDistrict: (state, action) => {
				state.beneficiaryData.addressOptional.district = action.payload
			},
			setCounty: (state, action) => {
				state.beneficiaryData.addressOptional.county = action.payload
			},
			setOpenUf: (state, action) => {
				state.beneficiaryData.addressOptional.openUf = action.payload
			},
		},
		setPhone: {
			setPhone1: (state, action) => {
				state.beneficiaryData.phone.phone1 = action.payload
			},
			setPhone2: (state, action) => {
				state.beneficiaryData.phone.phone2 = action.payload
			},
		}		
	}
})

//Actions
export const { 
	setScreen, 
	setFilterOpened, 
	setSelectedClient, 
	setStep, 
	setAccountType,
	//beneficiary
	setRegistration,
	setCpfOrCnpj,
	setPersonalData,
	setDocument,
	setAddressDefault,
	setAddressOptional,
	setPhone,
 } = beneficiarySlice.actions;

const beneficiaryReducer = beneficiarySlice.reducer;

export default beneficiaryReducer

