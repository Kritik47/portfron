import React from "react";
import Aboutcss from './PortfolioAbout.module.css';
import ReactTyped from 'react-typed';
const PortfolioAbout=()=>{
    return(<>
    <div className={Aboutcss.Container}>
        <div className={Aboutcss.IMGCONTAIN}>
        <img src="/image/pink.jpg" className={Aboutcss.AIMGS}/>
        </div>
        <div className={Aboutcss.About}>
            <h4 className={Aboutcss.Aboutme}>About <span className={Aboutcss.SPANABOUT}>Me</span></h4>
            <h4 className={Aboutcss.FRON}>Frontend Devloper!
            </h4>
            <p className={Aboutcss.PARA}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aperiam tempora, necessitatibus incidunt aliquam consectetur dolore.</p>
            <button className={Aboutcss.ABUTTON}>read more</button>
        </div>
    </div>
    </>)
}
export default PortfolioAbout;