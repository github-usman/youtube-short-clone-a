import { useEffect, useRef, useState } from 'react'
import "../style/video.css"
import SideIcons from '../component/SideIcons';
import BottomIcons from '../component/BottomIcons';
import TopIcons from '../component/TopIcons';
function Videos({
    id,
    src,
    globalMuted,
    onGlobalMuteToggle,
    likes,
    dislike,
    comment,
    description
}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setPlaying(true);
                videoRef.current.play();
            } else {
                setPlaying(false);
                videoRef.current.pause();
            }
        }, options);

        const currentVideoRef = videoRef.current;

        if (currentVideoRef) {
            observer.observe(currentVideoRef);
        }

        return () => {
            const cleanupVideoRef = currentVideoRef;
            if (cleanupVideoRef) {
                observer.unobserve(cleanupVideoRef);
            }
        };
    }, []);

    const handleVideoPress = () => {
        if (playing) {
            setPlaying(false);
            videoRef.current.pause();
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };


    return (
        <div className="video">
            <video
                id={id}
                className="video__player"
                onClick={handleVideoPress}
                loop
                ref={videoRef}
                src={src}
                muted={!globalMuted}
            />

            <div >
                <TopIcons onGlobalMuteToggle={onGlobalMuteToggle} globalMuted={globalMuted} videoRef={videoRef} playing={playing} />
                <div className='deskTopSideIcon-mobile'>

                <SideIcons likes={likes} dislike={dislike} comment={comment} />
                </div>
                <BottomIcons description={description} />
            </div>
          
        </div>
    );
}

export default Videos;