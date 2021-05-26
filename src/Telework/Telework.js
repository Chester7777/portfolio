import React from "react";
import s from "./Telework.module.scss"
import TitleMe from "../Common/Components/Title/TitleMe";


const Telework = () => {

    return <div className={s.teleworkBlock}>
            <div className={` ${s.teleworkContainer}`}>
                <TitleMe  text={"Remote work for "} textMe={"Me"}/>

                <h2 className={s.title}>I AM AVAILABLE FOR FREELANCER </h2>
                <button className={s.customBtn}>TO HIRE</button>
            </div>
        </div>
}

export default Telework;

