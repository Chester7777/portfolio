import React from "react";
import s from "./Nav.module.scss";
import {Link} from "react-scroll";


let Nav = () => {

    return (
        <div className={s.menu}>
            <Link offset={0} to="main" activeClass={s.active} spy={true} smooth={true}>
                <span className={s.primaryColor}>Home page</span>
            </Link>
            <Link offset={-50} to="skills" activeClass={s.active} spy={true} smooth={true}>Skills</Link>
            <Link offset={50} to="projects" activeClass={s.active} spy={true} smooth={true}>Projects</Link>
            <Link offset={-80} to="remoteWork" activeClass={s.active} spy={true} smooth={true}>Remote work</Link>
            <Link offset={10} to="contacts" activeClass={s.active} spy={true} smooth={true}>Contacts</Link>
        </div>
    )
}

export default Nav;