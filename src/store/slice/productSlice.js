import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {publicRequest} from '../../requestMethod';
export const fetchProducts = createAsyncThunk('products/fetchProducts',async()=>{
     const response = await publicRequest.get('/product'); 
     return response.data; 
})


export const fetchSingleProduct = createAsyncThunk('products/fetchSingleProducts', async (productId)=>{
    const response = await publicRequest.get(`/product/${productId}`)
    return response.data;
})
const productSlice = createSlice({
    name:'products',
    initialState:{
        isFetching:false,
        listProducts:[], 
        singleProducts:{},
        listProductsClone:[]
    },
    reducers:{
        filterProduct(state,action){
            state.listProducts = state.listProductsClone; 
            const products = [...state.listProducts]; 
           if(action.payload.type === "color"){
                state.listProducts = products.filter(item=>{
                    return item.color.includes(action.payload.value);                  
                }); 
           }else{
               if (action.payload.value === "expensive"){
                    state.listProducts = products.sort((a,b)=>{
                        return b.price - a.price; 
                    })
               }else{
                   state.listProducts = products.sort((a, b) => {
                       return  a.price - b.price;
                   }) 
               }
           }

           if(action.payload.type === "color" && action.payload.value === "MyColor"){
                state.listProducts = products; 
           }

        }
    }, 
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.listProducts = [];
            state.listProductsClone = []; 
            state.listProducts.push(...action.payload);
            state.listProductsClone.push(...action.payload)
        })
        builder.addCase(fetchSingleProduct.pending,(state,action)=>{
            state.isFetching = true;
        })
        builder.addCase(fetchSingleProduct.fulfilled,(state,action)=>{
            state.singleProducts = {...action.payload};
            state.isFetching = false; 
        })
    }
})


export const {filterProduct} = productSlice.actions; 
export default productSlice.reducer; 