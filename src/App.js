import React, { useEffect, useState } from "react";
import Video from "./component/Video";
import localVideo from "./component/videoFiles";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [globalMuted, setGlobalMuted] = useState(false); // Global muted state

  useEffect(() => {
    setVideos(localVideo);
  }, []);

  // Function to handle toggling global muted state
  const handleGlobalMuteToggle = () => {
    setGlobalMuted((prevGlobalMuted) => !prevGlobalMuted);
  };

  return (
    <div className="app">
      {/* Pass the globalMuted state and the function to toggle it as props */}
      <div className="app__videos">
        {videos.map((ele) => (
          <Video
            key={ele.id} // Don't forget to add a unique key prop when mapping
            id={ele.id}
            src={ele.vid}
            likes={ele.likes}
            dislike={ele.dislike}
            comment={ele.comment}
            globalMuted={globalMuted}
            description={ele.description}
            onGlobalMuteToggle={handleGlobalMuteToggle} // Pass function to toggle global mute state
          />
        ))}
      </div>
    </div>
  );
}

export default App;
