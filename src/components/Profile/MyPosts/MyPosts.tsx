import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostAC, store, updateNewPostTextAC} from "../../../redux/state";


type MyPostsPropsType = {
    titleMyPosts: postsData[]
    addPost: (myNewPost:string) => void
    newPostText: string
    updateNewPostText: (newText:string)=>void
}
type postsData = {
    id: number
    titlePost: string
    titleLike: number
}

function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.titleMyPosts.map(p => <Post titlePost={p.titlePost} titleLike={p.titleLike}/>)
    const addPost = () => {
        store.dispatch(addPostAC())
    }

    const onChangeHeader = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <div className={s.content}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea
                            onChange={onChangeHeader}
                            value={props.newPostText}
                        >
                        </textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add Post</button>
                        <button>Remove</button>
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