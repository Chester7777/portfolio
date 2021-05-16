import s from "../Footer.module.scss";


export const SocialIcon = (props) => {
    let socialIcons = ["in", "cv", "codewars", "tlg", "vk"]
    return socialIcons.map(el =>  <div key={props.id} className={s.socialIcon}>{el}</div>)
}