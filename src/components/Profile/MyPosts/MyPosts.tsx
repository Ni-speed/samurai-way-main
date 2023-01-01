import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

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
                    <textarea></textarea>
                    <button>Add Post</button>
                    <button>Remuve</button>
                </div>
                <Post titlePost={`Hi it's my first post`} titleLike={'25'}/>
                <Post titlePost={`two it's my`} titleLike={'15'}/>
                <Post titlePost={'three four 5'} titleLike={'45'}/>

            </div>
        </div>
    )
}

export default MyPosts;