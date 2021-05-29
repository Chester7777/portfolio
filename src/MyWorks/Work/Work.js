import React from "react"
import s from "../Work/Work.module.scss"


let Work = (props) => {

    return (
        <div className={s.work}>
            {/*<meta charset="utf-8"/>*/}
            <a href={props.href}>
            <div className={s.icon} style={props.style}>
                <a href={props.href} className={s.link}>LOOK</a>
            </div>
            <div className={s.workInfo}>
                <h3 className={s.workTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
            </a>
        </div>
    )
}

export default Work;