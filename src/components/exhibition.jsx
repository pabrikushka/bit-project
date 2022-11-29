import * as React from 'react';
import Tubes from "../assets/videos/mona.mp4"


const Exhibition = () => {

    return (
        <header
            className='hero exhibition fader fader-top fader-60'
        // ref={ref}
        >
            <div 
            className='hero-bg-holder'
            >
                <video
                    className='hero-video' src={Tubes} loop muted autoPlay>

                    </video>
            </div>

        </header>
    )
}

export default Exhibition;