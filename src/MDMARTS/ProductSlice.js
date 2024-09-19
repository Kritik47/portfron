import {createSlice} from '@reduxjs/toolkit'
const ProductSlice=createSlice({
    name:"PRODUCT",
    initialState:{
        product:[]
    },
    reducers:{
        addcarts:(state,action)=>{
            const Index=state.product.findIndex((item)=>item._id===action.payload._id)
            if(Index>=0){
                state.product[Index].qnty+=1;
            }else{
                const Temp={...action.payload,qnty:1}
                state.product.push(Temp);
            }
        }
        ,
         removecarts:(state,action)=>{
            state.product=state.product.filter((item)=>item._id!==action.payload._id)
         },
         clearcarts:(state,action)=>{
            state.product=[]
         },
         removesingle:(state,action)=>{
            const Index=state.product.findIndex((item)=>item._id===action.payload._id)
            if(state.product[Index].qnty>=1){
                state.product[Index].qnty-=1;
            }
         }
    }
})
export const {addcarts,removecarts,clearcarts,removesingle}=ProductSlice.actions;
export default ProductSlice.reducer;