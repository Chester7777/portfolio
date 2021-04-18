import React from "react"
import s from "./Nav.module.css"



let Nav = () => {

    return (
        <div className={s.menu}>
            <a href=''>Home page</a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''>Contacts</a>
        </div>
    )
}

export default Nav;