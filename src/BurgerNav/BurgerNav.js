import React, {useState} from "react";
import s from "./BurgerNav.module.scss";
import {Link} from "react-scroll";


export let BurgerNav = () => {

    let [menuIsOpen, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = (e) => {
        e.preventDefault();
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <Link offset={-2} to="main" activeClass={s.active} spy={true} smooth={true}>
                    <span className={s.primaryColor}>Home page</span>
                </Link>
                <Link offset={-2} to="skills" activeClass={s.active} spy={true} smooth={true}>Skills</Link>
                <Link offset={0} to="projects" activeClass={s.active} spy={true} smooth={true}>Projects</Link>
                <Link offset={0} to="remoteWork" activeClass={s.active} spy={true} smooth={true}>Remote work</Link>
                <Link offset={0} to="contacts" activeClass={s.active} spy={true} smooth={true}>Contacts</Link>
            </div>
            <div onClick={onBurgerBtnClick} className={s.burgerBtn}>
                <span className={!menuIsOpen ? s.spanBurgerBtn : `${s.spanBurgerBtn} ${s.spanBtn_active}`}></span>
            </div>
        </div>
    )
}

export default BurgerNav;