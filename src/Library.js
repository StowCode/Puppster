import React from 'react'

export default function Library() {
    return (
        <div id='library_container'>
            
        <div id='album_container'>
            <div className='phototile'>
                <img className='phototile_photo' src='./images/jango1.jpg'></img>
            </div>

            <div className='phototile'>
                <img className='phototile_photo' src='./images/Finn2.jpg'></img>
            </div>

            <div className='phototile'>
                <img className='phototile_photo' src='./images/Jango2.jpg'></img>
            </div>

        </div>



            <img id='dog' src='./images/dog.png'/>
            <div id='grass_container'>
                <img className='grass' src='./images/grass.png' />
                <img className='grass' src='./images/grass.png' />
                <img className='grass' src='./images/grass.png' />
                <img className='grass' src='./images/grass.png' />
                <img className='grass' src='./images/grass.png' />
                <img className='grass' src='./images/grass.png' />
                <img className='grass' src='./images/grass.png' />
                <img className='grass' src='./images/grass.png' />
            </div>
        </div>
    )   
}