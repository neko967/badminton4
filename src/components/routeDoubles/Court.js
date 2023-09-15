import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';


export default function Court( {rightPoint, rightIsServer, leftPoint, leftIsServer }) {

  return (
    <div>
      <Box sx={{ height: {xs:200, sm:280, md:360}, backgroundColor: 'white', mt: 0.5 }}>
        <Grid container spacing={1}>
          <Grid xs={5}>
            <LeftUpCourt leftPoint={leftPoint} leftIsServer={leftIsServer}/>
            <LeftDownCourt leftPoint={leftPoint} leftIsServer={leftIsServer}/>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={5}>
            <RightUpCourt rightPoint={rightPoint} rightIsServer={rightIsServer}/>
            <RightDownCourt rightPoint={rightPoint} rightIsServer={rightIsServer}/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

function LeftUpCourt({leftPoint, leftIsServer}) {
  
  return(
    <>
      {leftIsServer && leftPoint%2 === 1 ? 
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red'}}></Box>
      :
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white'}}></Box>
    }
    </>
  );
}

function LeftDownCourt({leftPoint, leftIsServer}) {
  return(
    <>
      {leftIsServer && leftPoint%2 === 0 ? 
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red'}}></Box>
        :
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white'}}></Box>
      }
    </>
  );
}

function RightUpCourt({rightPoint, rightIsServer}) {
  return(
    <>
      {rightIsServer && rightPoint%2 === 0 ? 
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red'}}></Box>
        :
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white'}}></Box>
      }
    </>
  );
}

function RightDownCourt({rightPoint, rightIsServer}) {
  return(
    <>
      {rightIsServer && rightPoint%2 === 1 ? 
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red'}}></Box>
      :
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white'}}></Box>
      }
    </>
  );
}
