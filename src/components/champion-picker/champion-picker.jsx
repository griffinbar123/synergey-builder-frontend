import React, {useState} from 'react'
// import 
import "./champion-picker.css"

const filenames = [
"plus_sign","Aatrox","Ahri","Akali","Akshan","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","AurelionSol","Azir","Bard","Belveth","Blitzcrank","Brand","Braum","Briar","Caitlyn","Camille","Cassiopeia","Chogath","Corki","Darius","Diana","Draven","DrMundo","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Gwen","Hecarim","Heimerdinger","Hwei","Illaoi","Irelia","Ivern","Janna","JarvanIV","Jax","Jayce","Jhin","Jinx","Kaisa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Khazix","Kindred","Kled","KogMaw","KSante","Leblanc","LeeSin","Leona","Lillia","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","MasterYi","Milio","MissFortune","MonkeyKing","Mordekaiser","Morgana","Naafiri","Nami","Nasus","Nautilus","Neeko","Nidalee","Nilah","Nocturne","Nunu","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","RekSai","Rell","Renata","Renekton","Rengar","Riven","Rumble","Ryze","Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Smolder","Sona","Soraka","Swain","Sylas","Syndra","TahmKench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TwistedFate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Velkoz","Vex","Vi","Viego","Viktor","Vladimir","Volibear","Warwick","Xayah","Xerath","XinZhao","Yasuo","Yone","Yorick","Yuumi","Zac","Zed","Zeri","Ziggs","Zilean","Zoe","Zyra"
]

function ChampionPicker({champ, setChamps, id, blue_team}) {
  let style = blue_team ? "blue-style" : "red-style"
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const [showDropdown, setShowDropdown] = useState(false)
  if(id === 0){
  // console.log(showDropdown)
  }

  function selectImage(file) {
    setChamps(id, file)
    setShowDropdown(false)
  }

  function selectMain() {
    // setImage(file)
    setShowDropdown(true)
  }
  


  // console.log(filenames)
  
  return ( 
    <div className={`champion-border-module ${style} ${isSafari ? "safari-width":  ""}`}>
      <div className={`champion_picker_container ${showDropdown ? "overflow-scroll" : "overflow-hidden"}`}>
        {!showDropdown ? <img onClick={() => selectMain()} src={`/images/loading/${champ
        }_0.png`} alt={`${champ}`}/> :
          <div className='champion_choose'>
          {filenames.map((f, index) => 
          <div key = {index} className='champion_icon_div champs-icon-width' >
            <img onClick={() => selectImage(f)} src={`/images/champion/${f}.png`} alt={`${f}`}/>
            </div>
          )}
          </div>}
      </div>
    </div>
  )
}

export default ChampionPicker