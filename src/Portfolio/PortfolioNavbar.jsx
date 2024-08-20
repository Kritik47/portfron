import React, { useState } from "react";
import './PortfolioNavbar.css';
import MenuIcon from "@material-ui/icons/Menu"
import ClearIcon from "@material-ui/icons/Clear"
import {Link} from 'react-scroll';
const PortfolioNavbar=()=>{
    const[clicked,setclicked]=useState(false);
    return(<>
    <nav>
        <a href="#Home" className="title">kritik
        <span>sahu</span>
        </a>
        <div className="ICON" onClick={()=>setclicked(!clicked)}>
            {clicked?<ClearIcon/>:<MenuIcon/>}
        </div>
        <ul className={clicked?"NEWUL":""}>
            <li><Link to="Home" smooth={true} offset={-70} duration={500} spy={true} activeClass="active">Home</Link></li>
            <li><Link to="About" smooth={true} offset={-70} duration={500} spy={true} activeClass="active">About</Link></li>
            <li><Link to="Service" smooth={true} offset={-70} duration={500} spy={true} activeClass="active">Service</Link></li>
            <li><Link to="Project" smooth={true} offset={-70} duration={500} spy={true} activeClass="active">Project</Link></li>
            <li><Link to="Contact" smooth={true} offset={-70} duration={500} spy={true} activeClass="active">Contact</Link></li>
        </ul>
    </nav>
    </>)
}
export default PortfolioNavbar;