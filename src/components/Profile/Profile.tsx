import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType, store} from "../../redux/state";



type ProfilePropsType = {
    profilePage: profilePageType
    // addPost: (myNewPost:string)=>void
    // updateNewPostText: (newText:string)=>void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo titleProfileInfo={''}/>
            <MyPosts
                titleMyPosts={props.profilePage.postsData}
                // addPost={store.dispatch}
                newPostText={props.profilePage.newPostText}
                // updateNewPostText={store.dispatch}
            />
        </div>
    )
}

export default Profile;