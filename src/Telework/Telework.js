import React from "react";
import s from "./Telework.module.css"
import styleContainer from "../Common/Styles/StyleContainer.module.css";


const Telework = () => {

    return <div className={s.teleworkBlock}>
            <div className={`${styleContainer.container} ${s.teleworkContainer}`}>
                <h2 className={s.title}>CONSIDERING OPTIONS FOR REMOTE WORK</h2>
                <button>TO HIRE</button>
            </div>
        </div>
}

export default Telework;

