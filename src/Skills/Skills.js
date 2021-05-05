import React from "react"
import s from "./Skills.module.scss"
import styleContainer from "../Common/Styles/StyleContainer.module.scss"
import Skill from "./Skill/Skill";
import TitleMy from "../Common/Components/Title/Title";

let Skills = () => {
let skillText1 = "actions это константы, описывающие событие. Обычно это просто строка с названием описывающее событие."
let skillText2 = "actions это константы, описывающие событие. К примеру константа описывающее событие номер один будет выглядеть следующем образом:"
let skillText3 = "actions это константы, описывающие событие. Обычно это просто строка с названием описывающее событие. К примеру константа описывающее событие номер один будет выглядеть следующем образом:."
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <TitleMy text={"Skills"} textMy={"My"}/>
                <div className={s.skills}>
                    <Skill title={"TS"} description={skillText1}/>
                    <Skill title={"CSS"} description={skillText2}/>
                    <Skill title={"React"} description={skillText3}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;