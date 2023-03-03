import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogsItem";
import {Massege} from "./Message/Message";
import {addMessageAC, store, updateNewMessageTextAC} from "../../redux/state";

type DiologPropsType = {
    wordsDiolog: dialogsData[];
    wordsMessage: massegesData[]
    newMassageText: string
    newMessageTextAC: (newMessage: string) => void
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

    const addMessageHandler = () => {
       store.dispatch(addMessageAC())
    }
    const onClickHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let body = event.currentTarget.value
        store.dispatch(updateNewMessageTextAC(body))
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if ( event.key === 'Enter')
            addMessageHandler()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={s.masseges}>
                {massegesElements}
                <input
                    onKeyPress={onKeyPressHandler}
                    value={props.newMassageText}
                    onChange={onClickHandler}
                    placeholder={'Enter your message'}
                ></input>
                <button onClick={addMessageHandler}>Add</button>
            </div>
        </div>
    )
}


