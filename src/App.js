import React, {useEffect, useState} from 'react';
import {teams, firstRound} from './Constants/constants';
import Clock from './Components/clock';
import ScrollText from 'react-scroll-text';
import './App.css';

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  const [startDraft, setStartDraft] = useState(false);

  let roundText = "";

  for(let i = 0; i<firstRound.length; i++){
    roundText = roundText + (i+1).toString() + ": " +  firstRound[i].name + " ";
  }

  return (
    <div className="App">
      <h1>MGFL Dyansty League 2021 Rookie Draft</h1>
      <button onClick={() => setStartDraft(!startDraft)}>Start Draft</button>
      <Clock expiryTimestamp={time} isStarted={startDraft} />
      <ScrollText className="pickScroll">{roundText}</ScrollText>
    </div>
  );
}

export default App;
