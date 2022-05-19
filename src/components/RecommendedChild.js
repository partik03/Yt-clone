import React from 'react'
import { Avatar } from '@mui/material'
import "./RecommendedChild.css"
function RecommendedChild({image,avatarImg,title,channel,views,timestamp}) {
  return (
    <div className='RecommendedChild'>
       <img src={image} alt="" className='RecommendedChildThumbnail'/>
     <div className="video_info"> 
     <Avatar style={{fontSize:"1.5rem"}} src={avatarImg} className='video_avatar' />
     <div className="video_text">

     <h4>{title}</h4>
           <p>{channel}</p>
             <p>
               {views} . {timestamp}
               </p>
     </div>
     </div>
    </div>
  )
}

export default RecommendedChild