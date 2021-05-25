export const SocialIcon = (props) => {

    return <a href={props.href}>
        <i
            id={props.id}
            className={props.className}
            aria-hidden="true"
        ></i>
    </a>
}