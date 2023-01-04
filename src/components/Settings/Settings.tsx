import React from "react";
import s from './Settings.module.css'

type SettingsPropsType = {
    wordsSettings: string;
}
const Settings = (props: SettingsPropsType) => {
    return (
        <div>
            Settings
            <div>
                {props.wordsSettings}
            </div>
        </div>
    )
}
export default Settings