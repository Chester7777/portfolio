import React, {useState} from "react";
import s from "./Сontacts.module.scss";
import {useDispatch} from "react-redux";
import {sendMessageTC} from "../BLL/FormReducer";


export const ContactsForm = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onClickBtnForm = (event) => {
        event.preventDefault()
        dispatch(sendMessageTC(name, email, message))
    }

    const onChangeName = (e) => {
        setName(e.currentTarget.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onChangeMessage = (e) => {
        setMessage(e.currentTarget.value)
    }

    return <div className={s.contactsContainer}>
        <form className={s.form}>
            <div className={s.form_group}>
                <div>
                    <input
                        type="text"
                        className={s.form_control}
                        id="name"
                        placeholder="Name"
                        name="user"
                        required="required"
                        onChange={onChangeName}
                    />
                </div>
            </div>
            <div className={s.form_group}>
                <div>
                    <input
                        type="Email"
                        className={s.form_control}
                        placeholder="Email"
                        onChange={onChangeEmail}
                    />
                </div>
            </div>
            <div className={s.form_group}>
                <div>
                            <textarea
                                className={s.form_control}
                                name="message"
                                id="message"
                                cols="30"
                                rows="7"
                                placeholder="Your Message"
                                required
                                onChange={onChangeMessage}
                            ></textarea>
                </div>
            </div>
            <div>
                <div>
                    <button
                        type="submit"
                        className={s.submitBtn}
                        onClick={onClickBtnForm}
                    >SEND
                    </button>
                </div>
            </div>
        </form>
    </div>
}