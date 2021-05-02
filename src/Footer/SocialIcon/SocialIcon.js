import s from "../Footer.module.scss";


export const SocialIcon = (props) => {
    let socialIcons = ["VK", "Inst", "TW", "TLG"]
    return socialIcons.map(el =>  <div key={props.id} className={s.socialIcon}>{el}</div>)
}