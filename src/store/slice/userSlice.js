import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {publicRequest} from '../../requestMethod'
export const userLogin = createAsyncThunk("user/login",async(user)=>{
        try {     
            const response = await publicRequest.post('/auth/login',user);
            return response.data; 
        } catch (error) {
            
        }
})

const userSlice = createSlice({
    name:"user",
    initialState:{
        isFetching:false, 
        user:null,
        isError:false, 
    },
    reducers:{
        loginStart(state,action){
            state.isFetching = true; 
            state.isError = false
        },
        loginSuccess(state,action){
            state.user = action.payload;
            state.isFetching = false
            state.isError = false
        },
        loginFalure(state,action){
            state.isFetching = false; 
            state.user = null; 
            state.isError = true; 
        },
        logout(state,action){
            localStorage.removeItem('user'); 
            state.user = null; 
            state.isFetching = false; 
            state.isError = false; 
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(userLogin.fulfilled,(state,action)=>{
            state.user = action.payload;
            localStorage.setItem('user',JSON.stringify(action.payload));
            state.isFetching = false 
            state.isError = false
        })
    }
})




export const { loginStart,loginSuccess,loginFalure,logout}  = userSlice.actions; 
export default userSlice.reducer; 