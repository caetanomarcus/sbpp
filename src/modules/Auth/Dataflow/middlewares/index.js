import { createAsyncThunk } from "@reduxjs/toolkit"

export const handleAuth = createAsyncThunk('auth/getAuth', () => {
    return 
        //se quiser passar um endpoint quando chamar a action, preciso passar um arg para a funlção aqui criada
    // aqui faço a requisição para a api, para poder autenticar o usuário e conseguir o token para o login
})