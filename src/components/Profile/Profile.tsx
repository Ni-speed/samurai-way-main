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
// let postsData = [
//     {id: 1, titlePost: 'Hi it\'s my first post', titleLike: 25},
//     {id: 2, titlePost: 'two it\'s my', titleLike: 15},
//     {id: 3, titlePost: 'three four 5', titleLike: 45},
// ]

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo titleProfileInfo={''}/>
            <MyPosts titleMyPosts={props.titleProfile} />
        </div>
    )
}

export default Profile;