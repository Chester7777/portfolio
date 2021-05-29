import React from "react";
import styleContainer from "../Common/Styles/StyleContainer.module.scss";
import s from "./MyWorks.module.scss";
import Work from "./Work/Work";
import TitleMy from "../Common/Components/Title/Title";
import todoImage from "../assets/image/todoImage.jpg";
import socialNetworkImage from "../assets/image/socialNetwork.jpg";

let MyWorks = () => {

    // const todo = {
    //     backgroundImage: `url(${todoImage})`
    // };
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`
    };

    let TODOLIST = "Redux-toolkit contains the best practice from all React developers. This project shows redux-toolkit and his strict limits."
    let TODOLIST2 = "This project with an interesting design and colorful interface is written in JS + React + Redux."
    let SOCIAL_NETWORK = "It is the most biggest project which I refresh every month and learning new technologies. It helps me to be in trends."
    let CARDS = "This project in progress. Will be added users page, video loading and images for cards, also chat between users."
    let PORTFOLIO = "The project is written using SCSS, JavaScript,  React, Redux, Axios, Redux Thunk, NodeJS / SMTP."
    let CONVERTER = "With the help of React, Redux and additional libraries, it allows you to convert currencies."


    return (
        <div id={"projects"} className={s.worksBlock}>
            <TitleMy text={" Experience"} textMy={"My"}/>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <div className={s.works}>
                    <Work style={socialNetwork} title={"TODOLIST"} description={TODOLIST}
                          href="https://chester7777.github.io/todolist_16/#/login"/>
                    <Work style={socialNetwork} title={"SOCIAL NETWORK"} description={SOCIAL_NETWORK}
                          href="https://chester7777.github.io/sn-ts-example/"/>
                    <Work style={socialNetwork} title={"CONVERTER"} description={CONVERTER} href=""/>
                    <Work style={socialNetwork} title={"TODOLIST 2"} description={TODOLIST2}
                          href="https://chester7777.github.io/NewToDoForDay_JS/"/>
                    <Work style={socialNetwork} title={"PORTFOLIO"} description={PORTFOLIO}
                          href="https://chester7777.github.io/portfolio/"/>
                    <Work style={socialNetwork} title={"CARDS"} description={CARDS}
                          href="https://highhack.github.io/404"/>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;