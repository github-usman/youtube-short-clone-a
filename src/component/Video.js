import { useEffect, useRef, useState } from 'react'

import { RxAvatar as Avatar } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { AiFillLike as ThumbUpIcon } from "react-icons/ai";
import { AiFillDislike as ThumbDownIcon } from "react-icons/ai";
import { MdMessage as InsertCommentIcon } from "react-icons/md";
import { IoIosShareAlt as NearMeIcon } from "react-icons/io";
import "./style/video.css"
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
    const [subs, setSubs] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [disliked, setDisLiked] = useState(false);
    const videoRef = useRef(null);


    const handleSound = () => {
        const newMuted = !globalMuted;
        videoRef.current.muted = newMuted;
        onGlobalMuteToggle(newMuted); // Call the function to toggle global mute state
    };



    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // Video is in view, autoplay
                setPlaying(true);
                videoRef.current.play();
            } else {
                // Video is not in view, pause
                setPlaying(false);
                videoRef.current.pause();
            }
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
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

    const handleSubscribe = () => {
        setSubs((sub) => !sub);
    };

    const isLikedHandle = () => {
        setIsLiked(!isLiked);
        setDisLiked(false);
    } 
    const isDislikedHandle = () => {
        setDisLiked(!disliked);
        setIsLiked(false);
    }

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
                <div className="shortsVideoTop">
                    <div className="shortsVideoTopIcon">
                        {
                            (playing === true ? <FaPause className='shortsVideoSide' /> : <FaPlay className="shortsVideoSide" />)
                        }

                    </div>
                    <div onClick={handleSound} className="shortsVideoTopIcon">

                        {(globalMuted) === true ? <HiMiniSpeakerWave className='shortsVideoSide' /> : <HiMiniSpeakerXMark className="shortsVideoSide" />}
                    </div>
                </div>
                <div className="shortsVideoSideIcons">
                    <div className="shortsVideoSideIcon">
                        <ThumbUpIcon className="shortsVideoSide" onClick={isLikedHandle} style={{ color: isLiked === true ? '#000000' : '#ffffff', backgroundColor: isLiked === true ? '#ffffff':'#5e5e5e56'}}/>
                        <p>{isLiked === true?likes+1:likes}</p>
                    </div>
                    <div className="shortsVideoSideIcon">
                        <ThumbDownIcon  className="shortsVideoSide" onClick={isDislikedHandle} style={{ color: disliked === true ? '#000000' : '#ffffff', backgroundColor: disliked === true ? '#ffffff':'#5e5e5e56'}} />
                        <p>{disliked  === true?dislike+1:dislike}</p>
                    </div>
                    <div className="shortsVideoSideIcon">
                        <InsertCommentIcon className='shortsVideoSide' />
                        <p>{comment}</p>
                    </div>

                    <div className="shortsVideoSideIcon">
                        <NearMeIcon className='shortsVideoSide' />
                    </div>
                </div>
                <div className="shortsBottom">
                    <div className="shortsDesc">
                        <p className="description">{description}</p>
                    </div>
                    <div className="shortDetails">
                        <Avatar

                            src={
                                "https://lh3.googleusercontent.com/ogw/ADGmqu8BCzU8GejYorGqXeu98A1kfEFYKFT85I3_9KJBzfw=s32-c-mo"
                            }
                            className='shortsVideoSide'
                        />
                        <button
                            style={{
                                background: !subs ? "red" : "hsla(0,0%,69.4%,.609)", width: '7rem'
                            }}
                            onClick={handleSubscribe}
                        >
                            {subs ? "SUBSCRIBED" : "SUBSCRIBE"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Videos;