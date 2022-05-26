import {configureStore} from '@reduxjs/toolkit'; 
import productSlice from './slice/productSlice';
import cartSlice from './slice/cartSlice';
import userSlice from './slice/userSlice';
import addressSlice from './slice/addressSlice';
export const store = configureStore({
    reducer:{
        product:productSlice,
        cart:cartSlice,
        user:userSlice,
        address:addressSlice
    }
})