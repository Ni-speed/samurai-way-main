import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { store} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profilePageReducer";


type MyPostsPropsType = {
    titleMyPosts: postsData[]
    // addPost: (myNewPost:string) => void
    newPostText: string
    // updateNewPostText: (newText:string)=>void
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

    const onChangeHeader = (event: ChangeEvent<HTMLInputElement>) => {
        store.dispatch(updateNewPostTextAC(event.currentTarget.value))
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter')
            addPost()
    }
    return (
        <div className={s.content}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <input
                            onKeyPress={onKeyPressHandler}
                            onChange={onChangeHeader}
                            value={props.newPostText}
                        >
                        </input>
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