import {
    createSlice
} from '@reduxjs/toolkit';

const authState = {
    token: '',
    error: '',
    login: '',
    password: '',
    email: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers: {
        loginSucess: (state, action) => {
            state.token = action.payload
        },
        loginFailed: (state, action) => {
            state.error = action.payload
        },
        setLogin: (state, action) => {
            state.login = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setToken: (state) => {
            state.token = '123456'
        }
    }
})

export const {
    loginSucess, 
    loginFailed, 
    setLogin, 
    setPassword, 
    setEmail,
    setToken
} = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer

