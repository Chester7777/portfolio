import React from "react"
import s from "./Header.module.scss"
import Nav from "../Nav/Nav";
import BurgerNav from "../BurgerNav/BurgerNav";


let Header = () => {

    return (
        <div className={s.header}>
            <div className={s.navbarBrand}>
                <span className={s.primaryColor}>Port</span>
                folio
            </div>
            <Nav/>
            <BurgerNav />
        </div>
    )
}

export default Header;