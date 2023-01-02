import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


console.log(s)
type ProfilePropsType = {
    titleProfile: string
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo titleProfileInfo={''}/>
            <MyPosts titleMyPosts={''}/>
        </div>
    )
}

export default Profile;