import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
console.log(s)
type ProfilePropsType = {
    titleProfile: string
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div>
                <img src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'/>
            </div>
            <MyPosts titleMyPosts={''}/>
        </div>
    )
}

export default Profile;