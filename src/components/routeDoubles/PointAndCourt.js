import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';

import LeftPoint from './LeftPoint.js';
import RightPoint from './RightPoint.js';
import Court from './Court.js';

export default function PointAndCourt({ leftPoint, leftIsServer, handleLeftPointClick, 
                                        rightPoint, rightIsServer, handleRightPointClick,
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
                                        isRightVertPlayerChanged, setIsRightVertPlayerChanged,
                                        leftConsecutivePointSwitch, rightConsecutivePointSwitch}) {

  const sm_matches = useMediaQuery('(max-width:899px)');
  const md_matches = useMediaQuery('(min-width:900px)');

  return (
    <Box sx={{ flexGrow: 1, mt: 0.5 }}>
      <Grid container spacing={1}>
        {sm_matches && 
        <>
          <Grid xs={6} sm={6}>
            <LeftPoint leftPoint={leftPoint} leftIsServer={leftIsServer} onPointClick={handleLeftPointClick}/>
          </Grid>
          <Grid xs={6} sm={6}>
          <RightPoint rightPoint={rightPoint} rightIsServer={rightIsServer} onPointClick={handleRightPointClick}/>
          </Grid>
          <Grid xs={12} sm={12}>
            <Court leftPoint={leftPoint} leftIsServer={leftIsServer} 
                   rightPoint={rightPoint} rightIsServer={rightIsServer}
                   leftUpPlayer={leftUpPlayer} setLeftUpPlayer={setLeftUpPlayer}
                   leftDownPlayer={leftDownPlayer} setLeftDownPlayer={setLeftDownPlayer}
                   rightUpPlayer={rightUpPlayer} setRightUpPlayer={setRightUpPlayer}
                   rightDownPlayer={rightDownPlayer} setRightDownPlayer={setRightDownPlayer}
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
          </Grid>
        </>
        }
        {md_matches && <>
          <Grid md={2.5}>
            <LeftPoint leftPoint={leftPoint} leftIsServer={leftIsServer} onPointClick={handleLeftPointClick}/>
          </Grid>
          <Grid md={7}>
            <Court leftPoint={leftPoint} leftIsServer={leftIsServer} 
                   rightPoint={rightPoint} rightIsServer={rightIsServer}
                   leftUpPlayer={leftUpPlayer} setLeftUpPlayer={setLeftUpPlayer}
                   leftDownPlayer={leftDownPlayer} setLefDownPlayer={setLeftDownPlayer}
                   rightUpPlayer={rightUpPlayer} setRightUpPlayer={setRightUpPlayer}
                   rightDownPlayer={rightDownPlayer} setRightDownPlayer={setRightDownPlayer}
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
          </Grid>
          <Grid md={2.5}>
            <RightPoint rightPoint={rightPoint} rightIsServer={rightIsServer} onPointClick={handleRightPointClick}/>
          </Grid>
        </>}
      </Grid>
    </Box>
  );
}