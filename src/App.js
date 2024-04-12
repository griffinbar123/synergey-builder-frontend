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

const filenames = [
  "plus_sign","Aatrox","Ahri","Akali","Akshan","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","AurelionSol","Azir","Bard","Belveth","Blitzcrank","Brand","Braum","Briar","Caitlyn","Camille","Cassiopeia","Chogath","Corki","Darius","Diana","Draven","DrMundo","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Gwen","Hecarim","Heimerdinger","Hwei","Illaoi","Irelia","Ivern","Janna","JarvanIV","Jax","Jayce","Jhin","Jinx","Kaisa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Khazix","Kindred","Kled","KogMaw","KSante","Leblanc","LeeSin","Leona","Lillia","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","MasterYi","Milio","MissFortune","MonkeyKing","Mordekaiser","Morgana","Naafiri","Nami","Nasus","Nautilus","Neeko","Nidalee","Nilah","Nocturne","Nunu","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","RekSai","Rell","Renata","Renekton","Rengar","Riven","Rumble","Ryze","Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Smolder","Sona","Soraka","Swain","Sylas","Syndra","TahmKench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TwistedFate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Velkoz","Vex","Vi","Viego","Viktor","Vladimir","Volibear","Warwick","Xayah","Xerath","XinZhao","Yasuo","Yone","Yorick","Yuumi","Zac","Zed","Zeri","Ziggs","Zilean","Zoe","Zyra"
  ]

function App() {

  const [champs, setChamps] = useState(["plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign", "plus_sign"]);
  const [tierIndex, setTierIndex] = useState(0)
  const [showWinOrLoad, setShowWinOrLoad] = useState(false)
  // const [win, setWin] = useState(false)

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
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <div className='landing-page'>
          <h1 className='title'>Synergy Builder</h1>
          <p>
            some sort of really cool tagline describing our websites wonderful capabilities
          </p>
          {isSafari && <p className='safari-text'>We do not recommend using Safari as your browser, as there are slight visual problems with its interaction with our tool.</p>}
        </div>
        <div className='predict-tool'>
        <div className={`champs champs-margin ${showWinOrLoad ? "champs-aspect-percentage" : "champs-aspect-normal"}`}>
            <TierContainer tiers={tiers} selectedIndex={tierIndex} setTierIndex = {modifyTierIndex}/>
            <LaneContainer/>
            <ChampionsContainer champs={champs.slice(0, 5)} setChamps={modifyChamps} startId={0} blue_team = {true}/>
            <span className='vs'>VS</span>
            <ChampionsContainer champs={champs.slice(5, 10)} setChamps={modifyChamps} startId={5} blue_team = {false}/>
            <LaneContainer/>
        {showWinOrLoad && <WinOrLoad tier={tiers[tierIndex]} champs={champs}/>}
        </div>
        <PredictButton submitChamps={submitChamps}/>
        </div>
        {filenames.map((f) => <div className='hidden-div'><img src={`/images/loading/${f}_0.png`} alt=''/></div>)}
      </div>
    </QueryClientProvider>
  );
}

export default App;
