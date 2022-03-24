import { configureStore, getDefaultMiddleware, } from "@reduxjs/toolkit";
import beneficiaryReducer from "../modules/Beneficiary/Dataflow/reducers-and-actions/";

const middleware= [
    ...getDefaultMiddleware(),
]

const store = configureStore({
    reducer: {
        beneficiary: beneficiaryReducer
    },
    middleware: middleware
})

export const  RootState = store.getState

export default store