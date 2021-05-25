import React from "react"
import s from "./Skill.module.scss"


let Skill = (props) => {

    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <div className={s.svgIcon}>
                    <a href={props.href}>
                        {/*<img src={props.icon} alt=""/>*/}
                        <i id={s.iconStile} className={props.className} aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <div className={s.progress}>
                <div className={s.progress_bar_info} role="progressbar" aria-valuenow="95" aria-valuemin="0"
                     aria-valuemax="100">
                    <span className={s.span_progress}>{props.procentProgress}</span>
                </div>
            </div>

            {/*<div   aria-valuenow="85"*/}
            {/*     style="min-width: 2em; width: 85%;">*/}
            {/*    <span>85%</span>*/}
            {/*</div>*/}
            <span className={s.description}>{props.description}</span>

        </div>
    )
}

export default Skill;