import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import Skill from "./Skill";
import About from "./About";
const App=()=>{
    return(<>
    <Navbar/>
    <div>
        <Home/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
    </div>
    </>)
}
export default App;