import React from "react";
import s from "./Footer.module.scss"
import {SocialIcon} from "./SocialIcon/SocialIcon";


const Footer = () => {

    return <footer className={s.footerBlock}>
        <div className={` ${s.footerContainer}`}>
            <SocialIcon href="https://www.linkedin.com/in/evgeny-chausov-6101b1212/" id={s.socialIcon} className="fa fa-linkedin"/>
            <SocialIcon href="https://github.com/Chester7777" id={s.socialIcon} className="fa fa-github"/>
            <SocialIcon href="https://www.codewars.com/users/Chester7777" id={s.socialIcon} className="fa fa-empire"/>
            <SocialIcon href="https://t.me/CHES7777" id={s.socialIcon} className="fa fa-telegram"/>
            {/*<SocialIcon href="https://web.whatsapp.com/" id={s.socialIcon} className="fa fa-whatsapp"/>*/}
            <SocialIcon href="https://vk.com/id8861932" id={s.socialIcon} className="fa fa-vk"/>
            {/*<SocialIcon href="#" id={s.socialIcon} className="fa fa-odnoklassniki"/>*/}
        </div>
        <p className={s.copyright}>
            Designed With
            <i id={s.heart} className="fa fa-heart" aria-hidden="true"></i>
            {"By "}
            <a
                href="https://resume.io/r/HDCtrmGVx" target="_blank">
                Evgeny Chausov
            </a>
            {" - 2021"}
        </p>

    </footer>
}


export default Footer;


