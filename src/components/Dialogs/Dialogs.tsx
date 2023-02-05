import React, {useRef} from "react";
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

    const dialogsElements = props.wordsDiolog.map(d => <DialogsItem name={d.name} id={d.id}/>);
    const massegesElements = props.wordsMessage.map( m => <Massege massage={m.massage}/>);
    const newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostEl.current !== null) {
            alert(newPostEl.current.value)
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={s.masseges}>
                {massegesElements}
                <textarea ref={newPostEl}></textarea>
                <button onClick={addPost}>Add</button>
            </div>
        </div>
    )
}


