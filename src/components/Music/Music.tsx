import React from "react";
import s from './Music.module.css'

type MusicPropsType = {
    wordsMusic: string;
}
const Music = (props: MusicPropsType) => {
    return (
        <div>
            Music
            <div>
                {props.wordsMusic}
            </div>
        </div>
    )
}
export default Music