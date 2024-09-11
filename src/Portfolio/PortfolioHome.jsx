import React from "react";
import Homecss from './PortfolioHome.module.css';
import ReactTyped from 'react-typed';
const PortfolioHome=()=>{
    return(<>
    <div className={Homecss.Home}>
        <div className={Homecss.IMGBOX}>
            <img src="/image/pink.jpg" className={Homecss.IMGS}/>
        </div>
        <h4 className={Homecss.ME}>It's <span className={Homecss.MESPAN}>Kritik</span></h4>
        <h4 className={Homecss.WEB}>I'm a {""}
        <span className={Homecss.WEBSPAN}>
        <ReactTyped
            strings={["Web Developer"]}
            typeSpeed={90}
            backSpeed={90}
            loop
            cursorChar="|"
            showCursor={true}
            /></span>
        </h4>
        <p className={Homecss.PARA}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, porro quod hic illo repudiandae, corrupti incidunt nisi animi quidem magnam,</p>
        <button className={Homecss.BUTTON}>Download CV</button>
    </div>
    </>)
}
export default PortfolioHome;