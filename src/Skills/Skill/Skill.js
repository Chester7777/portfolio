import React from "react"
import s from "./Skill.module.scss"


let Skill = (props) => {

    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <a href={props.href}>
                    <img src="https://img.icons8.com/ios-filled/2x/github.png" alt=""/> {props.icon}
                </a>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>

        </div>
    )
}

export default Skill;