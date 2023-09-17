import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Player from './Player.js';
import PointAndCourt from './PointAndCourt.js';
import ScoreSheet from './ScoreSheet.js';
import Snackbar from './Snackbar';
import StartButton from './StartButton';
import './DoublesScoreboard.css';

export default function DoublesScoreboard({ doublesLeftUpPlayer, setDoublesLeftUpPlayer,
                                            doublesLeftDownPlayer, setDoublesLeftDownPlayer,
                                            doublesRightUpPlayer, setDoublesRightUpPlayer, 
                                            doublesRightDownPlayer, setDoublesRightDownPlayer }) {
  const [leftPoint , setLeftPoint] = useState(0);
  const [leftIsServer, setLeftIsServer] = useState(true);
  const [leftSorR, setLeftSorR] =useState("S");
  const [rightPoint , setRightPoint] = useState(0);
  const [rightIsServer, setRightIsServer] = useState(false);
  const [rightSorR, setRightSorR] =useState("R");
  const [pointHistory, setPointHistory] = useState([[Array(60).fill(null), Array(60).fill(null), Array(60).fill(null), Array(60).fill(null)]]);
  const currentPoints = pointHistory[pointHistory.length - 1];
  const nextPoints = currentPoints.slice();
  const [serverHistory, setServerHistory] = useState([[Array(60).fill(null), Array(60).fill(null)]]);
  const currentServer = serverHistory[serverHistory.length - 1];
  const nextServer = currentServer.slice();
  const [isStart, setIsStart] = useState(false);

  function handleLeftPointClick() {
    setRightIsServer(false);
    setLeftIsServer(true);
    if (isStart) {
      setLeftPoint(leftPoint + 1);
      if (true) {
        nextPoints[1][leftPoint + rightPoint +1] = leftPoint +1;
      } else {
        nextPoints[1][leftPoint + rightPoint +1] = leftPoint +1;
      }
      setPointHistory([...pointHistory, [nextPoints[0], nextPoints[1], nextPoints[2], nextPoints[3]]]);
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
      if (true) {
        nextPoints[2][leftPoint + rightPoint +1] = rightPoint+1;
      } else {
        nextPoints[3][leftPoint + rightPoint +1] = rightPoint+1;
      }
      
      setPointHistory([...pointHistory, [nextPoints[0], nextPoints[1], nextPoints[2], nextPoints[3]]]);
    } else {
      setLeftSorR("R");
      setRightSorR("S");
    }
  }

  function handleStartClick() {
    setIsStart(true);
    nextPoints[1][0] = 0;
    nextPoints[2][0] = 0;
    setPointHistory([[nextPoints[0], nextPoints[1], nextPoints[2], nextPoints[3]]]);
    if (leftIsServer) {
      nextServer[0][0] = true;
      nextServer[1][0] = false;
    } else {
      nextServer[0][0] = false;
      nextServer[1][0] = true;
    }
    setServerHistory([[nextServer[0], nextServer[1]]]);
  }

  return (
    <div className="App">
      <Container maxWidth="lg" sx={{marginTop: {xs:7.5, sm:8.5}}}>
        <Player leftUpPlayer={doublesLeftUpPlayer} leftDownPlayer={doublesLeftDownPlayer} 
                rightUpPlayer={doublesRightUpPlayer} rightDownPlayer={doublesRightDownPlayer}
        />
        <PointAndCourt leftPoint={leftPoint} leftIsServer={leftIsServer}
                       handleLeftPointClick={handleLeftPointClick}
                       rightPoint={rightPoint} rightIsServer={rightIsServer}
                       handleRightPointClick={handleRightPointClick}
                       leftUpPlayer={doublesLeftUpPlayer} leftDownPlayer={doublesLeftDownPlayer} 
                       rightUpPlayer={doublesRightUpPlayer} rightDownPlayer={doublesRightDownPlayer}
        />
        <ScoreSheet 
          currentSquares={currentPoints}
          leftUpPlayer={doublesLeftUpPlayer} leftDownPlayer={doublesLeftDownPlayer}  leftSorR={leftSorR} 
          rightUpPlayer={doublesRightUpPlayer} rightDownPlayer={doublesRightDownPlayer} rightSorR={rightSorR}
        />
        <StartButton isStart={isStart} onStartClick={handleStartClick}/>
      </Container>
    </div>
  );
}