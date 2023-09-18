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
  const [rightPoint , setRightPoint] = useState(0);
  const [rightIsServer, setRightIsServer] = useState(false);
  const [pointHistory, setPointHistory] = useState([[Array(60).fill(null), Array(60).fill(null), Array(60).fill(null), Array(60).fill(null)]]);
  const currentPoints = pointHistory[pointHistory.length - 1];
  const nextPoints = currentPoints.slice();
  const [SorRHistory, setSorRHistory] = useState([[Array(60).fill(null), Array(60).fill(null), Array(60).fill(null), Array(60).fill(null)]]);
  const currentSorR = SorRHistory[SorRHistory.length - 1];
  const nextSorR = currentSorR.slice();
  const [isStart, setIsStart] = useState(false);
  const [manipulated_0, setManipulated_0] = useState(0);
  const [manipulated_1, setManipulated_1] = useState(1);
  const [manipulated_2, setManipulated_2] = useState(2);
  const [manipulated_3, setManipulated_3] = useState(3);

  function handleLeftPointClick() {
    setRightIsServer(false);
    setLeftIsServer(true);
    
    if (isStart) {
      setLeftPoint(leftPoint + 1);
      if (leftIsServer) {
        if (currentPoints[manipulated_0][leftPoint+rightPoint]!==null) {
          nextPoints[manipulated_0][leftPoint + rightPoint +1] = leftPoint +1;
        } else {
          nextPoints[manipulated_1][leftPoint + rightPoint +1] = leftPoint +1;
        }
      }
      if (rightIsServer) {
        if (currentPoints[manipulated_0][leftPoint+rightPoint]===null && currentPoints[manipulated_1][leftPoint+rightPoint]===null) {
          if (currentPoints[manipulated_0].reduce(function (a, b) {return Math.max(a, b);}) > currentPoints[manipulated_1].reduce(function (a, b) {return Math.max(a, b);})) {
            nextPoints[manipulated_1][leftPoint + rightPoint +1] = leftPoint +1;
          } else { 
            if (currentPoints[manipulated_0].reduce(function (a, b) {return Math.max(a, b);})===0 && currentPoints[manipulated_1].reduce(function (a, b) {return Math.max(a, b);})===0) {
              if (currentPoints[manipulated_0][0]!==null) {
                nextPoints[manipulated_1][leftPoint + rightPoint +1] = leftPoint +1;
              } else {
                nextPoints[manipulated_0][leftPoint + rightPoint +1] = leftPoint +1;
              }
            } else {
              nextPoints[manipulated_0][leftPoint + rightPoint +1] = leftPoint +1;
            }
          }
        } else {
          if (currentPoints[manipulated_0][leftPoint+rightPoint]!==null) {
            nextPoints[manipulated_1][leftPoint + rightPoint +1] = leftPoint +1;
          } else {
            nextPoints[manipulated_0][leftPoint + rightPoint +1] = leftPoint +1;
          }
        }
      }
      setPointHistory([...pointHistory, [nextPoints[0], nextPoints[1], nextPoints[2], nextPoints[3]]]);
    }
  }

  function handleRightPointClick() {
    if (isStart) {
      setRightPoint(rightPoint + 1);
      if (rightIsServer) {
        if (currentPoints[manipulated_2][leftPoint+rightPoint]!==null) {
          nextPoints[manipulated_2][leftPoint + rightPoint +1] = rightPoint +1;
        } else {
          nextPoints[manipulated_3][leftPoint + rightPoint +1] = rightPoint +1;
        }
      }
      if (leftIsServer) {
        if (currentPoints[manipulated_2][leftPoint+rightPoint]===null && currentPoints[manipulated_3][leftPoint+rightPoint]===null) {
          if (currentPoints[manipulated_2].reduce(function (a, b) {return Math.max(a, b);}) > currentPoints[manipulated_3].reduce(function (a, b) {return Math.max(a, b);})) {
            nextPoints[manipulated_3][leftPoint + rightPoint +1] = rightPoint +1;
          } else { 
            if (currentPoints[manipulated_2].reduce(function (a, b) {return Math.max(a, b);})===0 && currentPoints[manipulated_3].reduce(function (a, b) {return Math.max(a, b);})===0) {
              if (currentPoints[manipulated_2][0]!==null) {
                nextPoints[manipulated_3][leftPoint + rightPoint +1] = rightPoint +1;
              } else {
                nextPoints[manipulated_2][leftPoint + rightPoint +1] = rightPoint +1;
              }
            } else {
              nextPoints[manipulated_2][leftPoint + rightPoint +1] = rightPoint +1;
            }
          }
        } else {
          if (currentPoints[manipulated_2][leftPoint+rightPoint]!==null) {
            nextPoints[manipulated_3][leftPoint + rightPoint +1] = rightPoint +1;
          } else {
            nextPoints[manipulated_2][leftPoint + rightPoint +1] = rightPoint +1;
          }
        }
      }
      setPointHistory([...pointHistory, [nextPoints[0], nextPoints[1], nextPoints[2], nextPoints[3]]]);
    }
    setRightIsServer(true);
    setLeftIsServer(false);
  }

  function handleStartClick() {
    setIsStart(true);
    nextPoints[manipulated_1][0] = 0;
    nextPoints[manipulated_2][0] = 0;
    setPointHistory([[nextPoints[0], nextPoints[1], nextPoints[2], nextPoints[3]]]);
    if (leftIsServer){
      nextSorR[manipulated_1][0] = "S"
      nextSorR[manipulated_2][0] = "R"
    } else {
      nextSorR[manipulated_1][0] = "R"
      nextSorR[manipulated_2][0] = "S"
    }
    setSorRHistory([[nextSorR[0], nextSorR[1], nextSorR[2], nextSorR[3]]]);
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
                       isStart={isStart}
                       manipulated_0={manipulated_0} setManipulated_0={setManipulated_0} 
                       manipulated_1={manipulated_1} setManipulated_1={setManipulated_1}
                       manipulated_2={manipulated_2} setManipulated_2={setManipulated_2}
                       manipulated_3={manipulated_3} setManipulated_3={setManipulated_3}
        />
        <ScoreSheet 
          currentPoints={currentPoints} currentSorR={currentSorR}
          leftUpPlayer={doublesLeftUpPlayer} leftDownPlayer={doublesLeftDownPlayer}
          rightUpPlayer={doublesRightUpPlayer} rightDownPlayer={doublesRightDownPlayer}
          manipulated_0={manipulated_0} manipulated_1={manipulated_1} manipulated_2={manipulated_2} manipulated_3={manipulated_3}
        />
        <StartButton isStart={isStart} onStartClick={handleStartClick}/>
      </Container>
    </div>
  );
}