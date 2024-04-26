import React, { useState } from 'react';
import './App.css';
import ChampionsContainer from './components/champions-container/champions-container';
import PredictButton from './components/predict-button/predict-button';
import TierContainer from './components/tier-container/tier-container';
import LaneContainer from './components/lane-container/lane-container';
import WinOrLoad from './components/win-or-load/win-or-load';
import { motion } from "framer-motion"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

let tiers = ["IRON", "BRONZE", "SILVER", "GOLD", "PLATINUM", "EMERALD", "DIAMOND"]


function App() {
  const [champs, setChamps] = useState(["plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign"]);
  const [tierIndex, setTierIndex] = useState(0)
  const [showWinOrLoad, setShowWinOrLoad] = useState(false)
//   const [scope, animate] = useAnimate()
//   useEffect(() => {
//     if (showWinOrLoad) {
//       const enterAnimation = async () => {
//         await animate(scope.current, { opacity: 0 })
//         // await animate("div", { opacity: 1, x: 0 })
//       }
//       enterAnimation()

//     } else {
//       const exitAnimation = async () => {
//         // await animate("div", { opacity: 0, x: -100 })
//         await animate(scope.current, { opacity: 1 })
//       }
      
//       exitAnimation()
//     }
//  }, [showWinOrLoad])


  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  function submitChamps(){
    setShowWinOrLoad(true)
  }

  function modifyChamps(index, name) {
    setShowWinOrLoad(false)
    const champs2 = champs.map((c, i) => {
      if (i === index) {
        return name
      } else {
        return c
      }
    });
    setChamps(champs2)
  }
  function modifyTierIndex(tierI) {
    setShowWinOrLoad(false)
    setTierIndex(tierI);
  }

  // console.log("champs", champs)

  return (
      <div className='App'>
        <motion.div initial={{ opacity: 0.0 }} whileInView={{ opacity: 1}} transition={{duration: 1}} className='landing-page'>
          <h1 className='title'>Synergy Builder</h1>
          <p>
            some sort of really cool tagline describing our websites wonderful capabilities
          </p>
          {isSafari && false && <p className='safari-text'>We do not recommend using Safari as your browser, as there are slight visual problems with its interaction with our tool.</p>}
        </motion.div>
        <motion.div initial={{ opacity: 0.0 }} whileInView={{ opacity: 1}} transition={{duration: 1}} className='predict-tool'>
          <motion.div layout={false} transition={{duration: 0.6}}  className={`champs champs-margin ${showWinOrLoad ? "champs-aspect-percentage" : "champs-aspect-normal"}`}>
              <TierContainer tiers={tiers} selectedIndex={tierIndex} setTierIndex = {modifyTierIndex}/>
              <LaneContainer/>
              <ChampionsContainer champs={champs.slice(0, 5)} setChamps={modifyChamps} startId={0} blue_team = {true}/>
              <span className='vs'>VS</span>
              <ChampionsContainer champs={champs.slice(5, 10)} setChamps={modifyChamps} startId={5} blue_team = {false}/>
              <LaneContainer/>
          {showWinOrLoad && <WinOrLoad tier={tiers[tierIndex]} champs={champs}/>}
          </motion.div>
          <PredictButton submitChamps={submitChamps}/>
        </motion.div>
        <SpeedInsights />
        <Analytics/>
      </div>
  );
}

export default App;
