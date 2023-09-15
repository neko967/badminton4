import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Player from './Player.js';
import PointAndCourt from './PointAndCourt.js';
import ScoreSheet from './ScoreSheet.js';
import SpeedDialTooltipOpen from './SpeedDialTooltipOpen.js';
import Snackbar from './Snackbar';
import './Scoreboard.css';

export default function Scoreboard() {
  const [leftPoint , setLeftPoint] = useState(0);
  const [leftIsServer, setLeftIsServer] = useState(false);
  const [rightPoint , setRightPoint] = useState(0);
  const [rightIsServer, setRightIsServer] = useState(true);
  const [pointHistory, setPointHistory] = useState([[Array(60).fill(null), Array(60).fill(null)]]);
  const currentSquares = pointHistory[pointHistory.length - 1];
  const nextSquares = currentSquares.slice();


  function handleLeftPointClick() {
    setLeftPoint(leftPoint + 1);
    setRightIsServer(false);
    setLeftIsServer(true);
    nextSquares[0][leftPoint + rightPoint +1] = leftPoint +1;
    setPointHistory([...pointHistory, [nextSquares[0], nextSquares[1]]]);
  }

  function handleRightPointClick() {
    setRightPoint(rightPoint + 1);
    setRightIsServer(true);
    setLeftIsServer(false);
    nextSquares[1][leftPoint + rightPoint +1] = rightPoint+1;
    setPointHistory([...pointHistory, [nextSquares[0], nextSquares[1]]]);
  }


  return (
    <div className="App">
      <Container maxWidth="lg" sx={{marginTop: {xs:7.5, sm:8.5}}}>
        <Player />
        <PointAndCourt
          leftPoint={leftPoint} 
          leftIsServer={leftIsServer}
          handleLeftPointClick={handleLeftPointClick}
          rightPoint={rightPoint} 
          rightIsServer={rightIsServer}
          handleRightPointClick={handleRightPointClick}
        />
        <ScoreSheet currentSquares={currentSquares}/>
        <Snackbar />
        <SpeedDialTooltipOpen />
      </Container>
    </div>
  );
}