import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


export default function Court() {
  return (
    <div>
      <Box sx={{ height: {xs:200, sm:280, md:360}, backgroundColor: 'white', mt: 0.5 }}>
        <Grid container spacing={1}>
          <Grid xs={5}>
            <LeftUpCourt/>
            <LeftDownCourt/>
          </Grid>
          <Grid xs={2}>
          </Grid>
          <Grid xs={5}>
            <RightUpCourt/>
            <RightDownCourt/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

function LeftUpCourt() {
  return(
    <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'blue'}}></Box>
  );
}

function LeftDownCourt() {
  return(
    <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red'}}></Box>
  );
}

function RightUpCourt() {
  return(
    <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red'}}></Box>
  );
}

function RightDownCourt() {
  return(
    <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'blue'}}></Box>
  );
}
