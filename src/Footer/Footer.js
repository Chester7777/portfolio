import React from "react";
import s from "./Footer.module.css"
import styleContainer from "../Common/Styles/StyleContainer.module.css";


const Footer = () => {

    return <div className={s.footerBlock}>
        <div className={`${styleContainer.container} ${s.footerContainer}`}>
            <h2 className={s.title}>EVGENY CHAUSOV</h2>
            <div className={s.messenger}>
                <div className={s.vkontacte}>VK</div>
                <div className={s.insta}>Inst</div>
                <div className={s.twit}>TW</div>
                <div className={s.telegram}>TLG</div>
            </div>
            <span>2021 All rights reserved</span>
        </div>

    </div>
}


export default Footer;


