import React from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogsItem";
import {Massege} from "./Message/Message";

type DiologPropsType = {
    wordsDiolog: dialogsData[];
    wordsMessage: massegesData[]
}
type massegesData = {
    massage: string
    id: number
}
type dialogsData = {
    name: string
    id: number
}


export const Dialogs = (props: DiologPropsType) => {

    let dialogsElements = props.wordsDiolog.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let massegesElements = props.wordsMessage.map( m => <Massege massage={m.massage}/>);
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


