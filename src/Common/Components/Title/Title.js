import React from "react"
import s from "./Title.module.css"

let TitleMy = (props) => {

    return (
        <div className={s.title}>
            <h2>
                <span className={s.primaryColor}>{props.textMy}</span>
                {props.text}
            </h2>
        </div>
    )
}

export default TitleMy;

