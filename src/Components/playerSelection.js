import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateDraftIndex, addDraftedPlayerToTeam, addPlayerDrafted, removePlayerDrafted} from './Actions/actions';
import './clock.css';

export default function PlayerSelection(){
    const playersAvailable = useSelector((state) => state.playersAvailableReducer);
    const draftIndex = useSelector((state) => state.draftIndexReducer);
    const draftOrder = useSelector((state) => state.draftOrderReducer);
    const dispatch = useDispatch();
    const [selectedPlayer, setSelectedPlayer] = useState();

    const incrementDraftIndex = () => {
        let playerSelected = playersAvailable.find(p => p.fullName === selectedPlayer);
        if(playerSelected){
            let team = draftOrder[draftIndex];
            playerSelected.picked = draftIndex;
            playerSelected.draftedBy = team.name;
            dispatch(addDraftedPlayerToTeam(playerSelected, team));
            dispatch(addPlayerDrafted(playerSelected));
            dispatch(removePlayerDrafted(playerSelected));
            dispatch(updateDraftIndex());
        }
        
      }

      let playerSelects =  playersAvailable.map((p, index) => {
        return (<option key={index} value={p.fullName}>{p.fullName}</option>)
      });


    

    return (
        <div>
            <button onClick={incrementDraftIndex}>Make Pick</button>
            <label>Players: </label>
            <select name="players" value={selectedPlayer} onChange={(e) => setSelectedPlayer(e.target.value)}>
              <option key={-1} value=""></option>
              {playerSelects}
            </select>
      </div>
    )
}