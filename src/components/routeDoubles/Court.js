import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Fab from '@mui/material/Fab';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SwapVertIcon from '@mui/icons-material/SwapVert';

export default function Court( {rightPoint, rightIsServer, 
                                leftPoint, leftIsServer,
                                leftUpPlayer, setLeftUpPlayer,
                                leftDownPlayer, setLeftDownPlayer,
                                rightUpPlayer, setRightUpPlayer,
                                rightDownPlayer, setRightDownPlayer,
                                isStart,
                                manipulated_0, setManipulated_0,
                                manipulated_1, setManipulated_1,
                                manipulated_2, setManipulated_2,
                                manipulated_3, setManipulated_3,
                                isHorizPlayerChanged, setIsHorizPlayerChanged,
                                isLeftVertPlayerChanged, setIsLeftvertPlayerChanged,
                                isRightVertPlayerChanged, setIsRightVertPlayerChanged}) {

  function handleServay () {
    console.log(`manipulated_0=${manipulated_0}, manipulated_1=${manipulated_1}, manipulated_2=${manipulated_2}, manipulated_3=${manipulated_3}`);
  }
  function handleHorizontalPlayerChange () {
    if (isLeftVertPlayerChanged === isRightVertPlayerChanged) {
      setManipulated_0(manipulated_2);
      setManipulated_2(manipulated_0);
      setManipulated_1(manipulated_3);
      setManipulated_3(manipulated_1);
    } else {
      setManipulated_1(manipulated_2);
      setManipulated_2(manipulated_1);
      setManipulated_0(manipulated_3);
      setManipulated_3(manipulated_0);
    }
    setLeftUpPlayer(rightUpPlayer);
    setLeftDownPlayer(rightDownPlayer);
    setRightUpPlayer(leftUpPlayer);
    setRightDownPlayer(leftDownPlayer);
    if (isHorizPlayerChanged) {
      setIsHorizPlayerChanged(false);
    } else {
      setIsHorizPlayerChanged(true);
    }
    console.log(`manipulated_0=${manipulated_0}, manipulated_1=${manipulated_1}, manipulated_2=${manipulated_2}, manipulated_3=${manipulated_3}`);
  }

  function handleLeftVerticalPlayerChange () {
    if (isHorizPlayerChanged) {
      setManipulated_2(manipulated_3);
      setManipulated_3(manipulated_2);
    } else {
      setManipulated_0(manipulated_1);
      setManipulated_1(manipulated_0);
    }
    setLeftUpPlayer(leftDownPlayer);
    setLeftDownPlayer(leftUpPlayer);
    if (isLeftVertPlayerChanged) {
      setIsLeftvertPlayerChanged(false);
    } else {
      setIsLeftvertPlayerChanged(true);
    }
    console.log(`manipulated_0=${manipulated_0}, manipulated_1=${manipulated_1}, manipulated_2=${manipulated_2}, manipulated_3=${manipulated_3}`);
  }

  function handleRightVerticalPlayerChange () {
    if (isHorizPlayerChanged) {
      setManipulated_0(manipulated_1);
      setManipulated_1(manipulated_0);
    } else {
      setManipulated_2(manipulated_3);
      setManipulated_3(manipulated_2);
    }
    setRightUpPlayer(rightDownPlayer);
    setRightDownPlayer(rightUpPlayer);
    if (isRightVertPlayerChanged) {
      setIsRightVertPlayerChanged(false);
    } else {
      setIsRightVertPlayerChanged(true);
    }
  }

  return (
    <div>
      <Box sx={{ height: {xs:200, sm:280, md:360}, backgroundColor: 'white', mt: 0.5 }}>
        <Grid container spacing={1}>
          <Grid xs={5}>
            <div className="Court">
              {!isStart &&
              <div className="switchVerticalButton">
                <Fab 
                  size="small" 
                  color="secondary" 
                  aria-label="add" 
                  line-height="0" 
                  sx={{ mt: {xs:9.5, sm:14.5, md:19.5} }}
                  onClick={() => handleLeftVerticalPlayerChange()}
                >
                  <SwapVertIcon/>
                </Fab>
              </div>
              }
              <LeftUpCourt leftPoint={leftPoint} 
                           leftIsServer={leftIsServer} 
                           leftUpPlayer={leftUpPlayer}
              />
              <LeftDownCourt leftPoint={leftPoint} 
                             leftIsServer={leftIsServer} 
                             leftDownPlayer={leftDownPlayer}
              />
            </div>
          </Grid>
          <Grid xs={2}>
            {!isStart &&
              <Fab 
                size="small" 
                color="primary" 
                aria-label="add" 
                line-height="0" 
                sx={{ mt: {xs:1.5, sm:14.5, md:19.5}, position: 'absolute' }}
                onClick={() => handleServay()}
              >
                <SwapVertIcon/>
              </Fab>
            }
            {!isStart &&
              <Fab 
                size="small" 
                color="primary" 
                aria-label="add" 
                line-height="100" 
                sx={{ mt: {xs:9.5, sm:14.5, md:19.5} }}
                onClick={() => handleHorizontalPlayerChange()}
              >
                <SwapHorizIcon/>
              </Fab>
            }
          </Grid>
          <Grid xs={5}>
            <div className="Court">
              {!isStart &&
               <div className="switchVerticalButton">
                <Fab 
                  size="small" 
                  color="secondary" 
                  aria-label="add" 
                  line-height="0" 
                  sx={{ mt: {xs:9.5, sm:14.5, md:19.5}, position: 'absolute' }}
                  onClick={() => handleRightVerticalPlayerChange()}
                >
                  <SwapVertIcon/>
                </Fab>
              </div>
              }
              <RightUpCourt rightPoint={rightPoint} 
                            rightIsServer={rightIsServer} 
                            rightUpPlayer={rightUpPlayer}
              />
              <RightDownCourt rightPoint={rightPoint} 
                              rightIsServer={rightIsServer} 
                              rightDownPlayer={rightDownPlayer}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

function LeftUpCourt({leftPoint, leftIsServer, leftUpPlayer}) {
  return(
    <div className="courtSquare">
      {leftIsServer && leftPoint%2 === 1 ? 
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}><LeftUpCourtPlayerName leftUpPlayer={leftUpPlayer}/></Box>
      :
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}><LeftUpCourtPlayerName leftUpPlayer={leftUpPlayer}/></Box>
    }
    </div>
  );
}

