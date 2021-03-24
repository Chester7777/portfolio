import React from "react"
import s from "../Work/Work.module.css"


let Work = (props) => {

    return (
        <div className={s.work}>
            <div className={s.icon}>
                <a href="" className={s.link}>LOOK</a>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>

        </div>
    )
}

export default Work;