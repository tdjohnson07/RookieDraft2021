import React, {useEffect} from 'react';
import {useTimer} from 'react-timer-hook';
import {useDispatch, useSelector} from 'react-redux';
import {updateDraftIndex, addDraftedPlayerToTeam, addPlayerDrafted, removePlayerDrafted} from './Actions/actions';
import './clock.css';

export default function Clock({ expiryTimestamp, isStarted }){

    const dispatch = useDispatch();
    const draftIndex = useSelector((state) => state.draftIndexReducer);
    const draftOrder = useSelector((state) => state.draftOrderReducer);

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp, onExpire: () => timeExpired()});

      const timeExpired = () => {

        const team = draftOrder[draftIndex];
        const missPlayer = {fullName: 'Missed Pick ' + draftIndex.toString(), school: "NA", position: "NA", draftedBy: team.name};
        dispatch(updateDraftIndex());
        dispatch(addPlayerDrafted(missPlayer));
        dispatch(addDraftedPlayerToTeam(missPlayer, team));
      }

      useEffect(() => {
        if(!isStarted){
            pause();
        }
        else{
            resume();
        }
      }, [isStarted])

      useEffect(() => {
          if(draftIndex > 0){
            const time = new Date();
            time.setSeconds(time.getSeconds() + 600);
              restart(time);
          }
      }, [draftIndex]);



    return (
        <div style={{textAlign: 'center'}}>
        <div style={{fontSize: '100px'}}>
         <span>{minutes > 9 ? minutes : "0" + minutes }</span>:<span>{seconds > 9 ? seconds : "0" + seconds}</span>
        </div>
        <p>{isRunning ? 'Running' : 'Not running'}</p>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button onClick={() => {
          // Restarts to 10 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 600);
          restart(time)
        }}>Restart</button>
      </div>
    )
}