import React from "react"
import s from "./Main.module.scss"
import styleContainer from "../Common/Styles/StyleContainer.module.scss"

let Main = () => {

    return (
        <div id={"main"} className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <h1 className={s.mainName}> Evgeny Chausov</h1>
                    <p className={s.textRun}>
                        <span className={s.primaryColor}>I`am </span>
                        Frontend Developer
                    </p>
                    <div className={s.conteinerContactMe}>
                        <a href="" className={s.contactMe}>Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;