import React from 'react'
import './predict-button.css'

function PredictButton({submitChamps, winOrLoad}) {
  return (
    <div className={`predict-button-module module-button module-button-margin winOrLoad ${winOrLoad && "win-or-load-present"}`}>
      <button onClick={submitChamps} className='predict-button text-size'>PREDICT!</button>
    </div>
  )
}

export default PredictButton