import React from 'react';
import s from './MyPosts.module.css'

console.log(s)
type MyPostsPropsType = {
    titleMyPosts: string
}

function MyPosts(props: MyPostsPropsType) {
    return (
        <div className={s.content}>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={s.item}>
                    Post1
                </div>
                <div className={s.item}>
                    Post2
                </div>
            </div>
        </div>
    )
}

export default MyPosts;