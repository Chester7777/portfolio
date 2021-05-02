import React from "react";
import s from "./Footer.module.scss"
import styleContainer from "../Common/Styles/StyleContainer.module.css";
import {SocialIcon} from "./SocialIcon/SocialIcon";


const Footer = () => {

    return <div className={s.footerBlock}>
        <div className={`${styleContainer.container} ${s.footerContainer}`}>
            <h2 className={s.title}>EVGENY CHAUSOV</h2>
            <div className={s.messenger}>
                <SocialIcon />
            </div>
            <span>2021 All rights reserved</span>
        </div>

    </div>
}



export default Footer;


