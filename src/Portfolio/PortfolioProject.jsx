import React from "react";
import Projectcss from'./PortfolioProject.module.css';
import ProjectCard from "./ProjectCard";
const Prodata=[{title:"typescript",links:"lovebonding.netlify.com",webname:"lovebonding"},
{title:"js",links:"munda-foodplaza.netlify.com",webname:"munda-food"}]
const PortfolioProject=()=>{
    return(<>
    <div className={Projectcss.PRO}>
        <h4 className={Projectcss.PROTITLE}>my <span className={Projectcss.PROSPAN}>
        projects</span></h4>
        <div className={Projectcss.PROFLEX}>
        {Prodata.map((i)=>{
            return(<>
            <ProjectCard
            title={i.title}
            links={i.links}
            webname={i.webname}
            />
            </>)
        })}
        </div>
    </div>
    </>)
}
export default PortfolioProject;