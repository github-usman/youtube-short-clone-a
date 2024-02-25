import React, { useEffect, useState } from 'react'

const ProgressBar = ({ videoRef }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const currentTime = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            const calculatedProgress = (currentTime / duration) * 100;
            setProgress(calculatedProgress);
        };
    
        const currentVideoRef = videoRef.current;
    
        currentVideoRef.addEventListener('timeupdate', updateProgress);
    
        return () => {
            currentVideoRef.removeEventListener('timeupdate', updateProgress);
            console.log('check')
        };
    }, [videoRef]); 
    
    
    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    )
}

export default ProgressBar;