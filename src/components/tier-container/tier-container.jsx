import React from 'react'
import './tier-container.css'
import Tier from '../tier/tier'

function TierContainer({tiers, selectedIndex, setTierIndex}) {
  return (
    <div className='tier-container'>
      {tiers.map((tier, index) => 
        <Tier key = {index} index = {index} tierName={tier} selected={index===selectedIndex} setTierIndex={setTierIndex}/>
        )}
    </div>
  )
}

export default TierContainer