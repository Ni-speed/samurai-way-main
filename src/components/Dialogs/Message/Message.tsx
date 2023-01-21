import React from "react";
import s from './../Dialogs.module.css'


type MassegePropsType = {
    massage: string;
}

 export   const Massege = (props: MassegePropsType) => {
        return (
            <div className={s.dialogs}>{props.massage}</div>
        )
}


