import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiMiniSpeakerXMark, HiMiniSpeakerWave } from "react-icons/hi2";

const TopIcons = ({ onGlobalMuteToggle, globalMuted, videoRef, playing }) => {
  const handleSound = () => {
    const newMuted = !globalMuted;
    videoRef.current.muted = newMuted;
    onGlobalMuteToggle(newMuted);
  };

  return (
    <div className="shortsVideoTop">
      <div className="TopIcon">
        {playing === true ? (
          <FaPause className="innerTopIcons" />
        ) : (
          <FaPlay className="innerTopIcons" />
        )}
      </div>
      <div onClick={handleSound} className="TopIcon">
        {globalMuted === true ? (
          <HiMiniSpeakerWave className="innerTopIcons" />
        ) : (
          <HiMiniSpeakerXMark className="innerTopIcons" />
        )}
      </div>
    </div>
  );
};

export default TopIcons;
