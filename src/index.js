import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function DrumPad({padName, sound, dText, playSound}) {

  return (
  <button className='drum-pad' onClick={() => playSound(padName, dText)} id={`drumpad-${padName}`}>
      {padName}
      <audio src={sound} id={padName} className='clip' />
    </button>)
}


function Display({displayText}){
  return (
  <div id='display'>
      <h1>{displayText}</h1>
  </div>)
}

function App() {
  const [displayText, setDisplayText] = useState('')
  let displays = {
    Q: 'Heater 1',
    W: 'Heater 2',
    E: 'Heater 3',
    A: 'Heater 4',
    S: 'Clap',
    D: 'Open HH',
    Z: 'Kick-n-Hat',
    X: 'Kick',
    C: 'Closed HH'
  }
  let sounds = {
  Q: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  W: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  E: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  A: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  S: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  D: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  Z: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  X: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  C: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}
  
const playSound = (padName, dText) => {
  setDisplayText(dText)
  const audio = document.getElementById(padName)
  audio.currentTime = 0
  audio.play();
}

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (sounds.hasOwnProperty(event.key.toUpperCase())) {
        playSound(event.key.toUpperCase(), displays[event.key.toUpperCase()]);
      }
    });
  }, []);
  return (
  <div id="drum-machine">
      <Display displayText={displayText}/>
      <div className="padRow">
        <DrumPad padName="Q" sound={sounds.Q} dText ={displays.Q} playSound={playSound} />
        <DrumPad padName="W" sound={sounds.W} dText ={displays.W} playSound={playSound} />
        <DrumPad padName="E" sound={sounds.E} dText ={displays.E} playSound={playSound} />
      </div>
      <div className="padRow">
        <DrumPad padName="A" sound={sounds.A} dText ={displays.A} playSound={playSound} />
        <DrumPad padName="S" sound={sounds.S} dText ={displays.S} playSound={playSound} />
        <DrumPad padName="D" sound={sounds.D} dText ={displays.D} playSound={playSound} />
      </div>
            <div className="padRow">
        <DrumPad padName="Z" sound={sounds.Z} dText ={displays.Z} playSound={playSound} />
        <DrumPad padName="X" sound={sounds.X} dText ={displays.X} playSound={playSound} />
        <DrumPad padName="C" sound={sounds.C} dText ={displays.C} playSound={playSound} />
      </div>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
