import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DiologPropsType = {
    wordsDiolog: string;
}


type DialogsItemPropsType = {
    name: string;
    id: string;
}
const DialogsItem = (props: DialogsItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}

type MassegePropsType = {
    massage: string;
}
const Massege = (props: MassegePropsType) => {
    return (
        <div className={s.masseg}>{props.massage}</div>
    )
}
const Dialogs = (props: DiologPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogsItem name='Ilmir' id='1'/>
                <DialogsItem name='Kamila' id='2'/>
                <DialogsItem name='Aliya' id='3'/>
                <DialogsItem name='Insiya' id='4'/>
                <DialogsItem name='Almaz' id='5'/>

            </div>
            <div className={s.masseges}>

                <Massege massage='Hi!'/>
                <Massege massage='How ara you?'/>
                <Massege massage="I'am fine"/>

            </div>
        </div>
    )
}

export default Dialogs;
