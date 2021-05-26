import React from "react";
import s from "./Nav.module.scss";
import {Link} from "react-scroll";


let Nav = () => {

    return (
        <div className={s.menu}>
            <Link to="main" activeClass="active" spy={true} smooth={true}>
                <span className={s.primaryColor}>Home page</span>
            </Link>
            <Link id={"active"} to="skills" activeClass="active" spy={true} smooth={true}>Skills</Link>
            <Link offset={70} to="projects" activeClass="active" spy={true} smooth={true}>Projects</Link>
            <Link offset={-170} to="remoteWork" activeClass="active" spy={true} smooth={true}>Remote work</Link>
            <Link to="contacts" activeClass="active" spy={true} smooth={true}>Contacts</Link>
        </div>
    )
}

export default Nav;