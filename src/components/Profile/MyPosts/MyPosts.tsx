import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


type MyPostsPropsType = {
    titleMyPosts: postsData[] | string
}
type postsData = {
    id: number
    titlePost: string
    titleLike: number
}
let postsData = [
    {id: 1, titlePost: 'Hi it\'s my first post', titleLike: 25},
    {id: 2, titlePost: 'two it\'s my', titleLike: 15},
    {id: 3, titlePost: 'three four 5', titleLike: 45},
]
let postsElements = postsData.map(p => <Post titlePost={p.titlePost} titleLike={p.titleLike}/>);

function MyPosts(props: MyPostsPropsType) {
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