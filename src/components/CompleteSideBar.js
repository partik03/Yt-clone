import React from 'react'
import "./CompleteSideBar.css"
import HomeIcon from '@mui/icons-material/Home';
import ExploreSharpIcon from '@mui/icons-material/ExploreSharp';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import CompleteSideBarChildren from './CompleteSideBarChildren';
function CompleteSideBar() {
  return (
    <div className='CompleteSideBar'>
      <CompleteSideBarChildren selected title="Home" Icon={HomeIcon} />
      <CompleteSideBarChildren title="Explore" Icon ={ExploreSharpIcon} />
      <CompleteSideBarChildren title="Subsciptions" Icon ={SubscriptionsRoundedIcon}/>
      <CompleteSideBarChildren title="Library" Icon ={VideoLibrarySharpIcon}/>
      <hr />
      <CompleteSideBarChildren title="Library" Icon ={VideoLibrarySharpIcon}/>
    </div>
  )
}

export default CompleteSideBar