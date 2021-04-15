import React from "react";
import s from "./Telework.module.css"
import styleContainer from "../Common/Styles/StyleContainer.module.css";
import TitleMe from "../Common/Components/Title/TitleMe";


const Telework = () => {

    return <div className={s.teleworkBlock}>
            <div className={`${styleContainer.container} ${s.teleworkContainer}`}>
                <TitleMe  text={"Remote work for "} textMe={"Me"}/>

                {/*<h2 className={s.title}>CONSIDERING OPTIONS FOR REMOTE WORK</h2>*/}
                <button>TO HIRE</button>
            </div>
        </div>
}

export default Telework;

