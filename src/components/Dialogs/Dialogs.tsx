import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DiologPropsType = {
    wordsDiolog: string;
}

const DialogsItem = (props:any) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to='/dialogs/ilmir'>Ilmir</NavLink>
        </div>
    )

}
const Dialogs = (props: DiologPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               <DialogsItem name={'Ilmir'} id={'1'}/>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/kamila'>Kamila</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/aliya'>Aliya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/insiya'>Insiya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/almaz'>Almaz</NavLink>
                </div>


            </div>
            <div className={s.masseges}>
                <div className={s.masseg}>Hi!</div>
                <div className={s.masseg}>How ara you?</div>
                <div className={s.masseg}>I'am fine</div>
            </div>
        </div>
    )
}

export default Dialogs;
