import React from "react";
import { INC,DEC } from "./Slice";
import {useSelector,useDispatch} from 'react-redux'
const App=()=>{
    const Data=useSelector((data)=>{
        return data.DATA.value;
    })
    const dispatch=useDispatch();
    return(<>
    <h1>value:{Data}</h1>
    <button onClick={()=>dispatch(INC(10))} className="bg-red-300 w-28 h-12">INC+</button>
    <button onClick={()=>dispatch(DEC(10))} className="bg-red-300 w-28 h-12">DEC-</button>
    </>)
}
export default App;