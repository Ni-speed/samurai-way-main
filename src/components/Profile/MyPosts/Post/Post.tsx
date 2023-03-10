import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    titlePost: string
    titleLike: number
}

function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img
                src='https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg'/>
            {props.titlePost}
            <div>
                <span className={s.like}>Like</span>  {props.titleLike}
            </div>
        </div>
    )
}

export default Post;