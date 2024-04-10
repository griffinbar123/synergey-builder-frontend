import React from 'react'
import './win-percentage.css'

function WinPercantage({width, percentage}) {
    let blue_percentage = percentage;
    let red_percentage = 1 - blue_percentage
    let max_percentage = Math.max(blue_percentage, red_percentage)

    const redBarWidth = {
        width: red_percentage*width
    }
    const blueBarWidth = {
        width: blue_percentage*width
    }

  return (
    <div className='win-percentage'>
        <div className='bar'>
        <div className='blue-bar' style={blueBarWidth}></div>
            <div className='red-bar' style={redBarWidth}></div>
        </div>
        <div className='victories'>
            <div className='blue-victory image'>
                <img src='/images/vict.png' alt='blue victory'/>
            </div>
            <span className={`text-percent ${max_percentage === blue_percentage ? "blue-color": "red-color"}`}>{`${Math.floor(max_percentage * 100)}%`}</span>
            <div className='red-victory image'>
                <img src='/images/vict.png' alt='blue victory'/>
            </div>
        </div>
    </div>
  )
}

export default WinPercantage