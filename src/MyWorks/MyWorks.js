import React from "react";
import styleContainer from "../Common/Styles/StyleContainer.module.scss";
import s from "./MyWorks.module.scss";
import Work from "./Work/Work";
import TitleMy from "../Common/Components/Title/Title";
import todoImage from "../assets/image/todoImage.jpg";
import socialNetworkImage from "../assets/image/socialNetwork.jpg";
// import "./SectionWork.css";

let MyWorks = (props) => {

    const todo = {
        backgroundImage: `url(${todoImage})`
    };
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`
    };

    let skillText1 = "actions это константы, описывающие событие. Обычно это просто строка с названием описывающее событие."
    let skillText2 = "actions это константы, описывающие событие. К примеру константа описывающее событие номер один будет выглядеть следующем образом:"


    return (

        <div id={"projects"} className={s.worksBlock}>
            <TitleMy text={" Experience"} textMy={"My"}/>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <div className={s.works}>
                    <Work style={todo} title={"TODOLIST"} description={skillText1}
                          href="https://chester7777.github.io/todolist_16/#/login"/>
                    <Work style={socialNetwork} title={"SOCIAL NETWORK"} description={skillText2}
                          href="https://chester7777.github.io/sn-ts-example/"/>
                    <Work style={socialNetwork} title={"CONVERTER"} description={skillText2} href=""/>
                    <Work style={socialNetwork} title={"TODOLIST 2"} description={skillText2}
                          href="https://chester7777.github.io/NewToDoForDay_JS/"/>
                    <Work style={socialNetwork} title={"PORTFOLIO"} description={skillText2}
                          href="https://chester7777.github.io/portfolio/"/>
                    <Work style={socialNetwork} title={"CARDS"} description={skillText2}
                          href="https://highhack.github.io/404"/>
                </div>
            </div>
        </div>

        //Второй вариант блока
        // <section id="resume" className="section experience">
        //     <div className="container">
        //         <h2><span className="primary-color">My</span> Experience</h2>
        //         <ul className="list">
        //             <li className="in-view">
        //                 <div>
        //                     <h3>GRAPHICS DESIGNER</h3>
        //                     <time dateTime="2020-02-14">14 Aug 2020</time>
        //                     <p>It is a long established fact that a reader will be distracted by the readable content of
        //                         a page when looking at its layout.</p>
        //                 </div>
        //             </li>
        //             <li className="in-view">
        //                 <div>
        //                     <h3>UX/UI DESIGNER</h3>
        //                     <time dateTime="2020-02-14">14 Aug 2020</time>
        //                     <p>It is a long established fact that a reader will be distracted by the readable content of
        //                         a page when looking at its layout.</p>
        //                 </div>
        //             </li>
        //             <li className="in-view">
        //                 <div>
        //                     <h3>WEB DEVELOPER</h3>
        //                     <time dateTime="2020-02-14">14 Aug 2020</time>
        //                     <p>It is a long established fact that a reader will be distracted by the readable content of
        //                         a page when looking at its layout.</p>
        //                 </div>
        //             </li>
        //             <li className="in-view">
        //                 <div>
        //                     <h3>PHOTOGRAPHER</h3>
        //                     <time dateTime="2020-02-14">14 Aug 2020</time>
        //                     <p>It is a long established fact that a reader will be distracted by the readable content of
        //                         a page when looking at its layout.</p>
        //                 </div>
        //             </li>
        //             <li className="in-view">
        //                 <div>
        //                     <h3>PHOTOGRAPHER</h3>
        //                     <time dateTime="2020-02-14">14 Aug 2020</time>
        //                     <p>It is a long established fact that a reader will be distracted by the readable content of
        //                         a page when looking at its layout.</p>
        //                 </div>
        //             </li>
        //         </ul>
        //     </div>
        // </section>
    )
}

export default MyWorks;