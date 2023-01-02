import React from "react";
import s from './Dialogs.module.css'

type DiologPropsType = {
    wordsDiolog: string;
}
const Dialogs = (props: DiologPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                    <div className={s.dialog + ' ' + s.active}>
                        Ilmir
                    </div>
                    <div className={s.dialog}>
                        Kamila
                    </div>
                    <div className={s.dialog}>
                        Aliya
                    </div>
                    <div className={s.dialog}>
                        Insiya
                    </div>
                    <div className={s.dialog}>
                        Almaz
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
