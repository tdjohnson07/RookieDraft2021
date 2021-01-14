import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {teams, firstRound} from './Constants/teams';
import {players} from './Constants/players';
import {updateDraftIndex} from './Components/Actions/actions';
import Clock from './Components/clock';
import ScrollText from 'react-scroll-text';
import {useDispatch} from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
  const time = new Date();
  const teamDrafting = useSelector((state) => state.teamDraftingReducer);
  const draftIndex = useSelector((state) => state.draftIndexReducer);
  const dispatch = useDispatch();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  const [startDraft, setStartDraft] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState();
  const [playersState, setPlayersState ] = useState([...players]);
  const [teamsState, setTeamsState] = useState([...teams]);
  const [firstRoundState, setFirstRoundState] = useState([]);


  let roundText = "";

  useEffect(() => {
      console.log(firstRoundState);
  }, [firstRoundState])

  for(let i = 0; i<firstRound.length; i++){
    let playerPicked = " ";
    if(firstRoundState.length > i){
      playerPicked = " " + firstRoundState[i].fullName;
    }
    roundText = roundText + (i+1).toString() + ": " +  firstRound[i].name + playerPicked;
  }


  const incrementDraftIndex = () => {
    let currentPlayers = [...playersState];
    let indexOfPlayer = currentPlayers.indexOf(currentPlayers.find(c => c.fullName === selectedPlayer));
    if(indexOfPlayer > -1){
      let currentPlayer = currentPlayers[indexOfPlayer];
      let currentTeams = [...teamsState];
      let currentTeamIndex = currentTeams.indexOf(currentTeams.find(c => c.name === firstRound[draftIndex]?.name));
      currentPlayer.picked = draftIndex;
      currentTeams[currentTeamIndex].playersSelectd.push(currentPlayer);
      let currentRound = [...firstRoundState];
      currentRound.push(currentPlayer);
      currentPlayers.splice(indexOfPlayer, 1);
      setFirstRoundState([...currentRound]);
      setPlayersState([...currentPlayers]);
      setTeamsState([...currentTeams]);
      dispatch(updateDraftIndex())
    }
  }

  useEffect(() => {
    console.log(teamsState)
  }, [teamsState]);

  let playerSelects = playersState.map((p, index) => {
    return (<option key={index} value={p.fullName}>{p.fullName}</option>)
  })

  return (
    <div className="App">
      <h1>MGFL Dyansty League 2021 Rookie Draft</h1>
      <Container fluid>
        <Row>
          <Col>
            <h2>On the Clock: {firstRound[draftIndex]?.name}</h2>
            <img className="teamLogo"  src={process.env.PUBLIC_URL + firstRound[draftIndex]?.imagePath} alt="logo"/>
          </Col>

          <Col>
            <button onClick={() => setStartDraft(!startDraft)}>Start Draft</button>
            <Clock expiryTimestamp={time} isStarted={startDraft} />
            <button onClick={incrementDraftIndex}>Make Pick</button>
            <label>Players: </label>
            <select name="players" value={selectedPlayer} onChange={(e) => setSelectedPlayer(e.target.value)}>
              <option key={-1} value=""></option>
              {playerSelects}
            </select>
          </Col>

          <Col>
          </Col>
        </Row>
      </Container>

      <ScrollText className="pickScroll">{roundText}</ScrollText>
    </div>
  );
}

export default App;
