import React from "react"
import s from "../Work/Work.module.css"


let Work = (props) => {

    return (
        <div className={s.work}>
            <div className={s.icon} style={props.style}>
                <a href="" className={s.link}>LOOK</a>
            </div>
            <div className={s.workInfo}>
                <h3 className={s.workTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default Work;