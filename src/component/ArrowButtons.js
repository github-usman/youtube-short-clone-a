import React from "react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";


const ArrowButtons = ({containerRef}) => {

    const scrollToTop = () => {
        if (containerRef.current) {
          const containerHeight = containerRef.current.clientHeight;
          const videoHeight = containerRef.current.querySelector(".video").clientHeight;
          const videosPerContainer = Math.floor(containerHeight / videoHeight);
          const scrollDistance = videoHeight * videosPerContainer;
          containerRef.current.scrollTo({
             top: containerRef.current.scrollTop - scrollDistance,
            behavior: "smooth"
          });
        }
      };
    
      const scrollToBottom = () => {
        if (containerRef.current) {
          const containerHeight = containerRef.current.clientHeight;
          const videoHeight = containerRef.current.querySelector(".video").clientHeight;
          const videosPerContainer = Math.floor(containerHeight / videoHeight);
          const scrollDistance = videoHeight * videosPerContainer;
          containerRef.current.scrollTo({
            top: containerRef.current.scrollTop + scrollDistance,
            behavior: "smooth"
          });
        }
      };
  return (
    <div className="arrows">
      <div className="arrow" onClick={scrollToTop}>
        <IoMdArrowUp className="innerArrow" />
      </div>
      <div className="arrow" onClick={scrollToBottom}>
        <IoMdArrowDown className="innerArrow" />
      </div>
    </div>
  );
};

export default ArrowButtons;
