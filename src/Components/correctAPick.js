import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import {replacePlayerAvailable, replacePlayerDrafted, replaceDraftedPlayerOnTeam} from "./Actions/actions";

export default function CorrectAPick(){
    const playersDrafted = useSelector((state) => state.playersDraftedReducer);
    const playersAvailable = useSelector((state) => state.playersAvailableReducer);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState("");
    const [playerToChange, setPlayerToChange] = useState("");

    let playerDraftedOptions = playersDrafted.map((player, index) => {
        return(<option key={index} value={player.fullName}>{player.fullName + ", " + player.position + ", " + player.school + "," + player.draftedBy }</option>)
    })

    let playerSelects =  playersAvailable.sort((a,b) => {if(a.fullName < b.fullName) {return -1;} if(a.fullName > b.fullName){return 1;} return 0; }).map((p, index) => {
        return (<option key={index} value={p.fullName}>{p.fullName + ", " + p.position + ", " + p.school  }</option>)
      });

    const confirm = () => {
        let playerToRemove = playersDrafted.find(p => p.fullName === playerToChange);
        let playerToAdd = playersAvailable.find(p => p.fullName === selectedPlayer);
        if(playerToRemove && playerToAdd){
            playerToAdd.draftedBy = playerToRemove.draftedBy;
            playerToRemove.draftedBy = "";
            dispatch(replacePlayerAvailable(playerToAdd, playerToRemove));       
            dispatch(replacePlayerDrafted(playerToRemove, playerToAdd));
            dispatch(replaceDraftedPlayerOnTeam(playerToRemove, playerToAdd));
            setShow(false);
        }

    }

    return (
        <div>
            <button onClick={() => setShow(true)}>Correct a Pick</button>
            <Modal show={show} onHide={() => setShow(false)} size="lg">
                <Modal.Body>
                <label>Change From: </label>
                        <select name="players" value={playerToChange} onChange={(e) => setPlayerToChange(e.target.value)}>
                            <option key={-1} value=""></option>
                            {playerDraftedOptions}
                        </select>
                    <label>Change To: </label>
                        <select name="players" value={selectedPlayer} onChange={(e) => setSelectedPlayer(e.target.value)}>
                            <option key={-1} value=""></option>
                            {playerSelects}
                        </select>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={confirm}>Confirm</button>
                </Modal.Footer>
                
            </Modal>
        </div>
    )
}