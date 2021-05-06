import React from "react"
import s from "./Nav.module.scss"


let Nav = () => {

    return (
        <div className={s.menu}>
            <a href=''>
                <span className={s.primaryColor}>Home page</span>
            </a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''>Contacts</a>
        </div>
    )
}

export default Nav;