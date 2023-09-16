import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Player from './Player.js';
import PointAndCourt from './PointAndCourt.js';
import ScoreSheet from './ScoreSheet.js';
import Snackbar from './Snackbar.js';
import './SinglesScoreboard.css';
import StartButton from './StartButton';

export default function SinglesScoreboard({leftPlayer, setLeftPlayer, rightPlayer, setRightPlayer}) {
  const [leftPoint , setLeftPoint] = useState(0);
  const [leftIsServer, setLeftIsServer] = useState(true);
  const [leftSorR, setLeftSorR] =useState("S");
  const [rightPoint , setRightPoint] = useState(0);
  const [rightIsServer, setRightIsServer] = useState(false);
  const [rightSorR, setRightSorR] =useState("R");
  const [pointHistory, setPointHistory] = useState([[Array(60).fill(null), Array(60).fill(null)]]);
  const currentPoints = pointHistory[pointHistory.length - 1];
  const nextPoints = currentPoints.slice();
  const [isStart, setIsStart] = useState(false);
  const [isPlayerChanged, setIsPlayerChanged] = useState(false);

  function handleLeftPointClick() {
    if (leftPoint===21 || rightPoint===21) {
      return;
    }
    setRightIsServer(false);
    setLeftIsServer(true);
    if (isStart) {
      setLeftPoint(leftPoint + 1);
      if (!isPlayerChanged) {
        nextPoints[0][leftPoint + rightPoint +1] = leftPoint +1;
      } else {
        nextPoints[1][leftPoint + rightPoint +1] = leftPoint +1;
      }
      setPointHistory([...pointHistory, [nextPoints[0], nextPoints[1]]]);
    } else {
      if (isPlayerChanged) {
        setLeftSorR("R");
        setRightSorR("S");
      } else {
        setLeftSorR("S");
        setRightSorR("R");
      }
      
    }
  }

  function handleRightPointClick() {
    if (leftPoint===21 || rightPoint===21) {
      return;
    }
    setRightIsServer(true);
    setLeftIsServer(false);
    if (isStart) {
      setRightPoint(rightPoint + 1);
      if (!isPlayerChanged) {
        nextPoints[1][leftPoint + rightPoint +1] = rightPoint+1;
      } else {
        nextPoints[0][leftPoint + rightPoint +1] = rightPoint +1;
      }
      
      setPointHistory([...pointHistory, [nextPoints[0], nextPoints[1]]]);
    } else {
      if (isPlayerChanged) {
        setLeftSorR("S");
        setRightSorR("R");
      } else {
        setLeftSorR("R");
        setRightSorR("S");
      }
    }
  }

  function handleStartClick() {
    setIsStart(true);
    nextPoints[0][0] = 0;
    nextPoints[1][0] = 0;
    setPointHistory([[nextPoints[0], nextPoints[1]]]);
  }

  function calculateWinner () {
    

  }

  return (
    <div className="App">
      <Container maxWidth="lg" sx={{marginTop: {xs:7.5, sm:8.5}}}>
        <Player 
          leftPlayer={leftPlayer}
          rightPlayer={rightPlayer}
        />
        <PointAndCourt
          leftPoint={leftPoint} leftIsServer={leftIsServer}
          rightPoint={rightPoint} rightIsServer={rightIsServer}
          handleLeftPointClick={handleLeftPointClick}
          handleRightPointClick={handleRightPointClick}
          isStart={isStart}
          leftPlayer={leftPlayer} setLeftPlayer={setLeftPlayer} leftSorR={leftSorR} setLeftSorR={setLeftSorR}
          rightPlayer={rightPlayer} setRightPlayer={setRightPlayer} rightSorR={rightSorR} setRightSorR={setRightSorR}
          isPlayerChanged={isPlayerChanged} setIsPlayerChanged={setIsPlayerChanged}
        />
        <ScoreSheet 
          currentSquares={currentPoints} 
          leftPlayer={leftPlayer} leftSorR={leftSorR} 
          rightPlayer={rightPlayer} rightSorR={rightSorR}
          isPlayerChanged={isPlayerChanged}
        />
        <StartButton isStart={isStart} onStartClick={handleStartClick}/>
      </Container>
    </div>
  );
}