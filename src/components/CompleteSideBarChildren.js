import React from 'react'
import "./CompleteSideBarChildren.css"
function CompleteSideBarChildren({title,Icon}) {
  return (
    <div className='CompleteSideBarChildren'>
      <Icon  className="sidebar_icon" style={{fontSize:"1.3rem"}}/>
      <h2>{title}</h2>
    </div>
  )
}

export default CompleteSideBarChildren