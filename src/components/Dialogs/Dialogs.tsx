import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

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




/* <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
 <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
 <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
 <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>,
 <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id}/>
]*/

export const Dialogs = (props: DiologPropsType) => {
    const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
        let path = '/dialogs/' + props.id
        return (
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        )
    }
    const Massege = (props: MassegePropsType) => {
        return (
            <div className={s.dialog}>{props.massage}</div>
        )
    }
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


