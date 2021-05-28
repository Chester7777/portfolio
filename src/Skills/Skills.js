import React from "react"
import s from "./Skills.module.scss"
import styleContainer from "../Common/Styles/StyleContainer.module.scss"
import Skill from "./Skill/Skill";
import TitleMy from "../Common/Components/Title/Title";
import commercial_developer from "../assets/image/icons8-development-skill-90.png";
import htmlIcon from "../assets/image/icons8-html-filetype-100.png";
import js_Ts from "../assets/image/icons8-js-50.png";
import react from "../assets/image/icons8-google-scholar-104.png";
import scss_css from "../assets/image/icons8-css-filetype-100.png";
import axios_api from "../assets/image/icons8-api-100.png";
import git from "../assets/image/icons8-github-90 (1).png";
import design from "../assets/image/icons8-web-design-64.png";
import tests from "../assets/image/icons8-unit-100.png";


let Skills = () => {
    let skillText1 = "actions это константы, описывающие событие. Обычно это просто строка с названием описывающее событие."
    let skillText2 = "actions это константы, описывающие событие. К примеру константа описывающее событие номер один будет выглядеть следующем образом:"
    let skillText3 = "actions это константы,  это просто строка с названием описывающее событие. К примеру константа описывающее событие номер один будет выглядеть следующем образом:."

    return (
        <div id={"skills"} className={s.skillsBlock}>
            <TitleMy text={"Skills"} textMy={"My"}/>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <div className={s.skills}>
                    <Skill style={{minWidth: "2em", width: "70%"}} className={"fa fa-handshake-o"} title={"COMMERCIAL DEVELOPMENT EXPERIENCE"} description={skillText1}
                           icon={commercial_developer} procentProgress={"70%"}/>
                    <Skill style={{minWidth: "2em", width: "85%"}} className={"fa fa-file-code-o"} title={"JAVASCRIPT/TYPESCRIPT"} description={skillText1} icon={js_Ts} procentProgress={"85%"}/>
                    <Skill style={{minWidth: "2em", width: "95%"}} className={"fa fa-joomla"} title={"REACT/REDUX/REDUX TOOLKIT"} description={skillText2} icon={react} procentProgress={"95%"}/>
                    <Skill style={{minWidth: "2em", width: "95%"}} className={"fa fa-html5"} title={"HTML"} description={skillText3} icon={htmlIcon} procentProgress={"95%"}/>
                    <Skill style={{minWidth: "2em", width: "90%"}} className={"fa fa-css3"} title={"CSS/SCSS"} description={skillText3} icon={scss_css} procentProgress={"90%"}/>
                    <Skill style={{minWidth: "2em", width: "90%"}} className={"fa fa-random"} title={"AXIOS/REST API"} description={skillText3} icon={axios_api} procentProgress={"90%"}/>
                    <Skill style={{minWidth: "2em", width: "85%"}} className={"fa fa-github"} title={"GIT/JIRA"} description={skillText3} icon={git} procentProgress={"85%"}/>
                    <Skill style={{minWidth: "2em", width: "95%"}} className={"fa fa-television"} title={"ANT DESIGN/MATERIAL-UI "} description={skillText3} icon={design} procentProgress={"95%"}/>
                    <Skill style={{minWidth: "2em", width: "90%"}} className={"fa fa-cogs"} title={"UNIT TESTS/ STORYBOOK/ SNAPSHOT TESTING"} description={skillText3} icon={tests} procentProgress={"90%"}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;