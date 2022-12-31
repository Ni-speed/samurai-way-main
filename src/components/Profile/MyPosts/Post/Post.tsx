import React from 'react';
import s from './Post.module.css'

console.log(s)
type PostPropsType = {
    titlePost: string
}

function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img
                src='https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg'/>
            Post1
            <div>
                <span className={s.like}>Like</span>
            </div>
        </div>
    )
}

export default Post;