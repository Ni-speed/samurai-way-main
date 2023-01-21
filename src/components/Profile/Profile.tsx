import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


console.log(s)
type ProfilePropsType = {
    titleProfile: postsData[]
}
type postsData = {
    id: number
    titlePost: string
    titleLike: number
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo titleProfileInfo={''}/>
            <MyPosts titleMyPosts={props.titleProfile} />
        </div>
    )
}

export default Profile;