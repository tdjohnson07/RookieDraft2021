import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {teams, firstRound} from './Constants/constants';
import {updateDraftIndex} from './Components/Actions/actions';
import Clock from './Components/clock';
import ScrollText from 'react-scroll-text';
import {useDispatch} from 'react-redux';
import './App.css';

function App() {
  const time = new Date();
  const teamDrafting = useSelector((state) => state.teamDraftingReducer);
  const draftIndex = useSelector((state) => state.draftIndexReducer);
  const dispatch = useDispatch();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  const [startDraft, setStartDraft] = useState(false);

  let roundText = "";

  for(let i = 0; i<firstRound.length; i++){
    roundText = roundText + (i+1).toString() + ": " +  firstRound[i].name + " ";
  }

  const incrementDraftIndex = () => {
    dispatch(updateDraftIndex())
  }

  return (
    <div className="App">
      <h1>MGFL Dyansty League 2021 Rookie Draft</h1>
      <button onClick={() => setStartDraft(!startDraft)}>Start Draft</button>
      <h2>On the Clock: {firstRound[draftIndex]?.name}</h2>
      <img className="teamLogo"  src={process.env.PUBLIC_URL + firstRound[draftIndex]?.imagePath} alt="image"/>
      <button onClick={incrementDraftIndex}>Make Pick</button>
      <Clock expiryTimestamp={time} isStarted={startDraft} />
      <ScrollText className="pickScroll">{roundText}</ScrollText>
    </div>
  );
}

export default App;
