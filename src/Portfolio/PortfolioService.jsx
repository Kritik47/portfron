import React from "react";
import Servicecss from './PortfolioService.module.css';
import ServiceCard from "./ServiceCard";
import ServiceData from "./ServiceData";
const PortfolioService=()=>{
    return(<>
    <div className={Servicecss.SMAIN}>
        <h4 className={Servicecss.SERVICES}>My <span className={Servicecss.SERVICESSPAN}>srevices</span></h4>
        <div className={Servicecss.SFLEX}>
        {ServiceData.map((i)=>{
            return(<>
            <ServiceCard
            title={i.title}
            para={i.para}
            />
            </>)
        })}
        </div>
    </div>
    </>)
}
export default PortfolioService;