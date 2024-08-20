import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
const ProductStore=configureStore({
    reducer:{
        allpro:ProductSlice
    }
})
export default ProductStore;