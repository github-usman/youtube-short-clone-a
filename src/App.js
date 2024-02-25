import React, { useEffect, useRef, useState } from "react";
import Video from "./page/Video";
import data from "./assets/data";
import "./App.css";
import ArrowButtons from "./component/ArrowButtons";
import SideIcons from "./component/SideIcons";

function App() {
  const [videos, setVideos] = useState([]);
  const [globalMuted, setGlobalMuted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setVideos(data);
    return () => {};
  }, []);

  const handleGlobalMuteToggle = () => {
    setGlobalMuted((prevGlobalMuted) => !prevGlobalMuted);
  };

  return (
    <div className="app">
      <div className="app__videos" ref={containerRef}>
        {videos.map((ele) => (
          <div className="main" key={ele.id}>
            <Video
              key={ele.id}
              id={ele.id}
              src={ele.vid}
              likes={ele.likes}
              dislike={ele.dislike}
              comment={ele.comment}
              description={ele.description}
              globalMuted={globalMuted}
              onGlobalMuteToggle={handleGlobalMuteToggle}
            />
            <div className='deskTopSideIcon'>
              <SideIcons likes={ele.likes} dislike={ele.dislike} comment={ele.comment} />
            </div>
          </div>
        ))}
      </div>
      <ArrowButtons containerRef={containerRef} />
    </div>
  );
}

export default App;
