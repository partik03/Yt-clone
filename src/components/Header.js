import { AppsSharp, Grid3x3Outlined, GridOnSharp, MenuSharp ,MicSharp,NotificationsOutlined,SearchOffSharp,SlideshowOutlined,VideoCallOutlined,YouTube} from '@mui/icons-material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Avatar } from '@mui/material';
import React from 'react'
import logo from './logo.png'
import "./Header.css"
function Header({side,setSide}) {
  function searchClick() {
    
  }
  function handleOnclick() {
    side?setSide(false) :setSide(true);
  }
  return (
    <div className='header'>
       <div className="header_logo" >
        <MenuSharp style={{fontSize:"1.5rem",cursor:"pointer"}} onClick={handleOnclick} />
       <img src={logo} alt=""/></div>
       <div className="search">
        <input type="text" placeholder='Search' />
        <SearchSharpIcon style={{fontSize:"1.4rem"}} id="searchIcon" />
        </div>
        <div className="searchIcon"><SearchSharpIcon onClick={()=>{searchClick()}} /></div>
        <div className="rightIcons">
              <VideoCallOutlined style={{fontSize:"1.5rem"}} />
            <AppsSharp style={{fontSize:"1.5rem"}} />
            <NotificationsOutlined style={{fontSize:"1.5rem"}} />
            <Avatar style={{fontSize:"1.5rem"}} src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/3/2022_3$largeimg_371225041.jpg"  />

        </div>
    </div>
    
  )
}

export default Header