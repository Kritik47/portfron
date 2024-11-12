import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Homepage from "./Homepage";
import Appointment from "./Appointment";
import ContactUs from "./Contact";
import Eligibility from "./Eligibility";
import Services from "./Service";
import Team from "./Team";
import Navbar from "./Navbar";
import GetFreeTreatment from "./GetFreeTreatment";
import TeamPost from "./TeamPost";
const App=()=>{
    return(<>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/eligibility" element={<Eligibility/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/freetreatment" element={<GetFreeTreatment/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/teampost" element={<TeamPost/>}/>
    </Routes>
    </BrowserRouter>
    </>)
}
export default App;