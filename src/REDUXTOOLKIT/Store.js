import {configureStore} from '@reduxjs/toolkit';
import DataSlice from './Slice';
const DataStore=configureStore({
    reducer:{
       DATA:DataSlice 
    }
})
export default DataStore;