import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query'
import { AnimatePresence } from 'framer-motion';
const queryClient = new QueryClient()

const filenames = [
  "plus_sign","Aatrox","Ahri","Akali","Akshan","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","AurelionSol","Azir","Bard","Belveth","Blitzcrank","Brand","Braum","Briar","Caitlyn","Camille","Cassiopeia","Chogath","Corki","Darius","Diana","Draven","DrMundo","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Gwen","Hecarim","Heimerdinger","Hwei","Illaoi","Irelia","Ivern","Janna","JarvanIV","Jax","Jayce","Jhin","Jinx","Kaisa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Khazix","Kindred","Kled","KogMaw","KSante","Leblanc","LeeSin","Leona","Lillia","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","MasterYi","Milio","MissFortune","MonkeyKing","Mordekaiser","Morgana","Naafiri","Nami","Nasus","Nautilus","Neeko","Nidalee","Nilah","Nocturne","Nunu","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","RekSai","Rell","Renata","Renekton","Rengar","Riven","Rumble","Ryze","Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Smolder","Sona","Soraka","Swain","Sylas","Syndra","TahmKench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TwistedFate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Velkoz","Vex","Vi","Viego","Viktor","Vladimir","Volibear","Warwick","Xayah","Xerath","XinZhao","Yasuo","Yone","Yorick","Yuumi","Zac","Zed","Zeri","Ziggs","Zilean","Zoe","Zyra"
  ]  

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json'},
  xhrFields : {withCredentials: true},
  body: JSON.stringify({"tier":"IRON", "participants": filenames.slice(1, 11)})
};
let url = "https://synergy-builder-server-1.onrender.com"
// let url = "http://localhost:5000"
fetch(`${url}/api/champs`, requestOptions)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimatePresence>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AnimatePresence>
    <div style={{position: 'absolute', left: 0, right: 0, width: "1px", height: "1px", overflow: "hidden"}}>
    <img src={`/images/tiers/IRON.png`} alt={``}/>
    <img src={`/images/tiers/BRONZE.png`} alt={``}/>
    <img src={`/images/tiers/SILVER.png`} alt={``}/>
    <img src={`/images/tiers/GOLD.png`} alt={``}/>
    <img src={`/images/tiers/PLATINUM.png`} alt={``}/>
    <img src={`/images/tiers/EMERALD.png`} alt={``}/>
    <img src={`/images/tiers/DIAMOND.png`} alt={``}/>
      {filenames.map((f, index) => 
        <div key={index}>
          <img src={`/images/champion/${f}.png`} alt=''/>
          <img src={`/images/loading/${f}_0.png`} alt=''/>
        </div>
      )}
  </div>
  </React.StrictMode>
);

