import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


type MyPostsPropsType = {
    titleMyPosts: postsData[]
    addPost: (myNewPost: string) => void
}
type postsData = {
    id: number
    titlePost: string
    titleLike: number
}

function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.titleMyPosts.map(p => <Post titlePost={p.titlePost} titleLike={p.titleLike}/>)
    const newText = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newText.current !== null)
            // alert(newText.current.value)
            props.addPost(newText.current.value)
    }

    return (
        <div className={s.content}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea ref={newText}></textarea>
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