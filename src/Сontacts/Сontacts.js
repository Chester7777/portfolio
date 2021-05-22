import React from "react";
import s from "./Сontacts.module.scss"
import styleContainer from "../Common/Styles/StyleContainer.module.scss";
import TitleMe from "../Common/Components/Title/TitleMe";


const Сontacts = () => {

    return <div className={s.contactsBlock}>
        <TitleMe text={"Contact "} textMe={"Me"}/>
        <div className={`${styleContainer.container} ${s.containerForm}`}>
            <div>
                address

            </div>
            <div className={s.contactsContainer}>
                <form action="" className={s.form}>
                    <div className={s.form_group}>
                        <div>
                            <input
                                type="text"
                                className={s.form_control}
                                id="name"
                                placeholder="Name"
                                name="user"
                                required="required"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input
                                type="text"
                                className={s.form_control}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <textarea
                                className={s.form_control}
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                            ></textarea>

                        </div>
                    </div>
                    <div>
                        <div>
                            <button type="submit" className={s.submitBtn}>SEND</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}


export default Сontacts;