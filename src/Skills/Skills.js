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
    let REACT = "JavaScript library for building user interfaces or UI components."
    let TYPESCRIPT = "Strict syntactical superset of JavaScript and adds optional static typing to the language."
    let MATERIAL = "One of the most popular react component libraries."
    let STORYBOOK = "Tools for UI development."
    let EXPERIENCE = "Passion for building new products and working in a rapidly changing market."
    let HTML = "HTML (Hypertext Markup Language, Hypertext Markup Language) is a layout system that determines how and what elements should be laid out on a web page."
    let CSS = "I choose SCSS because it is easier for colleagues who are not yet familiar with the project to perceive. It should also be noted that regular CSS code fits well with the SCSS syntax."
    let AXIOS = "Many web projects require interaction with the REST API at some stage in their development. Axios is promise-based, which gives us the ability to leverage JavaScript's async and await capabilities."
    let GIT = "Git is a powerful and complex distributed version control system."

    return (
        <div id={"skills"} className={s.skillsBlock}>
            <TitleMy text={"Skills"} textMy={"My"}/>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <div className={s.skills}>
                    <Skill style={{minWidth: "2em", width: "70%"}} className={"fa fa-handshake-o"}
                           title={"COMMERCIAL DEVELOPMENT EXPERIENCE"} description={EXPERIENCE}
                           icon={commercial_developer} procentProgress={"70%"}/>
                    <Skill style={{minWidth: "2em", width: "85%"}} className={"fa fa-file-code-o"}
                           title={"JAVASCRIPT/TYPESCRIPT"} description={TYPESCRIPT} icon={js_Ts}
                           procentProgress={"85%"}/>
                    <Skill style={{minWidth: "2em", width: "95%"}} className={"fa fa-joomla"}
                           title={"REACT/REDUX/REDUX TOOLKIT"} description={REACT} icon={react}
                           procentProgress={"95%"}/>
                    <Skill style={{minWidth: "2em", width: "95%"}} className={"fa fa-html5"} title={"HTML"}
                           description={HTML} icon={htmlIcon} procentProgress={"95%"}/>
                    <Skill style={{minWidth: "2em", width: "90%"}} className={"fa fa-css3"} title={"CSS/SCSS/SASS"}
                           description={CSS} icon={scss_css} procentProgress={"90%"}/>
                    <Skill style={{minWidth: "2em", width: "85%"}} className={"fa fa-random"}
                           title={"AXIOS/REST API/NODEJS/SMTP"} description={AXIOS} icon={axios_api}
                           procentProgress={"85%"}/>
                    <Skill style={{minWidth: "2em", width: "85%"}} className={"fa fa-github"} title={"GIT/JIRA"}
                           description={GIT} icon={git} procentProgress={"85%"}/>
                    <Skill style={{minWidth: "2em", width: "95%"}} className={"fa fa-television"}
                           title={"ANT DESIGN/MATERIAL-UI "} description={MATERIAL} icon={design}
                           procentProgress={"95%"}/>
                    <Skill style={{minWidth: "2em", width: "90%"}} className={"fa fa-cogs"}
                           title={"UNIT TESTS/ STORYBOOK/ SNAPSHOT TESTING"} description={STORYBOOK} icon={tests}
                           procentProgress={"90%"}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;