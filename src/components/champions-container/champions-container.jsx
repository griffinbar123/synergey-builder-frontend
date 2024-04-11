import React from 'react'
import './champions-container.css'
import ChampionPicker from '../champion-picker/champion-picker'

function ChampionsContainer({champs, setChamps, startId, blue_team}) {
  let sub = blue_team ? 0 : 5
  return (
    <div className='champions-container'>
        <ChampionPicker champ={champs[startId- sub]} setChamps={setChamps} id={startId} blue_team = {blue_team}/>
        <ChampionPicker champ={champs[startId+1- sub]} setChamps={setChamps} id={startId+1} blue_team = {blue_team}/>
        <ChampionPicker champ={champs[startId+2- sub]} setChamps={setChamps} id={startId+2} blue_team = {blue_team}/>
        <ChampionPicker champ={champs[startId+3- sub]} setChamps={setChamps} id={startId+3} blue_team = {blue_team}/>
        <ChampionPicker champ={champs[startId+4- sub]} setChamps={setChamps} id={startId+4} blue_team = {blue_team}/>
    </div>
  )
}

export default ChampionsContainer