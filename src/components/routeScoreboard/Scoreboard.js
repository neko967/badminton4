import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Player from './Player.js';
import PointAndCourt from './PointAndCourt.js';
import ScoreSheet from './ScoreSheet.js';

function Scoreboard() {
  const [leftPoint , setLeftPoint] = useState(0);
  const [leftIsServer, setLeftIsServer] = useState(false);
  const [rightPoint , setRightPoint] = useState(0);
  const [rightIsServer, setRightIsServer] = useState(true);

  function handleLeftPointClick() {
    setLeftPoint(leftPoint + 1);
    setLeftIsServer(true);
    setRightIsServer(false);
  }

  function handleRightPointClick() {
    setRightPoint(rightPoint + 1);
    setRightIsServer(true);
    setLeftIsServer(false);
  }
  return (
    <div className="App">
      <Container maxWidth="lg" sx={{marginTop: {xs:5, sm:6}}}>
        <Player />
        <PointAndCourt
          leftPoint={leftPoint} 
          leftIsServer={leftIsServer}
          handleLeftPointClick={handleLeftPointClick}
          rightPoint={rightPoint} 
          rightIsServer={rightIsServer}
          handleRightPointClick={handleRightPointClick}
        />
        <ScoreSheet />
      </Container>
    </div>
  );
}

export default Scoreboard;