import React from 'react'

export default function Header() {
    return (
        <div id='header'>
            <h1>puppster</h1>
            <input id='searchbar' placeholder="Search Bar  (e.g. 'chocolate lab')"></input>
            <div id="icon_container">
                <img src='./images/house.png' className='header_icon'/>
                <img src='./images/upload.png' id='upload_icon' className='header_icon'/>
                <div id='profile_icon' class='header_icon'><img className='profile_photo'src='./images/Finn1.jpg'></img></div>
            </div>
        </div>
    )
}