import React from 'react'
import "./style/video.css";
import { IoIosArrowRoundBack ,IoIosShareAlt} from "react-icons/io";
import { MdMoreVert,MdMessage } from "react-icons/md";
import { AiOutlineLike,AiOutlineDislike } from "react-icons/ai";



const Icons = () => {
  return (
    <div>
        <div className='AllIcons'>
            <div className='topIcons'>
                <div className='topIcon'>
                   <IoIosArrowRoundBack/>
                </div>
                <div className='topIcons'>
                    <MdMoreVert/>
                 </div>
            </div>
            <div className='side-Icons'>
              <div className='side-Icon'>
                  <AiOutlineLike/>
               </div>
               <div className='side-Icon'>
                  <AiOutlineDislike/>
               </div>
              <div className='side-Icon'>
                  <MdMessage/>
               </div>
              <div className='side-Icon'>
                  <IoIosShareAlt/>
               </div>
             </div>
        </div>
    </div>
  )
}

export default Icons