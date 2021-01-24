import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Clock from './Components/clock';
import PlayerSelection from './Components/playerSelection';
import InfoScroll from './Components/infoScroll';
import LastDrafted from './Components/lastDrafted';
import TeamDrafting from './Components/teamDrafting';
import ReassignPick from './Components/reassignPick';
import RoundHeader from './Components/roundHeader';
import DraftBoard from "./Components/draftBoard";
import CorrectAPick from "./Components/correctAPick";
import './App.css';

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  const [startDraft, setStartDraft] = useState(false);


  return (
    <div className="App">
      <h1>MGFL Dyansty League 2021 Rookie Draft</h1>
      <RoundHeader />
      <Container fluid>
        <Row>
          <Col>
            <TeamDrafting />
          </Col>

          <Col>
            <button onClick={() => setStartDraft(!startDraft)}>Start Draft</button>
            <ReassignPick />
            <CorrectAPick />
            <DraftBoard />
            <Clock expiryTimestamp={time} isStarted={startDraft} />
            <PlayerSelection />
          </Col>

          <Col>
          <LastDrafted />
          </Col>
        </Row>
      </Container>

      <InfoScroll />
    </div>
  );
}

export default App;
