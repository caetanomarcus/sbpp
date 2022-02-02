import { createSlice } from '@reduxjs/toolkit';


const beneficiaryState = {
	screen: 'inicio',
	filterOpened: false,
	isMounthAndYear: true,
	selectedClient: {},
	step: 'beneficiary'

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
		}
	}
})

//Actions
export const { setScreen, setFilterOpened, setSelectedClient, setStep } = beneficiarySlice.actions;

const beneficiaryReducer = beneficiarySlice.reducer;

export default beneficiaryReducer

