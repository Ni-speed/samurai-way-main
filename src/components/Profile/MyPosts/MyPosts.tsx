import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


type MyPostsPropsType = {
    titleMyPosts: postsData[]
}
type postsData = {
    id: number
    titlePost: string
    titleLike: number
}

function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.titleMyPosts.map(p => <Post titlePost={p.titlePost} titleLike={p.titleLike}/>)
    return (
        <div className={s.content}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add Post</button>
                        <button>Remuve</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;