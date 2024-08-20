import {createSlice} from '@reduxjs/toolkit'
const DataSlice=createSlice({
    name:"DATASLICE",
    initialState:{
        value:0
    },
    reducers:{
        INC:(state,action)=>{
            state.value=state.value+1;
        },
        DEC:(state,action)=>{
            state.value=state.value-1;
        }
    }
})
export const{INC,DEC}=DataSlice.actions;
export default DataSlice.reducer;