import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

export default function ScoreSheet ({currentPoints, currentSorR,
                                     leftUpPlayer, leftDownPlayer,
                                     rightUpPlayer, rightDownPlayer,
                                     manipulated_0, manipulated_1, manipulated_2, manipulated_3,
                                     isHorizPlayerChanged, isLeftVertPlayerChanged, isRightVertPlayerChanged}) {
  console.log(`isHorizPlayerChanged: ${isHorizPlayerChanged}`);
  console.log(`isLeftVertPlayerChanged: ${isLeftVertPlayerChanged}`);
  console.log(`isRightVertPlayerChanged: ${isRightVertPlayerChanged}`);

  return (
    <div className="scoreSheet">
      <Box sx={{ display: 'fix', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: 1800, height: 110, }, }} >
        <Paper variant="outlined" square>
        <div className="board-row">
          <LeftUpPlayerName leftUpPlayer={leftUpPlayer} leftDownPlayer={leftDownPlayer}
                            rightUpPlayer={rightUpPlayer} rightDownPlayer={rightDownPlayer}
                            isHorizPlayerChanged={isHorizPlayerChanged}
                            isLeftVertPlayerChanged={isLeftVertPlayerChanged}
                            isRightVertPlayerChanged={isRightVertPlayerChanged}
          />
          <button className="doublesSquare">{currentSorR[0][0]}</button>
          <PointInScoreSheet squares={currentPoints[0]}/>
        </div>
        <div className="board-row">
          <LeftDownPlayerName leftUpPlayer={leftUpPlayer} leftDownPlayer={leftDownPlayer}
                              rightUpPlayer={rightUpPlayer} rightDownPlayer={rightDownPlayer}
                              isHorizPlayerChanged={isHorizPlayerChanged}
                              isLeftVertPlayerChanged={isLeftVertPlayerChanged}
                              isRightVertPlayerChanged={isRightVertPlayerChanged}
          />
          <button className="doublesSquare">{currentSorR[1][0]}</button>
          <PointInScoreSheet squares={currentPoints[1]}/>
        </div>
        <Divider />
        <div className="board-row">
          <RightUpPlayerName leftUpPlayer={leftUpPlayer} leftDownPlayer={leftDownPlayer}
                             rightUpPlayer={rightUpPlayer} rightDownPlayer={rightDownPlayer}
                             isHorizPlayerChanged={isHorizPlayerChanged}
                             isLeftVertPlayerChanged={isLeftVertPlayerChanged}
                             isRightVertPlayerChanged={isRightVertPlayerChanged}
          />
          <button className="doublesSquare">{currentSorR[2][0]}</button>
          <PointInScoreSheet squares={currentPoints[2]}/>
        </div>
        <div className="board-row">
          <RightDownPlayerName leftUpPlayer={leftUpPlayer} leftDownPlayer={leftDownPlayer}
                               rightUpPlayer={rightUpPlayer} rightDownPlayer={rightDownPlayer}
                               isHorizPlayerChanged={isHorizPlayerChanged}
                               isLeftVertPlayerChanged={isLeftVertPlayerChanged}
                               isRightVertPlayerChanged={isRightVertPlayerChanged}
          />
          <button className="doublesSquare">{currentSorR[3][0]}</button>
          <PointInScoreSheet squares={currentPoints[3]}/>
        </div>
        </Paper>
      </Box>
    </div>
  );
}

function LeftUpPlayerName ({leftUpPlayer, leftDownPlayer,
                            rightUpPlayer, rightDownPlayer,
                            isHorizPlayerChanged, isLeftVertPlayerChanged, isRightVertPlayerChanged}) {
  return (
    <>

            <button className="doublesNameSquare">{leftUpPlayer}</button>
    </>
  );
}

function LeftDownPlayerName ({leftUpPlayer, leftDownPlayer,
                              rightUpPlayer, rightDownPlayer, 
                              isHorizPlayerChanged, isLeftVertPlayerChanged, isRightVertPlayerChanged}) {
  return (
    <>
    
           <button className="doublesNameSquare">{leftDownPlayer}</button>
      
    </>
  );
}

function RightUpPlayerName ({ leftUpPlayer, leftDownPlayer,
                              rightUpPlayer, rightDownPlayer,
                              isHorizPlayerChanged, isLeftVertPlayerChanged, isRightVertPlayerChanged}) {
  return (
    <>
    
           <button className="doublesNameSquare">{rightUpPlayer}</button>  
      
    </>
  );
}

function RightDownPlayerName ({leftUpPlayer, leftDownPlayer,
                               rightUpPlayer, rightDownPlayer, 
                               isHorizPlayerChanged, isLeftVertPlayerChanged, isRightVertPlayerChanged}) {
  return (
    <>
    
           <button className="doublesNameSquare">{rightDownPlayer}</button>  
      
    </>
  );
}

function PointInScoreSheet ({squares})  {
  return (
    <>
      <Square value={squares[0]} />
      <Square value={squares[1]} />
      <Square value={squares[2]} />
      <Square value={squares[3]} />
      <Square value={squares[4]} />
      <Square value={squares[5]} />
      <Square value={squares[6]} />
      <Square value={squares[7]} />
      <Square value={squares[8]} />
      <Square value={squares[9]} />
      <Square value={squares[10]} />
      <Square value={squares[11]} />
      <Square value={squares[12]} />
      <Square value={squares[13]} />
      <Square value={squares[14]} />
      <Square value={squares[15]} />
      <Square value={squares[16]} />
      <Square value={squares[17]} />
      <Square value={squares[18]} />
      <Square value={squares[19]} />
      <Square value={squares[20]} />
      <Square value={squares[21]} />
      <Square value={squares[22]} />
      <Square value={squares[23]} />
      <Square value={squares[24]} />
      <Square value={squares[25]} />
      <Square value={squares[26]} />
      <Square value={squares[27]} />
      <Square value={squares[28]} />
      <Square value={squares[29]} />
      <Square value={squares[30]} />
      <Square value={squares[31]} />
      <Square value={squares[32]} />
      <Square value={squares[33]} />
      <Square value={squares[34]} />
      <Square value={squares[35]} />
      <Square value={squares[36]} />
      <Square value={squares[37]} />
      <Square value={squares[38]} />
      <Square value={squares[39]} />
      <Square value={squares[40]} />
      <Square value={squares[41]} />
      <Square value={squares[42]} />
      <Square value={squares[43]} />
      <Square value={squares[44]} />
      <Square value={squares[45]} />
      <Square value={squares[46]} />
      <Square value={squares[47]} />
      <Square value={squares[48]} />
      <Square value={squares[49]} />
      <Square value={squares[50]} />
      <Square value={squares[51]} />
      <Square value={squares[52]} />
      <Square value={squares[53]} />
      <Square value={squares[54]} />
      <Square value={squares[55]} />
      <Square value={squares[56]} />
      <Square value={squares[57]} />
      <Square value={squares[58]} />
      <Square value={squares[59]} />
    </>
  );
}

function Square ({ value, onSquareClick }) {

  return <button className="doublesSquare" onClick={onSquareClick}>{ value }</button>;
}