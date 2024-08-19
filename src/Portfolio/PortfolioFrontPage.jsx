import React from "react";
import PortfolioNavbar from "./PortfolioNavbar";
import './PortfolioFrontPage.css';
import PortfolioHome from "./PortfolioHome";
import PortfolioAbout from "./PortfolioAbout";
import PortfolioProject from "./PortfolioProject";
import PortfolioContact from "./PortfolioContact";
import PortfolioService from "./PortfolioService";
const PortfolioFrontPage=()=>{
    return(<>
    <PortfolioNavbar/>
    <section id="Home">
        <PortfolioHome/>
    </section>
    <section id="About">
    <PortfolioAbout/>
    </section>
    <section id="Service">
    <PortfolioService/>
    </section>
    <section id="Project">
    <PortfolioProject/>
    </section>
    <section id="Contact">
    <PortfolioContact/>
    </section>
    </>)
}
export default PortfolioFrontPage;