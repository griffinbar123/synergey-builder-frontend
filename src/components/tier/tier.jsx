import React from 'react'
import './tier.css'

function Tier({index, tierName, selected, setTierIndex}) {
    function handleTierSelect(index) {
        setTierIndex(index)
      }
  return (
    <div className={`tier ${selected ? "selected" : ""}`} onClick={() => handleTierSelect(index)} >
        <img src={`/images/tiers/${tierName}.png`} alt={`${tierName}`}/>
        <span className="tier-name">{tierName}</span>
    </div>
  )
}

export default Tier