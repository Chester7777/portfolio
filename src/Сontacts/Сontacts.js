import React from "react";
import s from "./Сontacts.module.scss"
import styleContainer from "../Common/Styles/StyleContainer.module.scss";
import TitleMe from "../Common/Components/Title/TitleMe";
import {ContactsForm} from "./ContactsForm";


const Сontacts = () => {

    return <div id={"contacts"} className={s.contactsBlock}>
        <TitleMe text={"Contact "} textMe={"Me"}/>
        <div className={`${styleContainer.container} ${s.containerForm}`}>
            <div>
                <address>
                    <div className={s.contact}>
                        <i id={s.map_marker_alt} className="fa fa-map-marker" aria-hidden="true"></i>
                        <span>Address :</span>
                        <p>220013, Yakub Kolas, Minsk, Belarus</p>
                    </div>
                    <div className={s.contact}>
                        <i id={s.map_marker_alt} className="fa fa-phone" aria-hidden="true"></i>
                        <span>Phone :</span>
                        <p>+375 29 241 53 55</p>
                    </div>
                    <div className={s.contact}>
                        <i id={s.map_marker_alt} className="fa fa-envelope-o" aria-hidden="true"></i>
                        <span>Email :</span>
                        <p>Es18.03.88@gmail.com</p>
                    </div>
                </address>

            </div>
            <ContactsForm/>
            {/*<div className={s.contactsContainer}>*/}
            {/*    <form action="" className={s.form}>*/}
            {/*        <div className={s.form_group}>*/}
            {/*            <div>*/}
            {/*                <input*/}
            {/*                    type="text"*/}
            {/*                    className={s.form_control}*/}
            {/*                    id="name"*/}
            {/*                    placeholder="Name"*/}
            {/*                    name="user"*/}
            {/*                    required="required"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={s.form_group}>*/}
            {/*            <div>*/}
            {/*                <input*/}
            {/*                    type="Email"*/}
            {/*                    className={s.form_control}*/}
            {/*                    placeholder="Email"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={s.form_group}>*/}
            {/*            <div>*/}
            {/*                <textarea*/}
            {/*                    className={s.form_control}*/}
            {/*                    name="message"*/}
            {/*                    id="message"*/}
            {/*                    cols="30"*/}
            {/*                    rows="7"*/}
            {/*                    placeholder="Your Message"*/}
            {/*                    required*/}
            {/*                ></textarea>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <div>*/}
            {/*                <button type="submit" className={s.submitBtn}>SEND</button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </div>
    </div>
}


export default Сontacts;