import { createSlice } from '@reduxjs/toolkit';


const beneficiaryState = {
	screen: 'beneficiarios/pendentes',
	filterOpened: false,
	isMounthAndYear: true,
	selectedClient: {},
	step: 'beneficiary',
	accountType:'',
	Bank:'',
	nationality: ''
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
			state.accountType = action.payload
		},
		setBank: (state, action) => {
			state.Bank = action.payload
		},
		setNationality: (state, action) => {
			state.nationality = action.payload
		},
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
	setBank
 } = beneficiarySlice.actions;

const beneficiaryReducer = beneficiarySlice.reducer;

export default beneficiaryReducer

