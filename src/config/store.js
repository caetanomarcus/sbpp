import { configureStore, getDefaultMiddleware, } from "@reduxjs/toolkit";
import authReducer from "../modules/Auth/Dataflow/reducers-and-actions/auth";
import beneficiaryReducer from "../modules/Beneficiary/Dataflow/reducers-and-actions/beneficiary";

const middleware= [
    ...getDefaultMiddleware(),
]

const store = configureStore({
    reducer: {
        auth: authReducer,
        beneficiary: beneficiaryReducer
    },
    middleware: middleware
})

export const  RootState = store.getState

export default store