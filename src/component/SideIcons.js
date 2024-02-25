import React, { useState } from 'react';
import { AiFillLike as ThumbUpIcon, AiFillDislike as ThumbDownIcon } from "react-icons/ai";
import { MdMessage as InsertCommentIcon } from "react-icons/md";
import { IoIosShareAlt as NearMeIcon } from "react-icons/io";
import "../style/video.css";

const SideIcons = ({ likes, dislike, comment }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [disliked, setDisLiked] = useState(false);

  const isLikedHandle = () => {
    setIsLiked(!isLiked);
    setDisLiked(false);
  };

  const isDislikedHandle = () => {
    setDisLiked(!disliked);
    setIsLiked(false);
  };

  return (
    <>
      <div className="shortsVideoSideIcon">
        <ThumbUpIcon
          className="shortsVideoSide"
          onClick={isLikedHandle}
          style={{
            color: isLiked === true ? '#000000' : '#ffffff',
            backgroundColor: isLiked === true ? '#ffffff' : '#5e5e5e56'
          }}
        />
        <p>{isLiked === true ? likes + 1 : likes}</p>
      </div>
      <div className="shortsVideoSideIcon">
        <ThumbDownIcon
          className="shortsVideoSide"
          onClick={isDislikedHandle}
          style={{
            color: disliked === true ? '#000000' : '#ffffff',
            backgroundColor: disliked === true ? '#ffffff' : '#5e5e5e56'
          }}
        />
        <p>{disliked === true ? dislike + 1 : dislike}</p>
      </div>
      <div className="shortsVideoSideIcon">
        <InsertCommentIcon className='shortsVideoSide' />
        <p>{comment}</p>
      </div>
      <div className="shortsVideoSideIcon">
        <NearMeIcon className='shortsVideoSide' />
      </div>
    </>
  );
};

export default SideIcons;
