import React, {useState, useEffect} from 'react';
import {useTimer} from 'react-timer-hook';
import {teams, firstRound} from '../Constants/constants';
import './clock.css';

export default function Clock({ expiryTimestamp, isStarted }){

    const [draftIndex, setDraftIndex] = useState(0);
    const[teamDrafting, setTeamDrafting] = useState(firstRound[draftIndex].name)
  
    const incrementDraftIndex = () => {
      setDraftIndex(draftIndex + 1);
      const time = new Date();
      time.setSeconds(time.getSeconds() + 600);
      restart(time)
    }

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp, onExpire: () => incrementDraftIndex()});

      useEffect(() => {
        if(!isStarted){
            pause();
        }
        else{
            resume();
        }
      }, [isStarted])

      useEffect( () => {
        setTeamDrafting(firstRound[draftIndex].name);
      }, [draftIndex])


    return (
        <div style={{textAlign: 'center'}}>
              <h2>On the Clock: {teamDrafting}</h2>
              <button onClick={incrementDraftIndex}>Make Pick</button>
        <div style={{fontSize: '100px'}}>
         <span>{minutes > 9 ? minutes : "0" + minutes }</span>:<span>{seconds > 9 ? seconds : "0" + seconds}</span>
        </div>
        <p>{isRunning ? 'Running' : 'Not running'}</p>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 600);
          restart(time)
        }}>Restart</button>
      </div>
    )
}