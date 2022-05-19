import React from 'react'
import RecommendedChild from './RecommendedChild'
import "./Recommended.css"
function Recommended() {
  return (
    <div className='Recommended'>
      <h2>Recommended Videos</h2>
      <div className='RecommendedVideos'>
        <RecommendedChild />
        <RecommendedChild />
        <RecommendedChild />
        <RecommendedChild />
        <RecommendedChild />
        <RecommendedChild />
        </div>
    </div>
  )
}

export default Recommended