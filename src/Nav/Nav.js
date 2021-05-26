import React from "react"
import s from "./Nav.module.scss"


let Nav = () => {

    return (
        <div className={s.menu}>
            <a href=''>
                <span className={s.primaryColor}>Home page</span>
            </a>
            <a href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
            <a href='#remoteWork'>Remote work</a>
            <a href='#contacts'>Contacts</a>
        </div>
    )
}

export default Nav;