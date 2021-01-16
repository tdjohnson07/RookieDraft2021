import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Clock from './Components/clock';
import PlayerSelection from './Components/playerSelection';
import InfoScroll from './Components/infoScroll';
import LastDrafted from './Components/lastDrafted';
import './App.css';

function App() {
  const time = new Date();
  const draftIndex = useSelector((state) => state.draftIndexReducer);
  const draftOrder = useSelector((state) => state.draftOrderReducer);
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  const [startDraft, setStartDraft] = useState(false);

  return (
    <div className="App">
      <h1>MGFL Dyansty League 2021 Rookie Draft</h1>
      <Container fluid>
        <Row>
          <Col>
            <h2>On the Clock: {draftOrder[draftIndex]?.name}</h2>
            <img className="teamLogo"  src={process.env.PUBLIC_URL + draftOrder[draftIndex]?.imagePath} alt="logo"/>
          </Col>

          <Col>
            <button onClick={() => setStartDraft(!startDraft)}>Start Draft</button>
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
