import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';


export default function Court( {rightPoint, rightIsServer, 
                                leftPoint, leftIsServer,
                                leftUpPlayer, leftDownPlayer,
                                rightUpPlayer, rightDownPlayer}) {

  return (
    <div>
      <Box sx={{ height: {xs:200, sm:280, md:360}, backgroundColor: 'white', mt: 0.5 }}>
        <Grid container spacing={1}>
          <Grid xs={5}>
            <LeftUpCourt leftPoint={leftPoint} 
                         leftIsServer={leftIsServer} 
                         leftUpPlayer={leftUpPlayer}
            />
            <LeftDownCourt leftPoint={leftPoint} 
                           leftIsServer={leftIsServer} 
                           leftDownPlayer={leftDownPlayer}
            />
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={5}>
            <RightUpCourt rightPoint={rightPoint} 
                          rightIsServer={rightIsServer} 
                          rightUpPlayer={rightUpPlayer}
            />
            <RightDownCourt rightPoint={rightPoint} 
                            rightIsServer={rightIsServer} 
                            rightDownPlayer={rightDownPlayer}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

function LeftUpCourt({leftPoint, leftIsServer, leftUpPlayer}) {
  return(
    <>
      {leftIsServer && leftPoint%2 === 1 ? 
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}><LeftUpCourtPlayerName leftUpPlayer={leftUpPlayer}/></Box>
      :
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}><LeftUpCourtPlayerName leftUpPlayer={leftUpPlayer}/></Box>
    }
    </>
  );
}

function LeftUpCourtPlayerName ({leftUpPlayer}) {
  return (
    <>
      {leftUpPlayer}
    </>
  );
}

function LeftDownCourt({leftPoint, leftIsServer, leftDownPlayer}) {
  return(
    <>
      {leftIsServer && leftPoint%2 === 0 ? 
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}>{leftDownPlayer}</Box>
        :
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}>{leftDownPlayer}</Box>
      }
    </>
  );
}

function RightUpCourt({rightPoint, rightIsServer, rightUpPlayer}) {
  return(
    <>
      {rightIsServer && rightPoint%2 === 0 ? 
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}>{rightUpPlayer}</Box>
        :
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}>{rightUpPlayer}</Box>
      }
    </>
  );
}

function RightDownCourt({rightPoint, rightIsServer, rightDownPlayer}) {
  return(
    <>
      {rightIsServer && rightPoint%2 === 1 ? 
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}>{rightDownPlayer}</Box>
      :
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}>{rightDownPlayer}</Box>
      }
    </>
  );
}
