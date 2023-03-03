import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

// type DiologPropsType = {
//     wordsDiolog: string;
// }

type DialogsItemPropsType = {
    name: string;
    id: number;
}

 export   const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
        let path = '/dialogs/' + props.id
        return (
            <div className={s.dialog + ' ' + s.active}>
                <img className={s.img}
                    src='https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg'/>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        )
    }



