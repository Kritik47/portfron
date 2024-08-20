import React from "react";
import Contactcss from './PortfolioContact.module.css'
const PortfolioContact=()=>{
    return(<>
    <div className={Contactcss.FORM}>
        <h4 className={Contactcss.CTITLE}>contact <span className={Contactcss.CSPAN}>
            me!</span></h4>
            <form className={Contactcss.CFORMS}>
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Email Address"/>
                <input type="text" placeholder="Mobile Number"/>
                <textarea placeholder="Send Message.." className={Contactcss.CSEND}/>
                <input type="submit" value="Send Me"className={Contactcss.FSUBMIT}/>
            </form>
    </div>
    </>)
}
export default PortfolioContact;