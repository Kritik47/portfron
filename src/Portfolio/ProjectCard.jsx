import React from "react";
import ProjectCardcss from './ProjectCard.module.css'
const ProjectCard=(props)=>{
    return(<>
    <div className={ProjectCardcss.PCARD}>
        <h4 className={ProjectCardcss.PTITLE}>react<span className={ProjectCardcss.PSTITLE}>
        {props.title}</span></h4>
        <a href={`https://${props.links}`} className={ProjectCardcss.PLINK}>{props.webname}</a>
    </div>
    </>)
}
export default ProjectCard;