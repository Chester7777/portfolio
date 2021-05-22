import React from "react"
import s from "./Skill.module.scss"


let Skill = (props) => {

    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <div className={s.svgIcon}>
                    <a href={props.href}>
                        <img src={props.icon} alt=""/>
                    </a>
                </div>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>

        </div>
    )
}

export default Skill;