import { createSlice } from '@reduxjs/toolkit';


const beneficiaryState = {
	screen: 'beneficiarios/pendentes',
	filterOpened: false,
	isMounthAndYear: true,
	selectedClient: {},
	step: 'beneficiary',
	beneficiaryData: {
		accountType:'',
		Bank:'',
		naturalness: '',
		nationality: '',
		gender: '',
		ufDefault: '',
		ufOptional: '',
		ufRG: ''
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
			state.beneficiaryData.Bank = action.payload
		},
		setNaturalness: (state, action) => {
			state.beneficiaryData.naturalness = action.payload
		},
		setNationality: (state, action) => {
			state.beneficiaryData.nationality = action.payload
		},
		setGender: (state, action) => {
			state.beneficiaryData.gender = action.payload
		},
		setUfDefault: (state, action) => {
			state.beneficiaryData.ufDefault = action.payload
		},
		setUfOptional: (state, action) => {
			state.beneficiaryData.ufOptional = action.payload
		},
		setUfRG: (state, action) => {
			state.beneficiaryData.ufRG = action.payload
		},
	}
})

//Actions
export const { 
	setScreen, 
	setFilterOpened, 
	setSelectedClient, 
	setStep, 
	setNaturalness,
	setNationality,
	setGender,
	setAccountType,
	setBank,
	setUfDefault,
	setUfOptional,
	setUfRG
 } = beneficiarySlice.actions;

const beneficiaryReducer = beneficiarySlice.reducer;

export default beneficiaryReducer