function LeftUpCourtPlayerName ({leftUpPlayer}) {
  return (
    <div className="playerName">
      {leftUpPlayer}
    </div>
  );
}

function LeftDownCourt({leftPoint, leftIsServer, leftDownPlayer}) {
  return(
    <div className="courtSquare">
      {leftIsServer && leftPoint%2 === 0 ? 
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}><LeftDownCourtPlayerName leftDownPlayer={leftDownPlayer}/></Box>
        :
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}><LeftDownCourtPlayerName leftDownPlayer={leftDownPlayer}/></Box>
      }
    </div>
  );
}

function LeftDownCourtPlayerName ({leftDownPlayer}) {
  return (
    <div className="playerName">
      {leftDownPlayer}
    </div>
  );
}

function RightUpCourt({rightPoint, rightIsServer, rightUpPlayer}) {
  return(
    <div className="courtSquare">
      {rightIsServer && rightPoint%2 === 0 ? 
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}><RightUpCourtPlayerName rightUpPlayer={rightUpPlayer}/></Box>
        :
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}><RightUpCourtPlayerName rightUpPlayer={rightUpPlayer} /></Box>
      }
    </div>
  );
}

function RightUpCourtPlayerName ({rightUpPlayer}) {
  return (
    <div className="playerName">
      {rightUpPlayer}
    </div>
  );
}

function RightDownCourt({rightPoint, rightIsServer, rightDownPlayer}) {
  return(
    <div className="courtSquare">
      {rightIsServer && rightPoint%2 === 1 ? 
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}><RightDownCourtPlayerName rightDownPlayer={rightDownPlayer}/></Box>
      :
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}><RightDownCourtPlayerName rightDownPlayer={rightDownPlayer}/></Box>
      }
    </div>
  );
}

function RightDownCourtPlayerName ({rightDownPlayer}) {
  return (
    <div className="playerName">
      {rightDownPlayer}
    </div>
  );
}
