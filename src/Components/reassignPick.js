import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import {updateDraftOrder} from './Actions/actions';

export default function ReassignPick(){
    const [show, setShow] = useState(false);
    const [round, setRound] = useState(1);
    const [pick, setPick] = useState(1);
    const [selectedTeam, setSelectedTeam] = useState('');
    const teams = useSelector((state) => state.teamsReducer);
    const dispatch = useDispatch();

    let roundOptions = [1,2,3,4].map((value) => {
        return (<option key={value} value={value}>{value}</option>)
    })

    let pickOptions = [1,2,3,4,5,6,7,8,9,10,11,12].map((value) => {
        return(<option key={value} value={value}>{value}</option>)
    })

    let teamOptions = teams.map((team, index) =>{
        return (<option key={index} value={team.name}>{team.name}</option>)
    })

    const updateDraft = () => {
        let draftIndex = ((round -1) * 12) + (pick - 1);
        let team = teams.find((t) => t.name === selectedTeam);
        dispatch(updateDraftOrder(team, draftIndex));
    }

    return (
        <div>
            <button onClick={() => setShow(true)}>Reassign Pick</button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Body>
                    <label>Round: </label>
                    <select value={round} onChange={(e) => setRound(e.target.value)}>
                        {roundOptions}
                    </select>
                    <label>Pick: </label>
                    <select value={pick} onChange={(e) => setPick(e.target.value)}>
                        {pickOptions}
                    </select>
                    <label>Team: </label>
                    <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
                        <option key={-1} value={''}></option>
                        {teamOptions}
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => setShow(false) }>Close</button>
                    <button onClick={updateDraft}>Update</button>
                </Modal.Footer>
                
            </Modal>
      </div>
    )
}