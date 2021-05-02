import s from "./Title.module.scss";


let TitleMe = (props) => {

    return (
        <div className={s.title}>
            <h2>
                {props.text}
                <span className={s.primaryColor}>{props.textMe}</span>
            </h2>
        </div>
    )
}

export default TitleMe;