import React from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogsItem";
import {Massege} from "./Message/Message";

type DiologPropsType = {
    wordsDiolog: string;
}


type DialogsItemPropsType = {
    name: string;
    id: number;
}


type MassegePropsType = {
    massage: string;
}

export const Dialogs = (props: DiologPropsType) => {

    let dialogsData = [
        {id: 1, name: 'Ilmir'},
        {id: 2, name: 'Kamila'},
        {id: 3, name: 'Aliya'},
        {id: 4, name: 'Insia'},
        {id: 5, name: 'Almaz'}
    ]
    let massegesData = [
        {id: 1, massage: 'Hi!'},
        {id: 2, massage: 'How ara you?'},
        {id: 3, massage: 'I\'am fine'}
    ]
    let dialogsElements = dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let massegesElements = massegesData.map( m => <Massege massage={m.massage}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={s.masseges}>
                {massegesElements}
            </div>
        </div>
    )
}


