import React from "react";
import s from "./Footer.module.scss"
import {SocialIcon} from "./SocialIcon/SocialIcon";


const Footer = () => {

    return <footer className={s.footerBlock}>
        <div className={` ${s.footerContainer}`}>
            <SocialIcon href="#" id={s.socialIcon} className="fa fa-linkedin"/>
            <SocialIcon href="#" id={s.socialIcon} className="fa fa-github"/>
            <SocialIcon href="#" id={s.socialIcon} className="fa fa-telegram"/>
            <SocialIcon href="#" id={s.socialIcon} className="fa fa-whatsapp"/>
            <SocialIcon href="#" id={s.socialIcon} className="fa fa-vk"/>
            {/*<SocialIcon href="#" id={s.socialIcon} className="fa fa-instagram"/>*/}
            {/*<SocialIcon href="#" id={s.socialIcon} className="fa fa-odnoklassniki"/>*/}
        </div>
        <p className={s.copyright}>
            Designed With
            <i id={s.heart} className="fa fa-heart" aria-hidden="true"></i>
            {"By "}
            <a
                href="https://themeforest.net/user/abdelaziz_sliem" target="_blank">
                Evgeny Chausov
            </a>
            {" - 2021"}
        </p>

    </footer>
}


export default Footer;


