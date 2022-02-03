import { createSlice } from '@reduxjs/toolkit';


const beneficiaryState = {
	screen: 'beneficiarios/pendentes',
	filterOpened: false,
	isMounthAndYear: true,
	selectedClient: {},
	step: 'beneficiary',
	beneficiaryData: {
		accountType:'',
		bank:'',
		nationality: '',
		paymentMethod: ''
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
		setNationality: (state, action) => {
			state.beneficiaryData.nationality = action.payload
		},
		setPaymentMethod: (state, action) => {
			state.beneficiaryData.paymentMethod = action.payload
		}
	}
})

//Actions
export const { 
	setScreen, 
	setFilterOpened, 
	setSelectedClient, 
	setStep, 
	setNationality,
	setAccountType,
	setBank,
	setPaymentMethod
 } = beneficiarySlice.actions;

const beneficiaryReducer = beneficiarySlice.reducer;

export default beneficiaryReducer

