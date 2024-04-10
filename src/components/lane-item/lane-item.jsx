import React from 'react'
import "./lane-item.css"

function LaneItem({lane}) {
  return (
    <div className='lane-item'>
        <img src={`/images/lane-icons/${lane}.png`} alt={`${lane}`}/>
    </div>
  )
}

export default LaneItem