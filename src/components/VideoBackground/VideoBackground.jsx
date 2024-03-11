import React from 'react';
import videoBg from '../../assets/backgroundVideo/background.mp4'
import './VideoBackground.css'

const VideoBackground = () => {
    return (
        <div className="video-background">
            <div className="overlay-1"></div>
            <video autoPlay loop muted>
                <source src={videoBg} type="video/mp4" />
            </video>
            <div className="overlay"></div>
        </div>
    );
};

export default VideoBackground;