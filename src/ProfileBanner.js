import React from 'react'

export default function ProfileBanner() {
    return (
        <div id='banner_container'>
            <div id='profile_picture'><img className='profile_photo'src='./images/Finn1.jpg'></img></div>
            <div id='profile_info'>
                <div id='top_line'>
                    <h3>Username</h3>
                    <button id='settings' >Edit Profile
                        <img id='settings_icon'src='./images/setting.png' />
                    </button>
                    
                </div>
                <div id='second_line'>
                    <p>0 uploads</p>
                    <p>0 treats received</p>
                    <p>0 treats given</p>
                </div>
                <div id='infobox'>
                    <p>Dog Name:</p>
                    <p>Dog Breed:</p>
                    <p>Interests:</p>
                </div>
            </div>
        </div>
    )
}
