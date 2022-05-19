import React from 'react'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import ExploreSharpIcon from '@mui/icons-material/ExploreSharp';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import "./Sidebar.css"
function Sidebar() {
  return (
    <div className='sidebar'>

      <SidebarRow selected title="Home" Icon={HomeIcon} />
      <SidebarRow title="Explore" Icon ={ExploreSharpIcon} />
      <SidebarRow title="Subsciptions" Icon ={SubscriptionsRoundedIcon}/>
      <SidebarRow title="Library" Icon ={VideoLibrarySharpIcon}/>
    </div>
  )
}

export default Sidebar