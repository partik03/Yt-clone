import React from 'react'
import "./SidebarRow.css"
function SidebarRow({selected,Icon,title}) {
  return (
    <div className={`SidebarRow ${selected && "selected"}`}>
      <Icon  className="sidebar_icon"/>
      <h2>{title}</h2>
    </div>
  )
}

export default SidebarRow