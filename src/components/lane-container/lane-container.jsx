import React from 'react'
import "./lane-container.css"
import LaneItem from '../lane-item/lane-item'

function LaneContainer() {
  return (
    <div className='lane-container'>
        <LaneItem lane={"top"}/>
        <LaneItem lane={"jungle"}/>
        <LaneItem lane={"middle"}/>
        <LaneItem lane={"bottom"}/>
        <LaneItem lane={"support"}/>
    </div>
  )
}

export default LaneContainer