import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateDraftIndex, addDraftedPlayerToTeam, addPlayerDrafted, removePlayerDrafted} from './Actions/actions';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function PlayerSelection(){
    const playersAvailable = useSelector((state) => state.playersAvailableReducer);
    const draftIndex = useSelector((state) => state.draftIndexReducer);
    const draftOrder = useSelector((state) => state.draftOrderReducer);
    const dispatch = useDispatch();
    const [selectedPlayer, setSelectedPlayer] = useState();

    const MySwal = withReactContent(Swal);

    const incrementDraftIndex = () => {
        let playerSelected = playersAvailable.find(p => p.fullName === selectedPlayer);
        let team = draftOrder[draftIndex];
        if(playerSelected){
          MySwal.fire({
            title: <div>
                <h1>The Pick Is In!!!!</h1>
                <h2>{"The " + team.name + " Select: "}</h2>
                <h2>{playerSelected.fullName + ", " + playerSelected.position + ", " + playerSelected.school}</h2>
                <img className="teamLogo"  src={process.env.PUBLIC_URL + team.imagePath} alt="logo"/>
              </div>,
            width: '100%',
            timer: 4000,
            background: 'burlywood'
          })

            
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