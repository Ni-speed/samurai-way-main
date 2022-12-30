import React from 'react';

type ProfilePropsType = {
    titleProfile: string
}

function Profile(props: ProfilePropsType) {
    return (
        <div className='content'>
            <div>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div>
                <img src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'/>
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div>
                    Post1
                </div>
                <div>
                    Post2
                </div>
            </div>
        </div>
    )
}

export default Profile;