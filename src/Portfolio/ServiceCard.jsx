import React from "react"
import ServiceCardcss from './ServiceCard.module.css';
const ServiceCard=(props)=>{
    return(<>
    <div className={ServiceCardcss.SCARD}>
        
        <h4 className={ServiceCardcss.TITLE}>{props.title}</h4>
        <p className={ServiceCardcss.CARDPARA}>{props.para}</p>
        <button className={ServiceCardcss.SBUTTON}>Read More</button>
    </div>
    </>)
}
export default ServiceCard;