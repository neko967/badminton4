import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';

import LeftPoint from './LeftPoint.js';
import RightPoint from './RightPoint.js';
import Court from './Court.js';

export default function PointAndCourt({ leftPoint, leftIsServer, handleLeftPointClick, rightPoint, rightIsServer, handleRightPointClick, isStart,leftPlayer, setLeftPlayer, rightPlayer, setRightPlayer }) {

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
            <Court 
              leftPoint={leftPoint} 
              leftIsServer={leftIsServer} 
              rightPoint={rightPoint} 
              rightIsServer={rightIsServer} 
              isStart={isStart}
              leftPlayer={leftPlayer}
              setLeftPlayer={setLeftPlayer}
              rightPlayer={rightPlayer}
              setRightPlayer={setRightPlayer}
            />
          </Grid>
        </>
        }
        {md_matches && <>
          <Grid md={2.5}>
            <LeftPoint leftPoint={leftPoint} leftIsServer={leftIsServer} onPointClick={handleLeftPointClick}/>
          </Grid>
          <Grid md={7}>
            <Court 
              leftPoint={leftPoint} 
              leftIsServer={leftIsServer} 
              rightPoint={rightPoint} 
              rightIsServer={rightIsServer} 
              isStart={isStart}
              leftPlayer={leftPlayer}
              setLeftPlayer={setLeftPlayer}
              rightPlayer={rightPlayer}
              setRightPlayer={setRightPlayer}
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