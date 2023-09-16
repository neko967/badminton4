import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Player from './Player.js';
import PointAndCourt from './PointAndCourt.js';
import ScoreSheet from './ScoreSheet.js';
import Snackbar from './Snackbar.js';
import './SinglesScoreboard.css';
import StartButton from './StartButton';

export default function Scoreboard() {
  const [leftPoint , setLeftPoint] = useState(0);
  const [leftIsServer, setLeftIsServer] = useState(true);
  const [leftSorR, setLeftSorR] =useState("S");
  const [rightPoint , setRightPoint] = useState(0);
  const [rightIsServer, setRightIsServer] = useState(false);
  const [rightSorR, setRightSorR] =useState("R");
  const [pointHistory, setPointHistory] = useState([[Array(60).fill(null), Array(60).fill(null)]]);
  const currentPoints = pointHistory[pointHistory.length - 1];
  const nextPoints = currentPoints.slice();
  const [serverHistory, setServerHistory] = useState([[Array(60).fill(null), Array(60).fill(null)]]);
  const currentServer = serverHistory[serverHistory.length - 1];
  const nextServer = currentServer.slice();


  function handleLeftPointClick() {
    setRightIsServer(false);
    setLeftIsServer(true);
    if (isStart) {
      setLeftPoint(leftPoint + 1);
      nextPoints[0][leftPoint + rightPoint +1] = leftPoint +1;
      setPointHistory([...pointHistory, [nextPoints[0], nextPoints[1]]]);
      setServerHistory([...serverHistory, [nextServer[0], nextServer[1]]]);
    } else {
      setLeftSorR("S");
      setRightSorR("R");
    }
  }

  function handleRightPointClick() {
    setRightIsServer(true);
    setLeftIsServer(false);
    if (isStart) {
      setRightPoint(rightPoint + 1);
      nextPoints[1][leftPoint + rightPoint +1] = rightPoint+1;
      setPointHistory([...pointHistory, [nextPoints[0], nextPoints[1]]]);
    } else {
      setLeftSorR("R");
      setRightSorR("S");
    }
  }

  const [isStart, setIsStart] = useState(false);
  function handleStartClick() {
    setIsStart(true);
    nextPoints[0][0] = 0;
    nextPoints[1][0] = 0;
    setPointHistory([[nextPoints[0], nextPoints[1]]]);
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
          isStart={isStart}
        />
        <ScoreSheet currentSquares={currentPoints} leftSorR={leftSorR} rightSorR={rightSorR}/>
        <StartButton isStart={isStart} onStartClick={handleStartClick}/>
      </Container>
    </div>
  );
}