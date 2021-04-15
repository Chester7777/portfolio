import React from "react"
import styleContainer from "../Common/Styles/StyleContainer.module.css";
import s from "./MyWorks.module.css"
import Work from "./Work/Work";
import TitleMy from "../Common/Components/Title/Title";

let MyWorks = (props) => {
    let skillText1 = "actions это константы, описывающие событие. Обычно это просто строка с названием описывающее событие."
    let skillText2 = "actions это константы, описывающие событие. К примеру константа описывающее событие номер один будет выглядеть следующем образом:"


    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <TitleMy text={" Experience"} textMy={"My"}/>
                <div className={s.works}>
                    <Work title={"TODOLIST"} description={skillText1}/>
                    <Work title={"SOCIAL NETWORK"} description={skillText2}/>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;