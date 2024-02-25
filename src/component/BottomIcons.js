import React, { useState } from 'react';
import { RxAvatar as Avatar } from "react-icons/rx";

const BottomIcons = ({ description }) => {
  const [subs, setSubs] = useState(false);

  const handleSubscribe = () => {
    setSubs((sub) => !sub);
  };

  return (
    <div className="shortsBottom">
      <div className="shortsDesc">
        <p className="description">{description}</p>
      </div>
      <div className="shortDetails">
        <Avatar
          className='shortsVideoSide avtar'
        />
        <button
          style={{
            background: !subs ? "red" : "hsla(0,0%,69.4%,.609)",
            width: '7rem'
          }}
          onClick={handleSubscribe}
        >
          {subs ? "SUBSCRIBED" : "SUBSCRIBE"}
        </button>
      </div>
    </div>
  );
};

export default BottomIcons;
