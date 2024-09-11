import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter as SahuRouter, Routes, Route} from 'react-router-dom'
import Addcarts from "./Addcarts";
import Addnew from "./Addnew";
import Groccery from "./Groccery";
import Fancy from "./Fancy";
import Success from "./Success";
import Mobile from "./Mobile";
import Laptop from "./Laptop";
import All from "./All";
import ProductUpdate from "./ProductUpdate";
const App=()=>{
    return(<>
    <SahuRouter>
        <Navbar/>
        <Routes>
            <Route path="/" Component={()=><Groccery/>}/>
            <Route path="/addcarts" Component={()=><Addcarts/>}/>
            <Route path="/addnew" Component={()=><Addnew/>}/>
            <Route path="/fancy" Component={()=><Fancy/>}/>
            <Route path="/success" Component={()=><Success/>}/>
            <Route path="/mobile" Component={()=><Mobile/>}/>
            <Route path="/laptop" Component={()=><Laptop/>}/>
            <Route path="/all" Component={()=><All/>}/>
            <Route path="/update/:id" Component={()=><ProductUpdate/>}/>
        </Routes>
    </SahuRouter>
    </>)
}
export default App;