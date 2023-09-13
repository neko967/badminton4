import React from 'react';
import Container from '@mui/material/Container';
import Player from './Player.js';
import PointAndCourt from './PointAndCourt.js';
import ScoreSheet from './ScoreSheet.js';

function Scoreboard() {
  return (
    <div className="App">
      <Container maxWidth="lg" sx={{marginTop: {xs:5, sm:6}}}>
        <Player />
        <PointAndCourt/>
        <ScoreSheet />
      </Container>
    </div>
  );
}

export default Scoreboard;