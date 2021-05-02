import React from "react"
import s from "./Main.module.scss"
import styleContainer from "../Common/Styles/StyleContainer.module.css"

let Main = () => {

    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Evgeny Chausov</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    )
}

export default Main;