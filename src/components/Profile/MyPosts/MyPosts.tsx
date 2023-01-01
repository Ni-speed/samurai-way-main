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
                <Post titlePost={'s'}/>
                <Post titlePost={''}/>
                <Post titlePost={''}/>git

            </div>
        </div>
    )
}

export default MyPosts;