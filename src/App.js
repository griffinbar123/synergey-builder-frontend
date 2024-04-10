import React, { useState } from 'react';
import './App.css';
import ChampionsContainer from './components/champions-container/champions-container';
import PredictButton from './components/predict-button/predict-button';
import TierContainer from './components/tier-container/tier-container';
import LaneContainer from './components/lane-container/lane-container';
import {QueryClient, QueryClientProvider} from 'react-query'
import WinOrLoad from './components/win-or-load/win-or-load';

const queryClient = new QueryClient()

let tiers = ["IRON", "BRONZE", "SILVER", "GOLD", "PLATINUM", "EMERALD", "DIAMOND"]

function App() {

  const [champs, setChamps] = useState(["plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign"]);
  const [tierIndex, setTierIndex] = useState(0)
  const [showWinOrLoad, setShowWinOrLoad] = useState(false)
  // const [win, setWin] = useState(false)

  function submitChamps(){
    setShowWinOrLoad(true)
  }

  function modifyChamps(index, name) {
    setShowWinOrLoad(false)
    const champs2 = champs.map((c, i) => {
      if (i === index) {
        return name;
      } else {
        return c;
      }
    });
    setChamps(champs2)
  }
  // console.log("heree", champs)

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <div className='landing-page'>
          <h1 className='title'>Synergy Builder</h1>
          <p>
            some sort of really cool tagline describing our websites wonderful capabilities
          </p>
        </div>
        <div className='predict-tool'>
        <div className='champs champs-margin'>
            <TierContainer tiers={tiers} selectedIndex={tierIndex} setTierIndex = {setTierIndex}/>
            <LaneContainer/>
            <ChampionsContainer champs={champs.slice(0, 5)} setChamps={modifyChamps} startId={0} blue_team = {true}/>
            <span className='vs'>VS</span>
            <ChampionsContainer champs={champs.slice(5, 10)} setChamps={modifyChamps} startId={5} blue_team = {false}/>
            <LaneContainer/>
        {showWinOrLoad && <WinOrLoad tier={tiers[tierIndex]} champs={champs}/>}
        </div>
        <PredictButton submitChamps={submitChamps}/>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
