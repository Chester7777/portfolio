import React from "react";
import s from "./Сontacts.module.css"
import styleContainer from "../Common/Styles/StyleContainer.module.css";
import TitleMe from "../Common/Components/Title/TitleMe";


const Сontacts = () => {

    return <div className={s.contactsBlock}>
        <div className={`${styleContainer.container} ${s.contactsContainer}`}>
            <TitleMe  text={"Contact "} textMe={"Me"}/>
            <form action="" className={s.form}>
                <input type="text"/>
                <input type="text"/>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
            <button type="submit" className={s.submitBtn}>SEND</button>
        </div>
    </div>
}

export default Сontacts;