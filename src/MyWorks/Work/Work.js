import React from "react"
import s from "../Work/Work.module.css"


let Work = (props) => {

    return (
        <div className={s.work}>
            <div className={s.icon}>
                <img src="https://vuzopedia.ru/storage/app/uploads/public/5b3/8b0/bf6/5b38b0bf60a2f780799494.jpg"
                     alt="image work"/>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>

        </div>
    )
}

export default Work;