import React from "react";
import s from './News.module.css'

type NewsPropsType = {
    wordsNews: string;
}
const News = (props: NewsPropsType) => {
    return (
        <div>
            News
            <div>{props.wordsNews}</div>
        </div>
    )
}
export default News