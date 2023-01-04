import React from 'react';
import s from './ProfileInfo.module.css'


type ProfileInfoPropsType = {
    titleProfileInfo: string
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div>
            <div>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div className={s.discriptionBlock}>
                add + discription
                {/*<img src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'/>*/}
            </div>
        </div>
    )
}

export default ProfileInfo;