import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Player from './Player.js';
import PointAndCourt from './PointAndCourt.js';
import ScoreSheet from './ScoreSheet.js';
import StartButton from './StartButton';
import './DoublesScoreboard.css';
import Call from './Call.js';

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
  const [isHorizPlayerChanged, setIsHorizPlayerChanged] = useState(false);
  const [isLeftVertPlayerChanged, setIsLeftvertPlayerChanged] = useState(false);
  const [isRightVertPlayerChanged, setIsRightVertPlayerChanged] = useState(false);
  const [leftConsecutivePointSwitch, setLeftConsecutivePointSwitchSwitch] = useState(false);
  const [rightConsecutivePointSwitch, setRightConsecutivePointSwitchSwitch] = useState(false);
  let Players = Object.assign({}, [doublesLeftUpPlayer, doublesLeftDownPlayer, doublesRightUpPlayer, doublesRightDownPlayer] )
  const [deuce, setDeuce] = useState(false);
  const [snackPack, setSnackPack] = useState([]);
  const [message, setMessage] = useState("選手の位置とサーバーを決めてください");
  const [isFinish, setIsFinish] = useState(false);

  function handleLeftPointClick() {
    if ((leftPoint===21 || rightPoint===21) && !deuce) {
      setIsFinish(true);
      return;
    }
    if ( Math.abs(leftPoint - rightPoint) === 2 && deuce) {
      setIsFinish(true);
      return;
    }
    if (leftPoint===30 || rightPoint===30) {
      setIsFinish(true);
      return;
    }
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

      if (leftIsServer) {
        if (leftConsecutivePointSwitch) {
          setLeftConsecutivePointSwitchSwitch(false);
        } else {
          setLeftConsecutivePointSwitchSwitch(true);
        }
      }
      if (leftPoint===20 && rightPoint===20) {
        setDeuce(true);
      }
      if (isFinish) {
        setMessage(`${leftPoint + 100}`);
      } else {
        if (leftIsServer) {
          if (leftPoint +1 === rightPoint) {
            setMessage(`${leftPoint + 1}. All`);
          } else {
            setMessage(`${leftPoint + 1}. ${rightPoint}`);
          }
        } else {
          if (leftPoint +1 === rightPoint) {
            setMessage(`Service over. ${leftPoint + 1}. All`);
          } else {
            setMessage(`Service over. ${leftPoint + 1}. ${rightPoint}`);
          }
        }
      }
    }
  }

  function handleRightPointClick() {
    if ((leftPoint===21 || rightPoint===21) && !deuce) {
      setIsFinish(true);
      return;
    }
    if ( Math.abs(leftPoint - rightPoint) === 2 && deuce) {
      setIsFinish(true);
      return;
    }
    if (leftPoint===30 || rightPoint===30) {
      setIsFinish(true);
      return;
    }
    setRightIsServer(true);
    setLeftIsServer(false);
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
      if (rightIsServer) {
        if (rightConsecutivePointSwitch) {
          setRightConsecutivePointSwitchSwitch(false);
        } else {
          setRightConsecutivePointSwitchSwitch(true);
        }
      }
      if (leftPoint===20 && rightPoint===20) {
        setDeuce(true);
      }
      if (leftIsServer) {
        if (leftPoint +1 === rightPoint) {
          setMessage(`${leftPoint + 1}. All`);
        } else {
          setMessage(`${leftPoint + 1}. ${rightPoint}`);
        }
      } else {
        if (leftPoint +1 === rightPoint) {
          setMessage(`Service over. ${leftPoint + 1}. All`);
        } else {
          setMessage(`Service over. ${leftPoint + 1}. ${rightPoint}`);
        }
      }
      if (rightIsServer) {
        if (rightPoint +1 === leftPoint) {
          setMessage(`${rightPoint + 1}. All`);
        } else {
          setMessage(`${rightPoint + 1}. ${leftPoint}`);
        }
      } else {
        if (rightPoint +1 === leftPoint) {
          setMessage(`Service over. ${rightPoint + 1}. All`);
        } else {
          setMessage(`Service over. ${rightPoint + 1}. ${leftPoint}`);
        }
      }
    }
  }

  useEffect(() => {
    handleCallClick(message);
  }, [message])

  function handleCallClick (message) {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  function handleStartClick() {
    setIsStart(true);
    if ((isHorizPlayerChanged === true && isLeftVertPlayerChanged ===true && isRightVertPlayerChanged === false)
        || (isHorizPlayerChanged === true && isLeftVertPlayerChanged ===false && isRightVertPlayerChanged === true) ) {
      nextPoints[manipulated_0][0] = 0;
      nextPoints[manipulated_3][0] = 0;
    } else {
      nextPoints[manipulated_1][0] = 0;
      nextPoints[manipulated_2][0] = 0;
    }
    setPointHistory([[nextPoints[0], nextPoints[1], nextPoints[2], nextPoints[3]]]);
    
    if (leftIsServer){
      if ((isHorizPlayerChanged === true && isLeftVertPlayerChanged ===true && isRightVertPlayerChanged === false)
          || (isHorizPlayerChanged === true && isLeftVertPlayerChanged ===false && isRightVertPlayerChanged === true) ) {
        nextSorR[manipulated_0][0] = "S"
        nextSorR[manipulated_3][0] = "R"
      } else {
        nextSorR[manipulated_1][0] = "S"
        nextSorR[manipulated_2][0] = "R"
      }
    } else {
      if ((isHorizPlayerChanged === true && isLeftVertPlayerChanged ===true && isRightVertPlayerChanged === false)
          || (isHorizPlayerChanged === true && isLeftVertPlayerChanged ===false && isRightVertPlayerChanged === true) ) {
        nextSorR[manipulated_0][0] = "R"
        nextSorR[manipulated_3][0] = "S"
      } else {
        nextSorR[manipulated_1][0] = "R"
        nextSorR[manipulated_2][0] = "S"
      }
    }
    setSorRHistory([[nextSorR[0], nextSorR[1], nextSorR[2], nextSorR[3]]]);
    setMessage("Love All. Play");
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
                       leftUpPlayer={doublesLeftUpPlayer} setLeftUpPlayer={setDoublesLeftUpPlayer}
                       leftDownPlayer={doublesLeftDownPlayer} setLeftDownPlayer={setDoublesLeftDownPlayer}
                       rightUpPlayer={doublesRightUpPlayer} setRightUpPlayer={setDoublesRightUpPlayer}
                       rightDownPlayer={doublesRightDownPlayer} setRightDownPlayer={setDoublesRightDownPlayer}
                       isStart={isStart}
                       manipulated_0={manipulated_0} setManipulated_0={setManipulated_0} 
                       manipulated_1={manipulated_1} setManipulated_1={setManipulated_1}
                       manipulated_2={manipulated_2} setManipulated_2={setManipulated_2}
                       manipulated_3={manipulated_3} setManipulated_3={setManipulated_3}
                       isHorizPlayerChanged={isHorizPlayerChanged} setIsHorizPlayerChanged={setIsHorizPlayerChanged}
                       isLeftVertPlayerChanged={isLeftVertPlayerChanged} setIsLeftvertPlayerChanged={setIsLeftvertPlayerChanged}
                       isRightVertPlayerChanged={isRightVertPlayerChanged} setIsRightVertPlayerChanged={setIsRightVertPlayerChanged}
                       leftConsecutivePointSwitch={leftConsecutivePointSwitch}
                       rightConsecutivePointSwitch={rightConsecutivePointSwitch}
        />
        <ScoreSheet 
          currentPoints={currentPoints} currentSorR={currentSorR}
          leftUpPlayer={Players[manipulated_0]} leftDownPlayer={Players[manipulated_1]}
          rightUpPlayer={Players[manipulated_2]} rightDownPlayer={Players[manipulated_3]}
          manipulated_0={manipulated_0} manipulated_1={manipulated_1} 
          manipulated_2={manipulated_2} manipulated_3={manipulated_3}
          isHorizPlayerChanged={isHorizPlayerChanged}
          isLeftVertPlayerChanged={isLeftVertPlayerChanged}
          isRightVertPlayerChanged={isRightVertPlayerChanged}
        />
        <StartButton isStart={isStart} onStartClick={handleStartClick}/>
        <Call snackPack={snackPack} setSnackPack={setSnackPack}/>
      </Container>
    </div>
  );
}